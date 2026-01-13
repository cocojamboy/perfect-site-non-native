
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe outside component to avoid recreation
const stripePromise = loadStripe('pk_test_47byyvSBHt64SH0zPiMhRyGh009GFPTuQG');

const CheckoutForm = ({ totalAmount, hasBump, setHasBump }) => {
    const stripe = useStripe();
    const elements = useElements();

    // Customer Info State
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        // 1. Send Order Data to Google Sheets
        try {
            await fetch("https://script.google.com/macros/s/AKfycbzdXm1jyTehWAOWccULrI4CFIWRA4udZwt3WNufR4RN85uKLS7o1leK8rHubh26oIkR/exec", {
                method: "POST",
                mode: "no-cors", // Important for Google Apps Script
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    amount: totalAmount,
                    product: hasBump ? "Guide + Priority VIP" : "Guide Standard",
                    id: "PENDING_STRIPE_CONFIRMATION"
                })
            });
        } catch (err) {
            console.error("Google Sheets Error:", err);
            // Continue processing payment
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL where the user is redirected after payment
                return_url: `${window.location.origin}/download-guide-success-x9k2`,
                payment_method_data: {
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message as string);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Contact Info */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Contact Information</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-bold uppercase mb-1 opacity-70">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@email.com"
                            className="w-full border-2 border-black p-3 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors rounded-none"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase mb-1 opacity-70">Full Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full border-2 border-black p-3 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors rounded-none"
                        />
                    </div>
                </div>
            </div>

            {/* Payment Element (Cards, Apple Pay, etc) */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 mt-6">Payment Details</h3>
                <div className="border-2 border-black p-4 rounded bg-white">
                    <PaymentElement />
                </div>
            </div>

            {/* MESSAGE CONTAINER */}
            {message && <div className="text-red-500 text-sm font-bold text-center">{message}</div>}

            {/* ORDER BUMP */}
            <div className="border-2 border-dashed border-[#FF4A22] bg-[#FFF0EB] p-4 rounded relative mt-6">
                <div className="absolute -top-3 left-4 bg-[#FF4A22] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    One-Time Offer
                </div>
                <label className="flex items-start gap-4 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={hasBump}
                        onChange={(e) => setHasBump(e.target.checked)}
                        className="mt-1 w-5 h-5 accent-[#FF4A22]"
                    />
                    <div>
                        <div className="font-bold text-sm text-[#FF4A22] uppercase mb-1">
                            Yes! Add Priority Application Review (+$17)
                        </div>
                        <p className="text-[11px] leading-tight opacity-70">
                            Get your CV & Intro Video reviewed by our team with feedback within 48 hours. Ensure you don't get filtered out.
                        </p>
                    </div>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading || !stripe || !elements}
                className="w-full bg-[#FF4A22] text-white border-2 border-black p-4 font-dela text-lg uppercase tracking-wider sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Processing...' : `COMPLETE ORDER • $${totalAmount}`}
            </button>

            <div className="text-center">
                <p className="text-[10px] opacity-40 font-bold uppercase">
                    <span className="mr-2">🔒 Secure Payment</span>
                    <span className="mr-2">•</span>
                    <span>256-Bit SSL Encryption</span>
                </p>
            </div>
        </form>
    );
};

const CheckoutPage: React.FC = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [hasBump, setHasBump] = useState(false);

    // Base Price $19 + Bump $17
    const totalAmount = hasBump ? 36 : 19;

    const [error, setError] = useState("");

    useEffect(() => {
        // Create PaymentIntent via Google Script Backend
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0u5ylpMKAKAIKVlfgYI0LxupltYCC4H-ju-H6i7K3KkHBT8C_8i1yFS0zGXQJO95b/exec";

        // Use URLSearchParams for simple CORS handling with Google Apps Script
        const formData = new URLSearchParams();
        formData.append("data", JSON.stringify({ hasBump, items: [{ id: "guide" }] }));

        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        })
            .then(async (res) => {
                if (!res.ok) throw new Error("Connection Error: " + res.statusText);
                return res.json();
            })
            .then((data) => {
                if (data.error) throw new Error(data.error);
                if (!data.clientSecret) throw new Error("No secret returned from backend.");
                setClientSecret(data.clientSecret);
            })
            .catch((err) => {
                console.error("Payment Init Error:", err);
                setError(err.message + ". Try refreshing.");
            });
    }, [hasBump]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#FF4A22',
            colorBackground: '#ffffff',
            colorText: '#000000',
            fontFamily: '"Montserrat", system-ui, sans-serif',
            borderRadius: '0px', // Brutalist style
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="min-h-screen bg-[#F8F0DD] flex flex-col md:flex-row font-sans text-black">

            {/* LEFT: Order Summary & Trust */}
            <div className="w-full md:w-1/2 bg-[#F8F0DD] p-8 md:p-12 lg:p-20 border-b-4 md:border-b-0 md:border-r-4 border-black">

                {/* Logo */}
                <div className="mb-12">
                    <div className="font-dela text-2xl tracking-tighter">NOT NATIVE.<br />NOT SORRY.™</div>
                </div>

                {/* Product Box */}
                <div className="mb-8">
                    <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">Order Summary</div>
                    <div className="bg-white border-2 border-black p-6 card-shadow flex gap-4 items-start">
                        <img src="/photo/guide-cover-mockup.png" alt="Guide" className="w-20 h-auto border border-black bg-gray-200" />
                        <div className="flex-1">
                            <h3 className="font-dela text-lg leading-tight mb-1">Vietnam Teaching Guide (2025)</h3>
                            <ul className="text-[10px] font-bold opacity-60 space-y-1 mb-3">
                                <li>+ 30-Day Hire Plan</li>
                                <li>+ Interview Cheat Sheet</li>
                                <li>+ First Week Survival Guide</li>
                            </ul>
                            <div className="flex justify-between items-end border-t-2 border-dashed border-black/10 pt-3">
                                <span className="text-xs font-bold line-through opacity-40">$47.00</span>
                                <span className="font-dela text-xl text-[#FF4A22]">$19.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Bump Summary Item */}
                    {hasBump && (
                        <div className="bg-[#FFF0EB] border-2 border-black border-t-0 p-4 flex gap-4 items-center animate-pulse-once">
                            <div className="text-2xl">⚡</div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xs uppercase text-[#FF4A22]">Priority Application Review</h3>
                                <p className="text-[10px] opacity-60">Expert feedback on your CV & Video.</p>
                            </div>
                            <div className="font-dela text-sm text-[#FF4A22]">+$17.00</div>
                        </div>
                    )}

                    {/* Total */}
                    <div className="mt-6 flex justify-between items-end border-t-4 border-black pt-4">
                        <span className="font-dela text-lg">TOTAL DUE:</span>
                        <span className="font-dela text-3xl">${totalAmount}.00</span>
                    </div>

                </div>

                {/* Trust Badges */}
                <div className="space-y-6 opacity-60">
                    <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-green-600">✔</span> 7-Day Money Back Guarantee
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-green-600">✔</span> Secure 256-bit SSL Encryption
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-green-600">✔</span> Instant Digital Delivery
                    </div>
                </div>
            </div>

            {/* RIGHT: Payment Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-20 relative">
                <h2 className="font-dela text-2xl mb-8 uppercase">Secure Payment</h2>

                {error ? (
                    <div className="text-red-500 font-bold p-4 border-2 border-red-500 bg-red-50 text-center">
                        ⚠️ Payment System Error: <br />{error}
                    </div>
                ) : clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm totalAmount={totalAmount} hasBump={hasBump} setHasBump={setHasBump} />
                    </Elements>
                ) : (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
