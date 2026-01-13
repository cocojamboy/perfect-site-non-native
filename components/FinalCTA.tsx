
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 px-4 relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-dela opacity-[0.03] select-none whitespace-nowrap">
        ROADMAP
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[80px] md:text-[180px] font-dela leading-[0.8] tracking-tighter mb-4">
          START<br />
          YOUR<br />
          <span className="accent-text">LIFE.</span>
        </h2>

        <p className="text-lg md:text-2xl italic font-medium opacity-60 max-w-xl mx-auto mb-16">
          "You're risking $19 to see if your life can change. That's the best bet you'll ever make."
        </p>

        <div className="max-w-md mx-auto relative">
          <div className="bg-[#FFE600] text-black slanted-badge absolute -top-4 -right-4 font-dela text-xs z-20 sticker-shadow">
            LIFETIME ACCESS
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-md border-2 border-white/20 p-12 card-shadow">
            <div className="text-6xl font-dela mb-2 tracking-tighter">$19</div>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mb-8">NO SUBSCRIPTION • ONE-TIME BUY</p>

            <a href="/checkout" className="inline-block bg-[#FF4A22] text-white w-full py-5 font-dela text-xl border-2 border-black sticker-shadow hover:translate-y-1 transition-all text-center">
              DOWNLOAD ROADMAP NOW
            </a>

            <div className="mt-8 text-[10px] font-bold opacity-30 uppercase tracking-widest">
              SECURE CHECKOUT • 7-DAY GUARANTEE
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="font-dela text-xl md:text-2xl tracking-tighter">
            NOT NATIVE.<br />
            NOT SORRY.™
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
