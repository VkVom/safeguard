import React from 'react';
import { cn } from '../../utils';

const SectionHeader = ({ label, title, subtitle, center }) => (
    <div className={cn("mb-16 md:mb-24 animate-enter", center ? "text-center mx-auto max-w-4xl" : "max-w-3xl")}>
        <div className={cn("flex items-center gap-2 md:gap-3 text-[#fbbf24] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 md:mb-6", center && "justify-center")}>
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
            {label}
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] md:leading-[0.95] tracking-tight mb-4 md:mb-6 break-words hyphens-auto">
            {title}
        </h2>
        {subtitle && <p className="text-sm md:text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
    </div>
);

export default SectionHeader;
