import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Truck, Phone, MapPin, Menu, X, ArrowRight, Star, 
  Box, Home, CheckCircle, Globe, Zap, Quote, Layers, Award, 
  BarChart, Lock, Users, Server
} from 'lucide-react';

// --- UTILS ---
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- COMPONENTS ---

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

const Button = ({ children, primary, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "relative group overflow-hidden px-8 md:px-10 py-3 md:py-4 rounded-full font-bold tracking-widest text-[10px] md:text-xs uppercase transition-all duration-300",
      primary 
        ? "bg-[#fbbf24] text-black hover:bg-white hover:scale-105 shadow-[0_0_30px_-10px_rgba(251,191,36,0.4)]" 
        : "border border-white/10 text-white hover:border-[#fbbf24] hover:text-[#fbbf24]",
      className
    )}
  >
    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
      {children}
      {primary && <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />}
    </span>
  </button>
);

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

const SectionHeader = ({ label, title, subtitle, center }) => (
  <div className={cn("mb-16 md:mb-24 animate-enter", center ? "text-center mx-auto max-w-4xl" : "max-w-3xl")}>
    <div className={cn("flex items-center gap-2 md:gap-3 text-[#fbbf24] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 md:mb-6", center && "justify-center")}>
      <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
      {label}
    </div>
    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] md:leading-[0.95] tracking-tight mb-4 md:mb-6 break-words hyphens-auto">
      {title}
    </h2>
    {subtitle && <p className="text-sm md:text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

const InfiniteMarquee = () => {
  const items = [
    "Premium Packaging", "Zero Damage", "Nationwide Transit", 
    "GPS Tracking", "Insurance Included", "24/7 Support", 
    "White Glove Service"
  ];

  return (
    <div className="w-full py-8 md:py-10 overflow-hidden relative z-20 marquee-mask group">
      <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
        <div className="flex gap-16 md:gap-24 px-10 shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 text-white/20 font-black text-2xl md:text-4xl uppercase tracking-tighter hover:text-[#fbbf24] transition-colors cursor-default whitespace-nowrap">
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-current" /> {item}
            </div>
          ))}
        </div>
        <div className="flex gap-16 md:gap-24 px-10 shrink-0">
          {items.map((item, i) => (
            <div key={`clone-${i}`} className="flex items-center gap-4 md:gap-6 text-white/20 font-black text-2xl md:text-4xl uppercase tracking-tighter hover:text-[#fbbf24] transition-colors cursor-default whitespace-nowrap">
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-current" /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PAGES ---

const HomePage = ({ setPage }) => (
  <div className="w-full">
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-enter text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Pan-India Operations Live</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.95] tracking-tighter mb-8 break-words">
            MOVE <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fbbf24] to-orange-500">BEYOND</span> <br /> LIMITS.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 pl-0 lg:pl-6 lg:border-l-2 lg:border-[#fbbf24]/30">
            We engineer life transitions. Experience military-grade logistics with white-glove care for your most extensive moves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button primary onClick={() => setPage('contact')}>Get Custom Quote</Button>
            <Button onClick={() => setPage('services')}>Our Services</Button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block relative h-175 animate-enter" style={{ animationDelay: '0.2s' }}>
           <SpotlightCard className="h-full w-full p-0 border-0 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover opacity-80 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                alt="Logistics"
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
             <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">On-Time Guarantee</h3>
             <p className="text-gray-400 text-sm md:text-base leading-relaxed">We value your time. If we are late, we pay you. It's that simple.</p>
          </SpotlightCard>
          <SpotlightCard>
             <Lock className="w-10 h-10 md:w-12 md:h-12 text-[#fbbf24] mb-6 md:mb-8" />
             <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Tamper Proof</h3>
             <p className="text-gray-400 text-sm md:text-base leading-relaxed">Our containers use cryptographic seals. Only you can open them.</p>
          </SpotlightCard>
          <SpotlightCard>
             <Users className="w-10 h-10 md:w-12 md:h-12 text-[#fbbf24] mb-6 md:mb-8" />
             <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Dedicated Manager</h3>
             <p className="text-gray-400 text-sm md:text-base leading-relaxed">One point of contact. No chatbots, no waiting lines. A real human.</p>
          </SpotlightCard>
       </div>
    </section>

    <section className="py-24 border-t border-white/5 bg-[#050505]">
       <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center md:text-left">
            {[
               { val: "15k+", lbl: "Moves Completed" },
               { val: "120+", lbl: "Cities Covered" },
               { val: "0%", lbl: "Damage Rate" },
               { val: "4.9", lbl: "User Rating" }
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

const ServicesPage = () => (
  <div className="section-padding container mx-auto px-6">
    <SectionHeader 
      label="Our Expertise" 
      title="Comprehensive Capabilities." 
      subtitle="We specialize in complex logistics. From delicate heirlooms to industrial server racks, we have a protocol for everything." 
    />
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
       {[
          { icon: <Home />, label: "Home" },
          { icon: <Zap />, label: "Office" },
          { icon: <Truck />, label: "Vehicle" },
          { icon: <Box />, label: "Storage" }
       ].map((item, i) => (
          <div key={i} className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 hover:border-[#fbbf24] transition-colors cursor-pointer group">
             <div className="text-gray-400 group-hover:text-[#fbbf24] transition-colors scale-125">{item.icon}</div>
             <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{item.label}</span>
          </div>
       ))}
    </div>

    <div className="space-y-24 md:space-y-32">
      {[
        { 
          title: "Residential Moving", 
          desc: "Complete home packing, moving, and re-assembly. Includes wardrobe boxes and foam cornering for furniture.", 
          icon: <Home />,
          img: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4"
        },
        { 
          title: "Vehicle Transport", 
          desc: "Enclosed hydraulic carriers for luxury cars and bikes. Zero-scratch guarantee with GPS tracking.", 
          icon: <Truck />,
          img: "https://images.unsplash.com/photo-1725429976920-492648a26ac7?w=600"
        },
        { 
          title: "Corporate Relocation", 
          desc: "Zero-downtime office moves. We handle server racks, IT assets, and confidential files overnight.", 
          icon: <Zap />,
          img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
        }
      ].map((s, i) => (
        <div key={i} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group animate-enter`} style={{ animationDelay: `${i*100}ms` }}>
           <div className={`w-full lg:w-1/2 relative h-[300px] md:h-125 rounded-3xl overflow-hidden border border-white/5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={s.title} loading="lazy" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-[#fbbf24] rounded-lg flex items-center justify-center text-black">
                    {s.icon}
                 </div>
              </div>
           </div>

           <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 group-hover:text-[#fbbf24] transition-colors">{s.title}</h3>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10">{s.desc}</p>
              <ul className={`space-y-4 ${i % 2 === 1 ? 'flex flex-col items-end' : ''}`}>
                 {['Premium Packaging', 'Insurance Included', 'Live Tracking'].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm md:text-base font-bold text-gray-300">
                       <CheckCircle className="w-5 h-5 text-[#fbbf24]" /> {feat}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const ProcessPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: "Consultation", desc: "Video survey or onsite visit to inventory items. Instant quote generation.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7" },
    { title: "Packing Day", desc: "Team arrives with color-coded boxes. Fragile items get 3-layer protection.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { title: "Secure Transit", desc: "Goods loaded into GPS-enabled closed containers. Live tracking link provided.", img: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600" },
    { title: "The Unboxing", desc: "We unload, assemble furniture, and remove all debris before leaving.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2" }
  ];

  return (
    <div className="section-padding container mx-auto px-6">
      <SectionHeader label="The Blueprint" title="Simplicity by Design." center />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
         <div className="space-y-6">
            {steps.map((step, i) => (
               <div 
                 key={i} 
                 onMouseEnter={() => setActiveStep(i)}
                 className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 cursor-pointer ${activeStep === i ? 'bg-[#fbbf24] border-[#fbbf24] text-black scale-105 shadow-xl' : 'bg-[#0a0a0a] border-white/10 text-white hover:border-white/30'}`}
               >
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                     <span className={`text-xl md:text-2xl font-black ${activeStep === i ? 'text-black/20' : 'text-white/10'}`}>0{i+1}</span>
                  </div>
                  <p className={activeStep === i ? 'text-black/80 font-medium' : 'text-gray-400'}>{step.desc}</p>
               </div>
            ))}
         </div>

         <div className="relative h-[400px] md:h-175 rounded-3xl overflow-hidden border border-white/10 shadow-2xl lg:sticky lg:top-32">
            {steps.map((step, i) => (
               <img 
                 key={i}
                 src={step.img} 
                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeStep === i ? 'opacity-100' : 'opacity-0'}`}
                 alt={step.title}
               />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
               <span className="text-[#fbbf24] font-bold tracking-widest text-sm uppercase mb-3 block">Current Phase</span>
               <h3 className="text-4xl md:text-5xl font-black text-white">{steps[activeStep].title}</h3>
            </div>
         </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="section-padding container mx-auto px-6">
     <div className="grid lg:grid-cols-12 gap-16 items-center mb-40">
        <div className="lg:col-span-7 animate-enter">
           <span className="text-[#fbbf24] font-bold tracking-widest text-xs uppercase mb-6 block">The Origin</span>
           <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]">
             "We don't just move objects. <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fbbf24] to-orange-600">We move lives."</span>
           </h2>
           <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
              SafeGuard was founded on a simple premise: Moving is one of life's most stressful events. It shouldn't be. We replaced the "guys in a truck" model with a "hospitality logistics" model.
           </p>
           
           <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                 <span className="block text-4xl md:text-5xl font-black text-white mb-2">500+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Vetted Experts</span>
              </div>
              <div>
                 <span className="block text-4xl md:text-5xl font-black text-white mb-2">20+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">States Covered</span>
              </div>
           </div>
        </div>
        
        <div className="lg:col-span-5 relative animate-enter delay-200 h-[400px] md:h-150">
           <div className="absolute inset-0 bg-[#fbbf24] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
           <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" className="h-full w-full object-cover grayscale" alt="Team" />
              <div className="absolute bottom-0 w-full p-10 bg-linear-to-t from-black via-black/80 to-transparent">
                 <Quote className="w-12 h-12 text-[#fbbf24] mb-4" />
                 <p className="text-white text-lg italic font-medium">"Excellence is not an act, but a habit."</p>
              </div>
           </div>
        </div>
     </div>

     <SectionHeader label="The Standard" title="Built Different." />
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
           { 
             role: "The Hands", 
             title: "Master Packers", 
             desc: "Certified in fragile handling. They don't just pack; they preserve.",
             img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80" 
           },
           { 
             role: "The Eyes", 
             title: "Route Command", 
             desc: "24/7 monitoring center ensuring your shipment never goes off-grid.",
             img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
           },
           { 
             role: "The Shield", 
             title: "Safety Fleet", 
             desc: "Air-ride suspension trucks that eliminate road vibration.",
             img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
           }
        ].map((item, i) => (
           <SpotlightCard key={i} className="p-0 overflow-hidden group border-0 relative h-[500px]">
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#fbbf24] text-xs uppercase tracking-[0.3em] font-bold mb-3">{item.role}</p>
                    <h4 className="text-3xl font-black text-white mb-4">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       {item.desc}
                    </p>
                 </div>
              </div>
           </SpotlightCard>
        ))}
     </div>
  </div>
);

// --- FIXED MOBILE CONTACT PAGE ---
const ContactPage = () => (
  <div className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-10"> 
     <div className="container mx-auto px-4 lg:px-6">
        <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-24 items-center animate-enter">
           
           {/* Mobile Heading (Visible now!) */}
           <div className="lg:hidden text-center mb-2">
              <h2 className="text-4xl font-black text-white mb-2 leading-none">
                 LET'S <br/> <span className="text-[#fbbf24]">MOVE.</span>
              </h2>
              <p className="text-sm text-gray-400">Precision quote in 2 hours.</p>
           </div>

           {/* Desktop Left Side */}
           <div className="hidden lg:flex flex-col justify-center">
              <h2 className="text-6xl font-black text-white mb-6 leading-[0.9]">
                 LET'S <br/> <span className="text-[#fbbf24]">MOVE.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
                 Ready for the smoothest move? Fill out the form for a precision quote in 2 hours.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                       <Phone className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 font-bold uppercase mb-1">Call Us</p>
                       <p className="text-xl font-bold text-white">+91 98765 43210</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#fbbf24]">
                       <Globe className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email</p>
                       <p className="text-xl font-bold text-white">hello@safeguard.in</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Side: COMPACT FORM */}
           <div className="bg-[#0a0a0a] p-5 md:p-8 rounded-2xl border border-white/10 shadow-2xl relative w-full max-w-md mx-auto">
              <form className="space-y-3">
                 <div className="grid grid-cols-2 gap-3">
                    <div>
                       <label className="text-[9px] text-gray-500 font-bold uppercase mb-1 block ml-1">Name</label>
                       <input className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-white focus:border-[#fbbf24] outline-none transition-colors text-sm" placeholder="John" />
                    </div>
                    <div>
                       <label className="text-[9px] text-gray-500 font-bold uppercase mb-1 block ml-1">Phone</label>
                       <input className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-white focus:border-[#fbbf24] outline-none transition-colors text-sm" placeholder="+91..." />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3">
                    <div>
                       <label className="text-[9px] text-gray-500 font-bold uppercase mb-1 block ml-1">From</label>
                       <input className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-white focus:border-[#fbbf24] outline-none transition-colors text-sm" placeholder="City A" />
                    </div>
                    <div>
                       <label className="text-[9px] text-gray-500 font-bold uppercase mb-1 block ml-1">To</label>
                       <input className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-white focus:border-[#fbbf24] outline-none transition-colors text-sm" placeholder="City B" />
                    </div>
                 </div>

                 <div>
                    <label className="text-[9px] text-gray-500 font-bold uppercase mb-1 block ml-1">Details</label>
                    <textarea className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg h-16 md:h-24 resize-none text-white focus:border-[#fbbf24] outline-none transition-colors text-sm" placeholder="List items..."></textarea>
                 </div>

                 <Button primary className="w-full py-3 text-xs tracking-widest">Get Quote</Button>
              </form>
           </div>
        </div>
     </div>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigateTo = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['home', 'services', 'process', 'about', 'contact'];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="bg-grid-pattern"></div>
      <MouseSpotlight />
      
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className={`container mx-auto px-6 rounded-full border ${scrolled ? 'bg-black/90 backdrop-blur-xl border-white/10 shadow-2xl' : 'border-transparent'} transition-all duration-500`}>
          <div className="flex items-center justify-between h-16">
             <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                   <Shield className="w-full h-full text-[#fbbf24] fill-[#fbbf24] absolute transition-transform group-hover:scale-110" />
                   <Home className="w-4 h-4 text-black absolute z-10 mb-0.5" />
                </div>
                <span className="text-xl font-black tracking-tighter text-white">SAFE<span className="text-[#fbbf24]">GUARD</span></span>
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

      <div className={`fixed inset-0 z-40 bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
         <div className="h-full flex flex-col items-center justify-center gap-10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fbbf24] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
            {links.map((link, i) => (
               <button 
                 key={link} 
                 onClick={() => navigateTo(link)}
                 className={`text-6xl font-black uppercase tracking-tighter text-transparent stroke-white hover:text-[#fbbf24] transition-all transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                 style={{ 
                   transitionDelay: `${i * 100}ms`,
                   WebkitTextStroke: activePage === link ? '0px' : '1px white', 
                   color: activePage === link ? '#fbbf24' : 'transparent' 
                 }}
               >
                 {link}
               </button>
            ))}
         </div>
      </div>

      <main className="grow relative z-10 pt-0 min-h-screen">
         {activePage === 'home' && <HomePage setPage={navigateTo} />}
         {activePage === 'services' && <ServicesPage />}
         {activePage === 'process' && <ProcessPage />}
         {activePage === 'about' && <AboutPage />}
         {activePage === 'contact' && <ContactPage />}
      </main>

      {/* FOOTER - Hidden on Contact Page to prevent scrolling */}
      {activePage !== 'contact' && (
        <footer className="border-t border-white/5 bg-[#020617] py-20 relative z-10 mt-auto text-center overflow-hidden">
           <h2 className="text-[18vw] font-black text-white leading-none select-none tracking-tighter opacity-5 mix-blend-overlay pointer-events-none">SAFEGUARD</h2>
           <div className="relative z-10 mt-[-6vw]">
              <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                 <span className="hover:text-[#fbbf24] cursor-pointer transition-colors">Privacy Policy</span>
                 <span className="hover:text-[#fbbf24] cursor-pointer transition-colors">Terms of Service</span>
                 <span className="hover:text-[#fbbf24] cursor-pointer transition-colors">Sitemap</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-700">© 2026 SafeGuard Logistics. Excellence Delivered.</p>
           </div>
        </footer>
      )}
    </div>
  );
};

export default App;