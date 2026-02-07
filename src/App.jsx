import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Truck, Package, Clock, Phone, MapPin, 
  Menu, X, ArrowRight, Star, Box, Home, CheckCircle, Globe, Target, Users
} from 'lucide-react';

// --- PERFORMANCE COMPONENTS ---

// 1. Optimized Button (No re-renders on hover)
const Button = ({ children, primary, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wider transition-all duration-300 active:scale-95 ${
      primary 
        ? `bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20` 
        : `glass-panel text-white hover:border-amber-400 hover:text-amber-400`
    } ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      {children} 
      {primary && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </span>
  </button>
);

// 2. ZERO-LAG Spotlight Card
// Uses Direct DOM manipulation to avoid React Render Cycle
const SpotlightCard = ({ children, className = "", noHover = false }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Direct CSS update - No State = No Lag
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md group ${!noHover && 'hover:-translate-y-1 hover:shadow-2xl hover:border-slate-700'} transition-all duration-500 ${className}`}
    >
      {/* The Glow Effect is now pure CSS based on variables */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.08), transparent 40%)`
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// 3. Optimized Marquee (GPU Accelerated)
const InfiniteMarquee = () => {
  const items = ["Premium Packaging", "Zero Damage", "Nationwide", "GPS Tracking", "Insurance", "24/7 Support", "White Glove"];
  return (
    <div className="w-full py-8 my-12 marquee-mask relative z-20 pointer-events-none overflow-hidden">
      <div className="flex whitespace-nowrap border-y border-amber-400/10 bg-slate-900/30 backdrop-blur-sm py-4">
        <div className="flex animate-scroll min-w-full gap-16 md:gap-24 items-center px-4">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-amber-50 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex-shrink-0">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />{item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PAGES ---

const HomePage = ({ setPage }) => (
  <div className="min-h-screen w-full overflow-hidden">
    {/* HERO */}
    <section className="relative pt-32 pb-12">
      {/* Reduced Blob size for mobile performance */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              <span className="text-[10px] md:text-xs text-slate-300 uppercase tracking-widest font-bold">Pan-India Operations Live</span>
            </div>
            
            <h1 className="text-fluid-h1 font-black leading-[0.95] tracking-tighter text-white mb-8">
              MOVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">BEYOND</span> <br />
              LIMITS.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-light mx-auto lg:mx-0 lg:pl-6 lg:border-l-2 lg:border-amber-400/30">
              We don't just move boxes; we orchestrate life transitions. Experience military-grade logistics with a white-glove touch.
            </p>
            
            {/* CLEANED UP: Single Primary CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button primary onClick={() => setPage('contact')} className="w-full sm:w-auto px-10">Get Quote</Button>
            </div>
          </div>

          <div className="hidden md:block relative perspective-1000">
            <SpotlightCard className="aspect-[4/5] p-2 bg-slate-900 shadow-2xl border-slate-700/50">
               <div className="absolute inset-0 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                    alt="SafeGuard Hero" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    loading="eager"
                  />
               </div>
               <div className="relative z-10 h-full flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                  <Shield className="w-16 h-16 text-amber-400 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">SafeGuard™</h3>
                  <p className="text-sm text-slate-400 uppercase tracking-widest">Elite Relocation Services</p>
               </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>

    <InfiniteMarquee />

    {/* STATS */}
    <section className="py-20 border-t border-slate-900/50 bg-slate-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {[
            { val: "15K+", label: "Moves Done", icon: <Box /> }, { val: "99%", label: "Safety Score", icon: <Shield /> },
            { val: "120+", label: "Cities", icon: <MapPin /> }, { val: "12Y", label: "Experience", icon: <Clock /> },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="flex justify-center opacity-50 group-hover:opacity-100 transition-all transform group-hover:-translate-y-2 duration-300 text-amber-400 mb-4">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{stat.val}</h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 pb-20 container mx-auto px-6">
    <div className="mb-24 max-w-4xl mx-auto text-center lg:text-left">
      <h2 className="text-fluid-h2 font-black mb-6 text-white">Our Expertise.</h2>
      <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
        Specialized logistics for high-value relocations.
      </p>
    </div>

    <div className="space-y-24">
      {[
        { 
          id: "01", title: "Residential Moving", tagline: "White Glove Service",
          desc: "Full-service packing using 3-layer protective materials. We handle disassembly, packing, transit, and reassembly at your new home.",
          img: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80&w=800"
        },
        { 
          id: "02", title: "Corporate Relocation", tagline: "Business Continuity",
          desc: "After-hours moving to ensure zero business downtime. Specialized handling for IT infrastructure, files, and modular furniture.",
          img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
        },
        { 
          id: "03", title: "Vehicle Transport", tagline: "Enclosed Carriers",
          desc: "Secure, enclosed container transport for luxury cars and bikes. Hydraulic lifts ensure zero-scratch loading and unloading.",
          img: "https://images.unsplash.com/photo-1619682795661-69a443043301?auto=format&fit=crop&q=80&w=1200" 
        }
      ].map((s, i) => (
        <div key={i} className={`flex flex-col-reverse ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
          <div className="w-full lg:w-1/2 relative group">
             <SpotlightCard className="aspect-[4/3] p-1 bg-slate-800" noHover>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
             </SpotlightCard>
             <div className="absolute -bottom-6 -right-6 text-8xl md:text-9xl font-black text-slate-800/50 z-[-1] select-none font-display hidden md:block">{s.id}</div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-px w-8 bg-amber-400"></div>
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">{s.tagline}</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{s.title}</h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">{s.desc}</p>
            <ul className="space-y-3 inline-block text-left">
              {['Premium Packaging', 'Insurance Included', 'Live Tracking'].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProcessPage = () => (
  <div className="pt-32 pb-20 container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Protocol</span>
      <h2 className="text-fluid-h2 font-bold mb-8">Simplicity by Design.</h2>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2 hidden md:block"></div>

      {[
        { title: "Consultation", desc: "Video survey or onsite visit to inventory items." },
        { title: "Packing Day", desc: "Team arrives with color-coded boxes and gear." },
        { title: "Secure Transit", desc: "Goods loaded into GPS-enabled closed containers." },
        { title: "The Unboxing", desc: "We unload, assemble furniture, and remove debris." }
      ].map((step, i) => (
        <div key={i} className={`flex flex-col md:flex-row gap-8 mb-16 relative group ${i % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}>
          <div className={`md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} text-center md:text-left`}>
            <span className="md:hidden block text-amber-400 font-black text-xl mb-2">0{i+1}.</span>
            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 shadow-[0_0_15px_#fbbf24] z-10 mt-1 hidden md:block"></div>
          <div className="md:w-1/2"></div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-20 container mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
        <h2 className="text-fluid-h2 font-black mb-8 leading-tight">Redefining <br /> Logistics.</h2>
        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
          <p>
            SafeGuard started with a simple mission: to bring professionalism to an unorganized industry. We noticed that "movers" often cared more about the transaction than the transition.
          </p>
          <p>
            Today, we are a premium logistics partner. We don't just move boxes; we move memories.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-6">
           <SpotlightCard className="p-6 flex flex-col items-center text-center">
              <Target className="w-8 h-8 text-amber-400 mb-2" />
              <h4 className="text-3xl font-bold text-white mb-1">500+</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Verified Pros</p>
           </SpotlightCard>
           <SpotlightCard className="p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-amber-400 mb-2" />
              <h4 className="text-3xl font-bold text-white mb-1">20+</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">States Covered</p>
           </SpotlightCard>
        </div>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2">
         <SpotlightCard className="aspect-[3/4] p-2 bg-slate-800" noHover>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-2xl grayscale" alt="Team" loading="lazy" />
         </SpotlightCard>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-28 md:pt-32 pb-20 container mx-auto px-4 md:px-6 flex items-center justify-center min-h-[80vh]">
    <div className="w-full max-w-6xl grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
      <div className="lg:col-span-2 bg-amber-400 p-8 md:p-12 text-slate-950 flex flex-col justify-between order-1">
         <div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none tracking-tight">Let's Get Moving.</h3>
            <p className="font-medium text-slate-900/80 mb-8">Get a guaranteed quote within 2 hours.</p>
            <div className="space-y-4 font-bold text-sm">
              <div className="flex items-center gap-4"><Phone className="w-5 h-5" /> +91 98765 43210</div>
              <div className="flex items-center gap-4"><Globe className="w-5 h-5" /> hello@safeguard.in</div>
            </div>
         </div>
      </div>
      <div className="lg:col-span-3 p-8 md:p-12 bg-slate-950 order-2">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
             <input type="text" className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400" placeholder="Name" />
             <input type="tel" className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400" placeholder="Phone" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <input type="text" className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400" placeholder="From" />
             <input type="text" className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400" placeholder="To" />
          </div>
          <textarea className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white h-32 focus:outline-none focus:border-amber-400 resize-none" placeholder="Details..."></textarea>
          <Button primary className="w-full">Send Request</Button>
        </form>
      </div>
    </div>
  </div>
);

// --- APP SHELL ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false); }, [currentPage]);

  const NavLink = ({ page, label }) => (
    <button 
      onClick={() => setCurrentPage(page)}
      className={`text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 hover:text-amber-400 transition-colors ${currentPage === page ? 'text-amber-400' : 'text-slate-300'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-screen">
      <div className="bg-noise"></div>
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className={`container mx-auto px-4 md:px-6 rounded-full border ${scrolled ? 'glass-panel shadow-lg' : 'border-transparent'} transition-all duration-500`}>
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Shield className="w-full h-full text-amber-400 fill-amber-400 absolute transition-transform group-hover:scale-110" />
                <Home className="w-3 h-3 text-slate-950 absolute z-10" />
              </div>
              <span className="block text-lg font-black tracking-tighter text-white">SAFE<span className="text-amber-400">GUARD</span></span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {['home', 'services', 'process', 'about', 'contact'].map(page => (
                 <NavLink key={page} page={page} label={page} />
              ))}
            </div>

            <div className="hidden md:block">
              <Button primary className="px-5 py-2 text-[10px] uppercase" onClick={() => setCurrentPage('contact')}>Get Quote</Button>
            </div>

            <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {['home', 'services', 'process', 'about', 'contact'].map(page => (
              <button key={page} onClick={() => setCurrentPage(page)} className="text-2xl font-black uppercase tracking-widest text-white hover:text-amber-400">{page}</button>
          ))}
      </div>

      <main className="flex-grow relative z-10 animate-page-enter" key={currentPage}>
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'process' && <ProcessPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 pt-20 pb-8 relative z-10 mt-auto text-center">
        <h2 className="text-[12vw] font-black text-slate-900 leading-none select-none tracking-tighter hover:text-slate-800 transition-colors">SAFEGUARD</h2>
        <p className="mt-8 text-slate-600 text-[10px] tracking-widest">© 2026 SafeGuard Logistics.</p>
      </footer>
    </div>
  );
};

export default App;