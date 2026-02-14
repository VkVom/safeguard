import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
import logo from '../../assets/logo.jpg';

const Navbar = ({ activePage, navigateTo }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const links = ['home', 'services', 'process', 'about', 'contact'];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (link) => {
        navigateTo(link);
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className={`container mx-auto px-6 rounded-full border ${scrolled ? 'bg-black/90 backdrop-blur-xl border-white/10 shadow-2xl' : 'border-transparent'} transition-all duration-500`}>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
                            <img src={logo} alt="SafeGuard Home Shifters" className="w-10 h-10 rounded-lg object-contain transition-transform group-hover:scale-110" />
                            <span className="text-xl font-black tracking-tighter text-white">SAFEGUARD <span className="text-[#fbbf24]">HOME SHIFTERS</span></span>
                        </div>

                        <div className="hidden md:flex items-center gap-10">
                            {links.map(link => (
                                <button
                                    key={link}
                                    onClick={() => navigateTo(link)}
                                    className={`text-[11px] font-bold uppercase tracking-[0.25em] hover:text-[#fbbf24] transition-colors relative py-2 ${activePage === link ? 'text-[#fbbf24]' : 'text-gray-400'}`}
                                >
                                    {link}
                                    {activePage === link && <span className="absolute bottom-0 left-0 w-full h-px bg-[#fbbf24] shadow-[0_0_10px_#fbbf24]"></span>}
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <Button primary className="px-8 py-3" onClick={() => navigateTo('contact')}>Get Quote</Button>
                        </div>

                        <button className="md:hidden text-white z-50 relative p-2" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* FIXED MOBILE MENU */}
            <div className={`fixed inset-0 z-40 bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center gap-10 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fbbf24] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
                    {links.map((link, i) => (
                        <button
                            key={link}
                            onClick={() => handleNav(link)}
                            className={`text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] transition-all duration-500 transform
                   ${activePage === link ? 'text-[#fbbf24] scale-110' : 'text-white/30 hover:text-white'}
                   ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                 `}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
