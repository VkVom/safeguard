import React, { useRef } from 'react';
import { cn } from '../../utils';

const SpotlightCard = ({ children, className = "", noHover = false }) => {
    const divRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        divRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
        divRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10 transition-all duration-500",
                !noHover && "hover:border-[#fbbf24]/50 hover:-translate-y-1 hover:shadow-2xl group",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(600px circle at var(--x) var(--y), rgba(251, 191, 36, 0.06), transparent 40%)` }}
            />
            <div className="relative z-10 h-full flex flex-col">{children}</div>
        </div>
    );
};

export default SpotlightCard;
