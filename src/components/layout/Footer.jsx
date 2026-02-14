import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.jpg';

const Footer = ({ navigateTo }) => {
    const links = ['home', 'services', 'process', 'about', 'contact'];

    return (
        <footer className="relative z-10 pt-24 pb-12 overflow-hidden border-t border-white/5">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white leading-none select-none tracking-tighter opacity-[0.02] mix-blend-overlay pointer-events-none">SAFEGUARD</h2>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Col 1: Brand */}
                    <div className="md:col-span-4 animate-enter">
                        <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => navigateTo('home')}>
                            <img src={logo} alt="SafeGuard Home Shifters" className="w-8 h-8 rounded-md object-contain transition-transform group-hover:scale-110" />
                            <span className="text-xl font-black tracking-tighter text-white">SAFEGUARD <span className="text-[#fbbf24]">HOME SHIFTERS</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                            SafeGuard Home Shifters offers prompt, reliable, and professional relocation services. Your satisfaction is our priority.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="md:col-span-2 md:col-start-6 animate-enter delay-100">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
                        <ul className="space-y-3">
                            {links.map(link => (
                                <li key={link}>
                                    <button onClick={() => navigateTo(link)} className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm capitalize">{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div className="md:col-span-3 animate-enter delay-200">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Expertise</h4>
                        <ul className="space-y-3">
                            {['Residential Moving', 'Office Relocation', 'Premium Cleaning'].map(link => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="md:col-span-3 animate-enter delay-300">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm group">
                                <MapPin className="w-5 h-5 text-[#fbbf24] shrink-0 group-hover:scale-110 transition-transform" />
                                <span>India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group">
                                <Phone className="w-5 h-5 text-[#fbbf24] shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+918590424194" className="hover:text-[#fbbf24] transition-colors">+91 8590424194</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group">
                                <MessageCircle className="w-5 h-5 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="https://wa.me/918590424194" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                    WhatsApp Us
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group">
                                <Mail className="w-5 h-5 text-[#fbbf24] shrink-0 group-hover:scale-110 transition-transform" />
                                <span>safeguardhomeshifters@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group">
                                <Instagram className="w-5 h-5 text-[#fbbf24] shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="https://www.instagram.com/safeguard_homeshifters/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbbf24] transition-colors">
                                    safeguard_homeshifters
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 animate-enter delay-500">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">© 2026 SafeGuard Home Shifters. All rights reserved.</p>
                    <div className="flex gap-6 text-gray-500 text-xs uppercase tracking-widest font-bold">
                        <a href="#" className="hover:text-[#fbbf24] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#fbbf24] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#fbbf24] transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
