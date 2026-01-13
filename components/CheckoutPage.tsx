
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe outside component to avoid recreation
const stripePromise = loadStripe('pk_live_3Lv3oPF4oFO25xALl6EDl9DJ00PnUuvfRQ');

const CheckoutForm = ({ totalAmount, hasBump, setHasBump, googleScriptUrl, onApplyCoupon, couponApplied }) => {
    const stripe = useStripe();
    const elements = useElements();

    // Customer Info State
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [couponInput, setCouponInput] = useState('');

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleApplyCoupon = () => {
        onApplyCoupon(couponInput);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        // 1. CONFIRM PAYMENT
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: {
                return_url: `${window.location.origin}/download-guide-success-x9k2`,
                payment_method_data: {
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            },
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message as string);
            } else {
                setMessage("An unexpected error occurred.");
            }
            setIsLoading(false);
            return;
        }

        if (paymentIntent && paymentIntent.status === 'succeeded') {
            // 2. PAYMENT SUCCESS -> TRIGGER EMAIL & LOGGING
            try {
                const formData = new URLSearchParams();
                formData.append("action", "send_fulfillment");
                formData.append("name", name);
                formData.append("email", email);
                formData.append("amount", totalAmount.toString());
                formData.append("hasBump", hasBump.toString());
                formData.append("couponCode", couponApplied || "");

                await fetch(googleScriptUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData.toString()
                });

                setTimeout(() => {
                    window.location.href = "/download-guide-success-x9k2";
                }, 1000);

            } catch (err) {
                console.error("Fulfillment Error:", err);
                window.location.href = "/download-guide-success-x9k2";
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Contact Info */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Contact Information</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-bold uppercase mb-1 opacity-70">Full Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Galt"
                            className="w-full border-2 border-black p-3 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors rounded-none"
                        />
                    </div>
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
                </div>
            </div>

            {/* Coupon Code Input */}
            <div>
                <label className="block text-[10px] font-bold uppercase mb-1 opacity-70">Coupon Code</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="ENTER CODE"
                        className="w-full border-2 border-black p-3 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors rounded-none uppercase"
                    />
                    <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="bg-black text-white px-6 font-dela text-xs uppercase hover:bg-[#FF4A22] transition-colors sticker-shadow"
                    >
                        Apply
                    </button>
                </div>
                {couponApplied.toLowerCase() === 'test' && (
                    <div className="text-xs font-bold text-green-600 mt-2">
                        ✅ TEST CODE APPLIED (PRICE SET TO $1)
                    </div>
                )}
            </div>

            {/* Payment Element */}
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
                            Yes! Add Priority Application Review (+$49)
                        </div>
                        <p className="text-[11px] leading-tight opacity-70">
                            Get your CV & Intro Video reviewed by our team with feedback within 48 work hours. Ensure you don't get filtered out.
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
    const [couponCode, setCouponCode] = useState("");

    // Price Logic
    const BASE_PRICE = 19;
    const BUMP_PRICE = 49; // Updated to $49
    let totalAmount = hasBump ? (BASE_PRICE + BUMP_PRICE) : BASE_PRICE;

    if (couponCode.toLowerCase() === 'test') {
        totalAmount = 1; // Override validation
    }

    const [error, setError] = useState("");

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYZdqyldKy5oLegfnIz3l16a0rigcLz7-xGQegV2-9YLJ5A4ckk1bIPyej0CNr__Zd/exec";

    useEffect(() => {
        const formData = new URLSearchParams();

        // ACTION: payment_intent (Flat Data)
        formData.append("action", "payment_intent");
        formData.append("hasBump", hasBump.toString());
        formData.append("couponCode", couponCode);
        formData.append("items", JSON.stringify([{ id: "guide" }]));

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
                if (data.error) {
                    const msg = data.error.message || JSON.stringify(data.error);
                    throw new Error(msg);
                }
                const secret = data.client_secret || data.clientSecret;
                if (!secret) throw new Error("No secret returned from backend.");
                setClientSecret(secret);
            })
            .catch((err) => {
                console.error("Payment Init Error:", err);
                setError(err.message + ". Try refreshing.");
            });
    }, [hasBump, couponCode]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#FF4A22',
            colorBackground: '#ffffff',
            colorText: '#000000',
            fontFamily: '"Montserrat", system-ui, sans-serif',
            borderRadius: '0px',
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
                        <img src="/photo/guide_mockup.jpg" alt="Guide" className="w-20 h-auto border border-black bg-gray-200" />
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
                            <div className="font-dela text-sm text-[#FF4A22]">+$49.00</div>
                        </div>
                    )}

                    {/* Total */}
                    <div className="mt-6 flex justify-between items-end border-t-4 border-black pt-4">
                        <span className="font-dela text-lg">TOTAL DUE:</span>
                        <div className="flex flex-col items-end">
                            {couponCode === 'test' && (
                                <span className="text-xs line-through opacity-50 font-bold">${hasBump ? 68 : 19}.00</span>
                            )}
                            <span className="font-dela text-3xl">${totalAmount}.00</span>
                        </div>
                    </div>

                </div>

                {/* Trust Badges */}
                <div className="space-y-6 opacity-60">
                    <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-green-600">✔</span> 7-Day Money Back Guarantee
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
                    <Elements key={clientSecret} options={options} stripe={stripePromise}>
                        <CheckoutForm
                            totalAmount={totalAmount}
                            hasBump={hasBump}
                            setHasBump={setHasBump}
                            googleScriptUrl={GOOGLE_SCRIPT_URL}
                            onApplyCoupon={setCouponCode}
                            couponApplied={couponCode}
                        />
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
