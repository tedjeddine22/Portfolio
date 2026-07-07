import { useState, useEffect } from 'react';
import KaliTerminal from './components/3D/KaliTerminal';
import Navbar from './components/Sections/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import TechStack from './components/Sections/TechStack';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Clubs from './components/Sections/Clubs';
import Contact from './components/Sections/Contact';

const TechBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // A mix of security and development keywords
    const symbols = [
      '0', '1', '{', '}', '</>', 'sys', '0x9F', 'TCP', '0x00', 
      'root', 'sudo', 'dev', 'npm', 'exploit', 'payload', 'React', 'SSH'
    ];
    
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // horizontal position
      size: Math.random() * 18 + 10,
      duration: Math.random() * 30 + 20, // longer duration for smoother float
      delay: Math.random() * -20, // Negative delay to start at random points immediately
      sway: Math.random() * 20 - 10, // horizontal sway range
      char: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: Math.random() * 0.05 + 0.02,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="tech-bg-container">
      {particles.map(p => (
        <span
          key={p.id}
          className="tech-particle"
          style={{
            left: `${p.x}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
            '--particle-opacity': p.opacity,
            '--sway-amount': `${p.sway}px`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

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

  // Improved scroll reveal observer supporting all animation classes
  useEffect(() => {
    if (!showContent) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Observe all reveal variant classes
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    document.querySelectorAll(selectors).forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [showContent]);

  return (
    <>
      {!entered && <KaliTerminal onEnter={handleEnter} />}

      {entered && (
        <div className={`portfolio-content ${showContent ? 'visible' : ''}`}>
          <div className="bg-grid"></div>
          <div className="scanlines"></div>
          <div className="bg-vignette"></div>
          <TechBackground />

          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Projects />
            <Experience />
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
