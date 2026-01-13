import React, { useState, useEffect } from 'react';

const StickyBottomNav: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the first 600px (approx height of Hero)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t-2 border-black p-4 transform transition-transform duration-300 translate-y-0 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="hidden md:block">
                    <p className="font-dela text-sm">NOT NATIVE? NOT SORRY.</p>
                    <p className="text-xs font-bold text-gray-500">Get hired in Vietnam in 30 days.</p>
                </div>
                <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4">
                    <div className="md:hidden">
                        <span className="font-dela text-xl">$19</span>
                    </div>
                    <a href="/checkout" className="flex-1 md:flex-none bg-[#FF4A22] text-white font-dela text-sm md:text-base px-6 py-3 border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        GET THE GUIDE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyBottomNav;
