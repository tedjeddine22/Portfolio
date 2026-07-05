import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // États pour gérer le style au scroll et le menu mobile
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Effet pour détecter le défilement (Scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Ajout de l'écouteur d'événement au montage du composant
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'écouteur au démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour fermer le menu mobile après un clic sur un lien
  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        
        {/* Le Logo avec votre effet de Glitch CSS */}
        <a href="#" className="nav-logo" onClick={closeMenu}>
          root@tadjeddine
        </a>
        
        {/* Les liens de navigation */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="navLinks">
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
          <li><a href="#techstack" onClick={closeMenu}>Tech Stack</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="#experience" onClick={closeMenu}>Expérience</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Le bouton Hamburger pour la version Mobile */}
        <div 
          className={`nav-toggle ${menuActive ? 'active' : ''}`} 
          id="navToggle"
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Ouvrir le menu de navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
    </nav>
  );
}

