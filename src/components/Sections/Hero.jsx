import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

// Circuit Board SVG - animated lines that mimic the Shellmates design
function CircuitBoard() {
  return (
    <div className="circuit-bg">
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        {/* Main circuit paths */}
        <path className="circuit-line" d="M 100 50 L 200 50 L 200 150 L 350 150 L 350 100 L 450 100" />
        <path className="circuit-line" d="M 50 200 L 150 200 L 150 300 L 300 300 L 300 250 L 500 250" />
        <path className="circuit-line" d="M 200 400 L 300 400 L 300 350 L 450 350 L 450 450 L 550 450" />
        <path className="circuit-line" d="M 80 500 L 180 500 L 180 420 L 250 420 L 250 520 L 400 520" />
        <path className="circuit-line" d="M 350 50 L 350 120 L 500 120 L 500 200 L 580 200" />
        <path className="circuit-line" d="M 150 80 L 150 180 L 280 180 L 280 280 L 420 280 L 420 180" />
        
        {/* Circuit nodes (dots at intersections) */}
        <circle className="circuit-dot" cx="200" cy="50" r="4" />
        <circle className="circuit-dot" cx="350" cy="150" r="4" />
        <circle className="circuit-dot" cx="300" cy="300" r="4" />
        <circle className="circuit-dot" cx="450" cy="350" r="4" />
        <circle className="circuit-dot" cx="180" cy="500" r="4" />
        <circle className="circuit-dot" cx="500" cy="120" r="4" />

        {/* Additional decorative dots */}
        <circle className="circuit-dot" cx="150" cy="200" r="3" style={{ animationDelay: '3s' }} />
        <circle className="circuit-dot" cx="250" cy="420" r="3" style={{ animationDelay: '3.2s' }} />
        <circle className="circuit-dot" cx="420" cy="280" r="3" style={{ animationDelay: '3.4s' }} />
        <circle className="circuit-dot" cx="500" cy="250" r="3" style={{ animationDelay: '3.6s' }} />
      </svg>
    </div>
  );
}

export default function Hero() {
  // On récupère directement l'objet "about" complet depuis portfolioData
  const { about: data } = portfolioData;

  // États pour l'effet de machine à écrire
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Les phrases qui vont s'écrire et s'effacer en boucle
  const phrases = [
    'Étudiant en Cybersécurité',
    'Passionné par la Sécurité Offensive',
    'Analyste SOC & DFIR',
    'Développeur Web & Logiciel'
  ];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    // Logique d'ajout ou de retrait de caractères
    setText(
      isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
    );

    // Vitesse plus rapide quand on efface
    setTypingSpeed(isDeleting ? 50 : 100);

    // Quand le mot est complètement écrit
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 2000); // Pause de 2 secondes avant d'effacer
    } 
    // Quand le mot est complètement effacé
    else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // On passe à la phrase suivante
      setTypingSpeed(500); // Petite pause avant d'écrire le prochain mot
    }
  };

  return (
    <section className="hero" id="hero">
      <CircuitBoard />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            {/* Badge animé */}
            <div className="hero-badge">
              <span>Ingénieur en informatique</span>
            </div>
            
            {/* Titre principal avec le nom injecté */}
            <h1 className="hero-title">
              Salam, je suis <span className="name">tadj eddine BOUDERBA</span>
            </h1>
            
            {/* Sous-titre avec l'effet de frappe */}
            <p className="hero-subtitle">
              <span className="typing-text">{text}</span>
              <span className="typing-cursor">█</span>
            </p>
            
            {/* Description récupérée depuis les données */}
            <p className="hero-description">
              {data.studyLevelFull}, spécialité
              <strong> {data.specialty}</strong>,
              à l'<strong>{data.university}</strong>. Passionné par la sécurisation des systèmes et l'analyse des vulnérabilités.
            </p>
            
            {/* Boutons d'action */}
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span aria-hidden="true">🚀</span> Voir mes projets
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span aria-hidden="true">📧</span> Me contacter
              </a>
            </div>
          </div>
          
          <div className="hero-photo">
            <div className="hero-photo-wrapper">
              <img src={data.photo} alt={data.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
