import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils';
import poster from '../../assets/poster.jpeg';

const IntroPoster = () => {
    const [show, setShow] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('safeguard_visited');
        if (!hasVisited) {
            // Delay slightly for effect
            const timer = setTimeout(() => setShow(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setShow(false);
            localStorage.setItem('safeguard_visited', 'true');
        }, 500); // Match transition duration
    };

    if (!show) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-500",
            closing ? "opacity-0 get-out" : "opacity-100 animate-enter"
        )}>
            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
                {/* Close Button - Outside the image on desktop for cleaner look, inside on mobile */}
                <button
                    onClick={handleClose}
                    className="absolute -top-12 right-0 md:-right-12 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group"
                    aria-label="Close"
                >
                    <X className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-90" />
                    <span className="sr-only">Close</span>
                </button>

                {/* Poster Image */}
                <img
                    src={poster}
                    alt="SafeGuard Home Shifters - Professional Packers and Movers"
                    className="w-full h-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] animate-enter scale-100 hover:scale-[1.01] transition-transform duration-500"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>

            {/* Click outside to close area */}
            <div className="absolute inset-0 -z-10" onClick={handleClose} />
        </div>
    );
};

export default IntroPoster;
