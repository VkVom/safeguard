import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';

const ProcessPage = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: "Free Quote", desc: "Contact us for a free, no-obligation quote. We offer the best prices in the market.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=60" },
        { title: "Packing", desc: "Our professional team arrives with premium packaging materials to secure your goods.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=60" },
        { title: "Moving", desc: "Prompt and reliable transit using our verified fleet of vehicles.", img: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600&auto=format&fit=crop&q=60" },
        { title: "Unpacking", desc: "We unload and help you settle in. Hassle-free experience guaranteed.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=60" }
    ];

    return (
        <div className="section-padding container mx-auto px-6">
            <SectionHeader label="The Blueprint" title="Simplicity by Design." center />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveStep(i)}
                            className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 cursor-pointer ${activeStep === i ? 'bg-[#fbbf24] border-[#fbbf24] text-black scale-105 shadow-xl' : 'bg-[#0a0a0a] border-white/10 text-white hover:border-white/30'}`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                                <span className={`text-xl md:text-2xl font-black ${activeStep === i ? 'text-black/20' : 'text-white/10'}`}>0{i + 1}</span>
                            </div>
                            <p className={activeStep === i ? 'text-black/80 font-medium' : 'text-gray-400'}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="relative h-[400px] md:h-175 rounded-3xl overflow-hidden border border-white/10 shadow-2xl lg:sticky lg:top-32">
                    {steps.map((step, i) => (
                        <img
                            key={i}
                            src={step.img}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeStep === i ? 'opacity-100' : 'opacity-0'}`}
                            alt={step.title}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"></div>
                    <div className="absolute bottom-12 left-12">
                        <span className="text-[#fbbf24] font-bold tracking-widest text-sm uppercase mb-3 block">Current Phase</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white">{steps[activeStep].title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessPage;
