import React, { useState } from 'react';
import MouseSpotlight from './components/layout/MouseSpotlight';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import IntroPoster from './components/features/IntroPoster';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="bg-grid-pattern"></div>
      <MouseSpotlight />
      <IntroPoster />

      <Navbar activePage={activePage} navigateTo={navigateTo} />

      <main className="grow relative z-10 pt-0 min-h-screen">
        {activePage === 'home' && <HomePage setPage={navigateTo} />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'process' && <ProcessPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* FOOTER */}
      {activePage !== 'contact' && (
        <Footer navigateTo={navigateTo} />
      )}
    </div>
  );
};

export default App;