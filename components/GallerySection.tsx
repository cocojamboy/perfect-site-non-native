
import React from 'react';

const GallerySection: React.FC = () => {
    const images = [
        {
            src: '/photo/teachers/teacher_2.jpg',
            alt: 'Community in Vietnam',
            caption: 'Instant community.',
            rotation: '-rotate-2'
        },
        {
            src: '/photo/teachers/tropical_river_friends.jpg',
            alt: 'River adventure with friends',
            caption: 'Tropical getaways.',
            rotation: 'rotate-1'
        },
        {
            src: '/photo/teachers/modern_classroom_students.jpg',
            alt: 'Professional Environment',
            caption: 'Modern classrooms.',
            rotation: '-rotate-1'
        },
        {
            src: '/photo/teachers/mountain_road_trip.jpg',
            alt: 'Vietnam adventures',
            caption: 'Road trips to the mountains.',
            rotation: 'rotate-2'
        },
        {
            src: '/photo/teachers/making_difference_classroom.jpg',
            alt: 'Teaching life',
            caption: 'Making a real difference.',
            rotation: '-rotate-2'
        },
        {
            src: '/photo/vietnam_street.png',
            alt: 'Hanoi Streets',
            caption: 'The energy of the city.',
            rotation: 'rotate-1'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-block bg-[#FF4A22] text-white font-dela text-xs px-3 py-1 mb-8">LIFE_IN_VIETNAM</div>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-dela mb-12 tracking-tighter uppercase leading-none">
                    THE<br className="sm:hidden" /> $2,100/MONTH<br />
                    <span className="accent-text italic">LIFESTYLE.</span>
                </h2>
                <p className="max-w-2xl mx-auto font-bold text-xl mb-16 text-black/60">
                    Vietnam isn't just about the money. It's about the freedom. High salary, low cost of living,
                    and a community that feels like family.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {images.map((img, index) => (
                        <div key={index} className={`polaroid ${img.rotation} card-shadow hover:rotate-0 transition-transform duration-300`}>
                            <div className="bg-slate-100 aspect-[4/5] overflow-hidden border-2 border-black mb-4">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all scale-110"
                                />
                            </div>
                            <p className="font-dela text-xs text-black/60 uppercase tracking-tight">{img.caption}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <p className="text-2xl font-dela accent-text mb-4 italic">READY TO START YOUR CHAPTER?</p>
                    <a href="/checkout" className="inline-block bg-black text-white px-12 py-5 font-dela text-xl hover:bg-[#FF4A22] transition-colors card-shadow">
                        GET THE GUIDE NOW
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
