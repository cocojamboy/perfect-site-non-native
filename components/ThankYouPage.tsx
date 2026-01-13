import React from 'react';

const ThankYouPage: React.FC = () => {
    const waLink = "https://wa.me/15557729190?text=Hi!%20I%20bought%20the%20guide%20and%20want%20to%20know%20about%20your%20placement%20programs.";

    return (
        <div className="min-h-screen bg-[#F8F0DD] text-black font-sans py-12 px-4 selection:bg-[#FF4A22] selection:text-white">
            <div className="max-w-4xl mx-auto">
                {/* Logo / Header */}
                <div className="flex flex-col items-center mb-16">
                    <img src="/photo/logo/up2u logo basic.svg" alt="Up 2U Logo" className="h-12 mb-4" />
                    <div className="font-dela text-xs tracking-[0.2em] opacity-30 uppercase">
                        NOT NATIVE. NOT SORRY.™
                    </div>
                </div>

                {/* Section 1: Confirmation */}
                <div className="bg-white border-4 border-black p-8 md:p-12 card-shadow mb-12 relative">
                    <div className="absolute top-0 right-0 bg-[#FF4A22] text-white px-6 py-2 font-dela text-sm rotate-[4deg] translate-x-4 -translate-y-4 sticker-shadow z-20">
                        SUCCESS!
                    </div>
                    <h1 className="text-4xl md:text-6xl font-dela mb-8 tracking-tighter leading-tight">
                        YOU'RE IN! <br />
                        <span className="accent-text">CHECK YOUR EMAIL.</span>
                    </h1>
                    <p className="text-xl font-bold mb-8 leading-snug">
                        Your guide + 3 bonuses are waiting in your inbox. <br />
                        <span className="opacity-60 text-sm italic">(If you don't see it in 60 seconds, check your spam folder.)</span>
                    </p>

                    <div className="bg-black text-white p-6 rotate-[-1deg] sticker-shadow">
                        <h3 className="font-dela text-sm mb-4 text-[#FF4A22]">📘 WHAT YOU JUST GOT:</h3>
                        <ul className="font-bold text-sm space-y-2 uppercase tracking-wide">
                            <li className="flex gap-3"><span>✅</span> The 30-Day Vietnam Hire Plan (PDF)</li>
                            <li className="flex gap-3"><span>✅</span> Bonus #1: Interview Cheat Sheet</li>
                            <li className="flex gap-3"><span>✅</span> Bonus #2: Cost of Living Calculator</li>
                            <li className="flex gap-3"><span>✅</span> Bonus #3: First Week Survival Guide</li>
                        </ul>
                    </div>
                </div>

                {/* Section 2: What to do next */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border-4 border-black p-8 card-shadow">
                        <h2 className="font-dela text-2xl mb-8 accent-text">WHAT TO DO NEXT:</h2>

                        <div className="space-y-8">
                            <div>
                                <div className="font-dela text-xs opacity-30 mb-2">STEP 01</div>
                                <h4 className="font-dela text-lg mb-4">DOWNLOAD YOUR FILES</h4>

                                <div className="space-y-3">
                                    {/* Main Guide (Gamma) */}
                                    <a href="https://gamma.app/docs/NOT-NATIVE-NOT-SORRY-wppdiizk4mr84w6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-black text-white px-4 py-3 font-dela text-xs sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all group">
                                        <span>📘 MAIN GUIDE (ACCESS NOW)</span>
                                        <span className="opacity-50 group-hover:opacity-100">→</span>
                                    </a>

                                    {/* Bonus 1 */}
                                    <a href="https://drive.google.com/file/d/1RHmcxfbO01UV-68oVQpQ-7liR4Wvm_Bw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#FF4A22] text-white px-4 py-3 font-dela text-xs sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all group">
                                        <span>🎁 BONUS #1: Interview Cheat Sheet</span>
                                        <span className="opacity-50 group-hover:opacity-100">→</span>
                                    </a>

                                    {/* Bonus 2 */}
                                    <a href="https://drive.google.com/file/d/1jS3wnhUeQh_XsI_W_k01No4YWMoYIeV3/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#FF4A22] text-white px-4 py-3 font-dela text-xs sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all group">
                                        <span>🎁 BONUS #2: Cost Calculator</span>
                                        <span className="opacity-50 group-hover:opacity-100">→</span>
                                    </a>

                                    {/* Bonus 3 */}
                                    <a href="https://drive.google.com/file/d/1_lsn_LmXB_w-rvcI0-0yBG-Frlr6PgdQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#FF4A22] text-white px-4 py-3 font-dela text-xs sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all group">
                                        <span>🎁 BONUS #3: First Week Guide</span>
                                        <span className="opacity-50 group-hover:opacity-100">→</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="font-dela text-xs opacity-30 mb-2">STEP 02</div>
                                <h4 className="font-dela text-lg mb-4">READ THE FIRST 7 PAGES TODAY</h4>
                                <p className="text-sm font-bold opacity-70 leading-relaxed italic">
                                    It takes 10 minutes. You'll understand exactly why non-native teachers get hired in Vietnam and what schools actually look for.
                                </p>
                            </div>

                            <div>
                                <div className="font-dela text-xs opacity-30 mb-2">STEP 03</div>
                                <h4 className="font-dela text-lg mb-4">START WEEK 1 TOMORROW</h4>
                                <p className="text-sm font-bold opacity-70">
                                    Record your intro video using the script on <span className="underline decoration-2">page 12</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Mentorship */}
                    <div className="bg-[#FF4A22] text-white border-4 border-black p-8 card-shadow flex flex-col justify-center rotate-1">
                        <h2 className="font-dela text-2xl mb-6">WANT EXTRA HELP?</h2>
                        <div className="space-y-4 font-bold text-sm leading-relaxed mb-8">
                            <p>You're not doing this alone. Hundreds of non-native teachers have used this guide to get hired.</p>
                            <p>Some wanted extra support — personal CV reviews, interview prep, direct school connections.</p>
                            <p>We work with a small group each season. If you want to know more, message us on WhatsApp.</p>
                        </div>
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-center px-4 py-4 font-dela text-base border-2 border-black sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all">
                            MESSAGE US ON WHATSAPP
                        </a>
                    </div>
                </div>

                {/* Section 4: FAQ */}
                <div className="bg-white border-4 border-black p-8 md:p-12 card-shadow mb-12">
                    <h2 className="font-dela text-3xl mb-12 text-center uppercase tracking-tighter">COMMON QUESTIONS</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-dela text-sm mb-2 accent-text">Q: When will I get the guide?</h4>
                                <p className="text-sm font-bold opacity-70">A: It's in your email right now. Check spam if you don't see it.</p>
                            </div>
                            <div>
                                <h4 className="font-dela text-sm mb-2 accent-text">Q: What if I don't like it?</h4>
                                <p className="text-sm font-bold opacity-70">A: Email us within 7 days. We'll refund you. No questions asked.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-dela text-sm mb-2 accent-text">Q: Can I share this?</h4>
                                <p className="text-sm font-bold opacity-70">A: Please don't. This is for personal use only.</p>
                            </div>
                            <div>
                                <h4 className="font-dela text-sm mb-2 accent-text">Q: Need help after reading?</h4>
                                <p className="text-sm font-bold opacity-70">A: Message us on WhatsApp. We read every message.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Branding Quote */}
                <div className="text-center mb-24 mt-12">
                    <div className="font-dela text-[40px] md:text-[80px] leading-[0.8] tracking-tighter uppercase">
                        NOT NATIVE.<br />
                        <span className="accent-text">NOT SORRY.™</span>
                    </div>
                </div>

                {/* Section 6: Final Message */}
                <div className="text-center py-12 border-t-4 border-black border-dashed">
                    <h2 className="font-dela text-4xl mb-6 leading-none tracking-tighter uppercase">
                        YOU MADE A <br />
                        <span className="accent-text italic">SMART DECISION.</span>
                    </h2>
                    <p className="max-w-xl mx-auto font-bold text-lg mb-12 opacity-80 decoration-black decoration-2">
                        Most people spend months scrolling job boards and getting ghosted. You just bought the exact system used by 700+ teachers. Now go start.
                    </p>
                    <div className="font-dela text-xl mb-4">— THE UP2U TEAM</div>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase tracking-widest hover:text-[#FF4A22] transition-colors flex items-center justify-center gap-2">
                        QUESTIONS? MESSAGE US <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" className="h-4" alt="WA" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
