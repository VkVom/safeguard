import React from 'react';
import { Star } from 'lucide-react';

const InfiniteMarquee = () => {
    const items = [
        "Free Quotes", "Verified Movers", "24/7 Support",
        "Best Price Guarantee", "Prompt Service", "Reliable Packing",
        "No Hidden Fees"
    ];

    return (
        <div className="w-full py-6 md:py-12 overflow-hidden relative z-20 marquee-mask group">
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                <div className="flex gap-16 md:gap-32 px-10 shrink-0">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 md:gap-8 text-white/20 font-black text-3xl md:text-5xl uppercase tracking-tighter hover:text-[#fbbf24] transition-colors cursor-default whitespace-nowrap">
                            <Star className="w-8 h-8 md:w-10 md:h-10 fill-current" /> {item}
                        </div>
                    ))}
                </div>
                <div className="flex gap-16 md:gap-32 px-10 shrink-0">
                    {items.map((item, i) => (
                        <div key={`clone-${i}`} className="flex items-center gap-4 md:gap-8 text-white/20 font-black text-3xl md:text-5xl uppercase tracking-tighter hover:text-[#fbbf24] transition-colors cursor-default whitespace-nowrap">
                            <Star className="w-8 h-8 md:w-10 md:h-10 fill-current" /> {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
