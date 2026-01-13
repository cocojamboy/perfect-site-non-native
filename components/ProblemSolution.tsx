
import React from 'react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Think they 'can't' get hired because of their accent/passport",
    "Apply to schools that ghost them or worse, scam them",
    "Make application files that kill their chances in the first 7 seconds",
    "Accept contracts that lock them into terrible pay or illegal visa situations",
    "Move to Vietnam with no plan… and end up broke, stressed, and desperate"
  ];

  const solutions = [
    "Which types of schools hire non-natives and how to identify them quickly",
    "The exact script that gets replies in 6 hours",
    "How to spot scam contracts in 30 seconds",
    "A week-by-week action plan (so you know exactly what to do next)"
  ];

  return (
    <section className="my-24 bg-black text-white p-6 md:p-12 border-4 border-black card-shadow transform md:-rotate-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-4xl font-dela mb-8 tracking-tighter accent-text">THE PROBLEM:</h2>
          <p className="text-xl font-bold mb-8">Most people do it completely wrong.</p>
          <ul className="space-y-4">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-500 font-bold">❌</span>
                <span className="text-sm font-medium opacity-80">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 bg-white/10 border-l-4 border-[#FF4A22]">
            <p className="font-bold">It's not your fault.</p>
            <p className="text-sm opacity-60 mt-2">No one teaches you which schools actually hire, what they really want, and how to position your fluency as an ASSET.</p>
          </div>
        </div>
        <div className="bg-white text-black p-6 md:p-8 border-4 border-[#FF4A22] sticker-shadow md:translate-x-4 md:-translate-y-4">
          <h2 className="text-4xl font-dela mb-8 tracking-tighter">THE SOLUTION:</h2>
          <p className="text-lg font-bold mb-8 italic">What if there was a simple roadmap that showed you:</p>
          <ul className="space-y-6">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#FF4A22] text-xl font-bold">✅</span>
                <span className="text-base font-bold">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a href="/checkout" className="block bg-black text-white p-4 font-dela text-center text-sm hover:bg-[#FF4A22] transition-colors">
              THAT'S WHAT THIS GUIDE IS.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
