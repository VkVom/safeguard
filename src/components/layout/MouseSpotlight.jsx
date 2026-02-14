import React, { useRef, useEffect } from 'react';

const MouseSpotlight = () => {
    const spotlightRef = useRef(null);
    useEffect(() => {
        let frameId;
        const handleMouseMove = (e) => {
            if (spotlightRef.current) {
                frameId = requestAnimationFrame(() => {
                    spotlightRef.current.style.left = `${e.clientX}px`;
                    spotlightRef.current.style.top = `${e.clientY}px`;
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, []);
    return <div ref={spotlightRef} className="fixed-spotlight hidden md:block" />;
};

export default MouseSpotlight;
