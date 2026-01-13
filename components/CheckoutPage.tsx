
import React, { useState } from 'react';

const CheckoutPage: React.FC = () => {
    // Form State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    // Mock Payment Handler (This would use Stripe logic in production)
    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // 1. Send data to Google Sheets (Example logic)
        // await postToGoogleSheets({ name, email });

        // 2. Simulate Payment Delay
        setTimeout(() => {
            setIsProcessing(false);
            alert("This is a DEMO checkout. In production, this would charge the card via Stripe.");
        }, 1500);
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
                    <div className="text-sm font-bold opacity-40 uppercase tracking-widest mb-4">Orde Summary</div>
                    <div className="bg-white border-2 border-black p-6 card-shadow flex gap-4 items-start">
                        <img src="/photo/guide-cover-mockup.png" alt="Guide Cover" className="w-20 h-auto border border-black" />
                        <div className="flex-1">
                            <h3 className="font-dela text-lg leading-tight mb-1">Vietnam Teaching Guide (2025 Edition)</h3>
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
                        <span className="text-green-600">✔</span> Instant Digital Delivery (Email)
                    </div>
                </div>

                {/* Testimonial */}
                <div className="mt-12 pt-8 border-t-2 border-black/10">
                    <p className="text-sm italic font-serif leading-relaxed mb-4">
                        "I was skeptical because I don't have a passport from a 'native' country. This guide showed me exactly how to bypass the filters. Hired in 3 weeks."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-black"></div>
                        <div>
                            <div className="font-bold text-xs uppercase">Maria S.</div>
                            <div className="text-[10px] opacity-60 uppercase">Now teaching in Da Nang</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Payment Form */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-20 relative">

                <h2 className="font-dela text-2xl mb-8 uppercase">Secure Checkout</h2>

                <form onSubmit={handlePayment} className="space-y-6 max-w-md">

                    {/* Contact Info */}
                    <div>
                        <label className="block text-xs font-bold uppercase mb-2 tracking-widest">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="you@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-2 border-black p-4 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase mb-2 tracking-widest">Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border-2 border-black p-4 font-bold text-sm outline-none focus:bg-[#F8F0DD] transition-colors"
                        />
                    </div>

                    {/* Payment Section (Mocking Stripe Elements) */}
                    <div className="pt-6 border-t-2 border-black/10">
                        <label className="block text-xs font-bold uppercase mb-4 tracking-widest">Payment Method</label>

                        {/* Fake Stripe Element Container */}
                        <div className="border-2 border-black p-4 rounded mb-4 bg-gray-50">
                            <div className="flex justify-between items-center mb-4 opacity-50">
                                <span className="text-xs font-bold">Credit/Debit Card</span>
                                <div className="flex gap-2">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/visa.png" className="h-4" alt="Visa" />
                                    <img src="https://img.icons8.com/ios-filled/50/000000/mastercard.png" className="h-4" alt="Mastercard" />
                                </div>
                            </div>
                            {/* This input mocks the Stripe Element iframe */}
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none mb-4"
                                disabled
                            />
                            <div className="flex gap-4">
                                <input type="text" placeholder="MM/YY" className="w-1/2 bg-transparent border-b border-gray-300 py-2 text-sm outline-none" disabled />
                                <input type="text" placeholder="CVC" className="w-1/2 bg-transparent border-b border-gray-300 py-2 text-sm outline-none" disabled />
                            </div>
                        </div>

                        {/* Apple Pay Button (Mock) */}
                        <button type="button" className="w-full bg-black text-white py-3 rounded flex justify-center items-center gap-2 font-bold mb-6 hover:opacity-90 transition-opacity">
                            <span className="text-lg"></span> Pay
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-[#FF4A22] text-white border-2 border-black p-4 font-dela text-lg uppercase tracking-wider sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? 'Processing...' : 'Complete Order • $19'}
                    </button>

                    <div className="text-center">
                        <p className="text-[10px] opacity-40 font-bold uppercase">
                            <span className="mr-2">🔒 Secure Payment</span>
                            <span className="mr-2">•</span>
                            <span>Powered by Stripe</span>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
