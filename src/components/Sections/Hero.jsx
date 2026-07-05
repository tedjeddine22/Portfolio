import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

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
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            {/* Badge animé */}
            <div className="hero-badge">
              <span>Ingénieur en informatique</span>
            </div>
            
            {/* Titre principal avec le nom injecté */}
            <h1 className="hero-title">
              Salam, je suis <span className="name">tadj eddine bouderba</span>
            </h1>
            
            {/* Sous-titre avec l'effet de frappe */}
            <p className="hero-subtitle">
              <span className="typing-text">{text}</span>
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

