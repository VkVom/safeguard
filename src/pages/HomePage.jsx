import React from 'react';
import { Shield, Star, Clock, Users } from 'lucide-react';
import Button from '../components/common/Button';
import SpotlightCard from '../components/common/SpotlightCard';
import SectionHeader from '../components/common/SectionHeader';
import InfiniteMarquee from '../components/features/InfiniteMarquee';

const HomePage = ({ setPage }) => (
    <div className="w-full">
        {/* HERO */}
        <section className="relative flex items-center pt-32 pb-12 md:min-h-screen md:pt-32 md:pb-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7 animate-enter text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Verified & Affordable</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.95] tracking-tighter mb-8 break-words">
                        SAFE<span className="text-transparent bg-clip-text bg-linear-to-r from-[#fbbf24] to-orange-500">GUARD</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 pl-0 lg:pl-6 lg:border-l-2 lg:border-[#fbbf24]/30">
                        Professional and reliable packing and moving services. We offer prompt execution with a best price guarantee.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button primary onClick={() => setPage('contact')}>Get Free Quote</Button>
                        <Button onClick={() => setPage('services')}>Our Services</Button>
                    </div>
                </div>

                <div className="lg:col-span-5 hidden lg:block relative h-175 animate-enter" style={{ animationDelay: '0.2s' }}>
                    <SpotlightCard className="h-full w-full p-0 border-0 group shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=60"
                            className="w-full h-full object-cover opacity-80 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            alt="SafeGuard Home Shifters"
                            loading="eager"
                        />
                        <div className="absolute bottom-10 left-10 z-20">
                            <div className="bg-black/70 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-6">
                                <Shield className="w-12 h-12 text-[#fbbf24]" />
                                <div>
                                    <p className="text-white font-bold text-xl">100% Insured</p>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">Zero Risk Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>

        <InfiniteMarquee />

        <section className="section-padding container mx-auto px-6">
            <SectionHeader label="Why SafeGuard" title="The Gold Standard." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <SpotlightCard>
                    <Star className="w-10 h-10 md:w-12 md:h-12 text-[#fbbf24] mb-6 md:mb-8" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Best Price Guarantee</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">We provide affordable services without compromising quality. Get the best value for your move.</p>
                </SpotlightCard>
                <SpotlightCard>
                    <Clock className="w-10 h-10 md:w-12 md:h-12 text-[#fbbf24] mb-6 md:mb-8" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prompt Service</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">We respect your timeline. Our team ensures prompt and reliable packing and moving.</p>
                </SpotlightCard>
                <SpotlightCard>
                    <Users className="w-10 h-10 md:w-12 md:h-12 text-[#fbbf24] mb-6 md:mb-8" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">24/7 Support</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">Our dedicated support team is available around the clock to answer your queries.</p>
                </SpotlightCard>
            </div>
        </section>

        <section className="py-24 border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center md:text-left">
                    {[
                        { val: "10k+", lbl: "Happy Customers" },
                        { val: "150+", lbl: "Cities Covered" },
                        { val: "0%", lbl: "Hidden Charges" },
                        { val: "4.8", lbl: "User Rating" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start">
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-2">{stat.val}</h3>
                            <p className="text-[#fbbf24] text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.lbl}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;
