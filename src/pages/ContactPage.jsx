import React, { useState } from 'react';
import { Phone, Globe, Mail, Instagram, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        from: '',
        to: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleQuoteRequest = (e) => {
        e.preventDefault();
        const { name, phone, from, to, details } = formData;

        if (!name || !phone) {
            alert("Please fill in your Name and Phone number so we can contact you.");
            return;
        }

        const subject = `Priority Quote Request: ${name}`;
        const body = `Name: ${name}
Phone: ${phone}
From: ${from}
To: ${to}

Inventory Details:
${details}

[Sent from SafeGuard Home Shifters Website]`;

        const mailtoLink = `mailto:safeguardhomeshifters@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-enter">

                    <div className="lg:hidden text-center mb-6">
                        <h2 className="text-4xl font-black text-white mb-2 leading-none">
                            LET'S <br /> <span className="text-[#fbbf24]">MOVE.</span>
                        </h2>
                        <p className="text-sm text-gray-400">Precision quote in 2 hours.</p>
                    </div>

                    <div className="hidden lg:flex flex-col justify-center">
                        <h2 className="text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.9]">
                            LET'S <br /> <span className="text-[#fbbf24]">MOVE.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                            Ready for the smoothest move? Fill out the form for a precision quote in 2 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Call Us</p>
                                    <p className="text-2xl font-bold text-white">+91 8590424194</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email</p>
                                    <p className="text-2xl font-bold text-white">safeguardhomeshifters@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                                    <MessageCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">WhatsApp</p>
                                    <a href="https://wa.me/918590424194" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-green-500 transition-colors">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Instagram</p>
                                    <a href="https://www.instagram.com/safeguard_homeshifters/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-[#fbbf24] transition-colors">
                                        safeguard_homeshifters
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] p-6 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative w-full mx-auto">
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="group">
                                    <label className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2 block ml-1 transition-colors group-focus-within:text-[#fbbf24]">Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 h-12 md:h-14 rounded-xl text-white focus:border-[#fbbf24] outline-none transition-all text-sm md:text-base"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2 block ml-1 transition-colors group-focus-within:text-[#fbbf24]">Phone</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 h-12 md:h-14 rounded-xl text-white focus:border-[#fbbf24] outline-none transition-all text-sm md:text-base"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="group">
                                    <label className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2 block ml-1 transition-colors group-focus-within:text-[#fbbf24]">From</label>
                                    <input
                                        name="from"
                                        value={formData.from}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 h-12 md:h-14 rounded-xl text-white focus:border-[#fbbf24] outline-none transition-all text-sm md:text-base"
                                        placeholder="Origin City"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2 block ml-1 transition-colors group-focus-within:text-[#fbbf24]">To</label>
                                    <input
                                        name="to"
                                        value={formData.to}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 h-12 md:h-14 rounded-xl text-white focus:border-[#fbbf24] outline-none transition-all text-sm md:text-base"
                                        placeholder="Destination City"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2 block ml-1 transition-colors group-focus-within:text-[#fbbf24]">Inventory Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 md:p-4 rounded-xl h-20 md:h-32 resize-none text-white focus:border-[#fbbf24] outline-none transition-all text-sm md:text-base"
                                    placeholder="List key items (e.g. Piano, Server Rack)..."
                                ></textarea>
                            </div>

                            <Button primary onClick={handleQuoteRequest} className="w-full py-4 md:py-5 text-xs md:text-sm tracking-widest">Request Priority Quote</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
