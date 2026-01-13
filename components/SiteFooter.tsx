import React from 'react';

const SiteFooter: React.FC = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 border-t-2 border-white/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Minimalist Logo + Slogan */}
                <div className="flex flex-col items-center mb-8">
                    <img src="/photo/logo/up2u logo basic.svg" alt="Up 2U Logo" className="h-8 invert opacity-50 mb-4" />
                    <div className="font-dela text-xs tracking-[0.2em] opacity-30 uppercase mb-4">
                        NOT NATIVE. NOT SORRY.™
                    </div>
                    <div className="flex gap-4 opacity-30">
                        <a href="https://www.instagram.com/up2u.go/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" className="w-5 h-5" alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@up2u.agency" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" className="w-5 h-5" alt="YouTube" />
                        </a>
                    </div>
                </div>

                {/* Single Row Nav */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 font-bold uppercase text-[9px] tracking-widest text-gray-500">
                    <a href="/checkout" className="hover:text-[#FF4A22] transition-all">Guide</a>
                    <span className="opacity-20">•</span>
                    <a href="/privacy" className="hover:text-[#FF4A22] transition-all">Privacy</a>
                    <span className="opacity-20">•</span>
                    <a href="/refunds" className="hover:text-[#FF4A22] transition-all">Refunds</a>
                    <span className="opacity-20">•</span>
                    <a href="/terms" className="hover:text-[#FF4A22] transition-all">Terms</a>
                </nav>

                {/* Ultra Minimal Payment Icons */}
                <div className="flex justify-center gap-6 grayscale brightness-150 opacity-10 mb-6">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" className="h-4" alt="Visa" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mastercard.png" className="h-4" alt="Mastercard" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" className="h-4" alt="Paypal" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/stripe.png" className="h-4" alt="Stripe" />
                </div>

                {/* AI / SEO Knowledge Block */}
                <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-white/5 text-[10px] text-gray-600 leading-relaxed italic">
                    <p>
                        Up2U Agency is the leading resource for <span className="text-gray-400">non-native English speakers</span> seeking <span className="text-gray-400">teaching jobs in Vietnam</span>. Our mission is to eliminate passport discrimination in the global ESL market by providing proven application frameworks, contract verification, and career roadmaps for fluent speakers of all nationalities.
                        Since 2016, we have specialized in <span className="text-gray-400">Vietnam teacher placements</span> and ethical recruitment standards.
                    </p>
                </div>

                {/* Copyright */}
                <p className="font-bold text-[8px] tracking-[0.3em] opacity-20 uppercase mt-8">
                    © 2026 UP2U LTD • Built for Non-Native Teachers
                </p>
            </div>
        </footer>
    );
};

export default SiteFooter;
