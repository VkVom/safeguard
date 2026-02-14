import React from 'react';
import { Quote } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const AboutPage = () => (
    <div className="section-padding container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-40">
            <div className="lg:col-span-7 animate-enter">
                <span className="text-[#fbbf24] font-bold tracking-widest text-xs uppercase mb-6 block">The Origin</span>
                <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]">
                    "We don't just move objects. <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fbbf24] to-orange-600">We move lives."</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
                    SafeGuard Home Shifters was founded on a simple premise: Moving is one of life's most stressful events. It shouldn't be. We replaced the "guys in a truck" model with a "hospitality logistics" model.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <span className="block text-4xl md:text-5xl font-black text-white mb-2">500+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Verified Experts</span>
                    </div>
                    <div>
                        <span className="block text-4xl md:text-5xl font-black text-white mb-2">20+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">States Covered</span>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 relative animate-enter delay-200 h-[400px] md:h-150">
                <div className="absolute inset-0 bg-[#fbbf24] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=60"
                        className="h-full w-full object-cover grayscale"
                        alt="Team"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute bottom-0 w-full p-10 bg-linear-to-t from-black via-black/80 to-transparent">
                        <Quote className="w-12 h-12 text-[#fbbf24] mb-4" />
                        <p className="text-white text-lg italic font-medium">"Excellence is not an act, but a habit."</p>
                    </div>
                </div>
            </div>
        </div>

        <SectionHeader label="The Standard" title="Built Different." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    role: "The Hands",
                    title: "Master Packers",
                    desc: "Certified in fragile handling. They don't just pack; they preserve.",
                    img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=600&q=60"
                },
                {
                    role: "The Eyes",
                    title: "Route Command",
                    desc: "24/7 monitoring center ensuring your shipment never goes off-grid.",
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60"
                },
                {
                    role: "The Assurance",
                    title: "Premium Packaging",
                    desc: "Multi-layer protection using high-grade materials. Zero damage guarantee.",
                    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=60"
                }
            ].map((item, i) => (
                <div key={i} className="group relative h-[500px] w-full rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5">
                    <img
                        src={item.img}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute bottom-0 w-full p-4">
                        <div className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                            <p className="text-[#fbbf24] text-[10px] uppercase tracking-[0.25em] font-bold mb-3">{item.role}</p>
                            <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default AboutPage;
