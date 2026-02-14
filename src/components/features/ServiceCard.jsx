import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '../../utils';

const ServiceCard = ({ s, i }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center group animate-enter`}
            style={{ animationDelay: `${i * 100}ms` }}
        >
            <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/5">
                <img
                    src={s.img}
                    className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isInView ? "grayscale-0 scale-105" : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                    )}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#fbbf24] rounded-lg flex items-center justify-center text-black">
                        {s.icon}
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 text-left">
                <h3 className={cn(
                    "text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 transition-colors",
                    isInView ? "text-[#fbbf24]" : "group-hover:text-[#fbbf24]"
                )}>
                    {s.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-lg">{s.desc}</p>
                <ul className="space-y-4">
                    {s.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-sm md:text-base font-bold text-gray-300">
                            <CheckCircle className="w-5 h-5 text-[#fbbf24] shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;
