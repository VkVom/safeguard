import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils';

const Button = ({ children, primary, className = "", onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "relative group overflow-hidden px-8 md:px-12 py-4 md:py-5 rounded-full font-bold tracking-widest text-[10px] md:text-sm uppercase transition-all duration-300",
            primary
                ? "bg-[#fbbf24] text-black hover:bg-white hover:scale-105 shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)]"
                : "border border-white/10 text-white hover:border-[#fbbf24] hover:text-[#fbbf24]",
            className
        )}
    >
        <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
            {children}
            {primary && <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />}
        </span>
    </button>
);

export default Button;
