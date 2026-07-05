import { useState, useEffect } from 'react';
import LaptopScene from './components/3D/LaptopScene';
import Navbar from './components/Sections/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import TechStack from './components/Sections/TechStack';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Clubs from './components/Sections/Clubs';
import Contact from './components/Sections/Contact';

function App() {
  const [entered, setEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    // Fade out the intro screen
    const intro = document.getElementById('intro-screen');
    if (intro) intro.classList.add('fade-out');
    
    // After CSS transition, remove intro and show portfolio
    setTimeout(() => {
      setEntered(true);
      // Small delay then reveal content
      setTimeout(() => setShowContent(true), 100);
    }, 800);
  };

  // Scroll reveal observer
  useEffect(() => {
    if (!showContent) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [showContent]);

  return (
    <>
      {!entered && <LaptopScene onEnter={handleEnter} />}
      
      {entered && (
        <div className={`portfolio-content ${showContent ? 'visible' : ''}`}>
          <div className="bg-grid"></div>
          <div className="scanlines"></div>
          <div className="bg-vignette"></div>

          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Experience />
            <Projects />
            <Clubs />
            <Contact />
          </main>

          <footer className="footer">
            <div className="container">
              <p className="footer-quote">"Security is not a product, but a process."</p>
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Tadj Eddine BOUDERBA. <span>Neo Red Team</span>.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
