import React from 'react';
import { Home, Briefcase, Sparkles } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/features/ServiceCard';

const ServicesPage = () => {
    const services = [
        {
            title: "Residential Moving",
            desc: "Complete home packing, moving, and re-assembly. We use premium packaging to ensure your household items are safe.",
            icon: <Home />,
            img: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&w=600&q=60",
            features: ["Verified Movers", "Best Price Guarantee", "Prompt Service"]
        },
        {
            title: "Office Relocation",
            desc: "Professional office shifting with minimal downtime. We handle secure file moving and system relocation efficiently.",
            icon: <Briefcase />,
            img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=60",
            features: ["Confidential Handling", "System Disassembly", "24/7 Support"]
        },
        {
            title: "Premium Home Cleaning",
            desc: "Post-move deep cleaning services to ensure your new space is pristine. We handle the mess so you can settle in immediately.",
            icon: <Sparkles />,
            img: "https://images.unsplash.com/photo-1713110824336-f78c320dcf8e?w=600&auto=format&fit=crop&q=60",
            features: ["Deep Cleaning", "Eco-Friendly", "Move-In Ready"]
        }
    ];

    return (
        <div className="section-padding container mx-auto px-6">
            <SectionHeader
                label="Our Expertise"
                title="Reliable Services."
                subtitle="From home shifting to office relocation, we provide professional services at the best prices."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                {[
                    { icon: <Home />, label: "Home" },
                    { icon: <Briefcase />, label: "Office" },
                    { icon: <Sparkles />, label: "Cleaning" }
                ].map((item, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 hover:border-[#fbbf24] transition-colors cursor-pointer group">
                        <div className="text-gray-400 group-hover:text-[#fbbf24] transition-colors scale-125">{item.icon}</div>
                        <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-24 md:space-y-32">
                {services.map((s, i) => (
                    <ServiceCard key={i} s={s} i={i} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
