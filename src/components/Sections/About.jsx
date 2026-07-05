import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  // On récupère directement l'objet "about" complet depuis portfolioData
  const { about: data } = portfolioData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const counters = sectionRef.current.querySelectorAll('.stat-counter');
        counters.forEach(counter => {
          counter.innerText = '0'; // Réinitialiser à 0
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 30; // Vitesse de l'animation
            
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 50);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        observer.disconnect(); // Animer une seule fois
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">// À propos</span>
          <h2 className="section-title">Qui suis-je <span>?</span></h2>
        </div>
        
        <div className="about-grid">
          {/* L'image de profil avec l'animation qui vient de la gauche */}
          <div className="about-image reveal-left">
            <div className="about-image-wrapper">
              <img src={data.aboutPhoto || data.photo} alt={data.name} />
            </div>
          </div>
          
          {/* Le contenu texte avec l'animation qui vient de la droite */}
          <div className="about-content reveal-right">
            <h3>💫 {data.title}</h3>
            <p>
              🎓 {data.studyLevelFull}, spécialité <strong>{data.specialty}</strong>, à l'<strong>{data.university}</strong>.
            </p>
            <p>
              🔐 Intéressé par la <strong>Cybersécurité & l'Intelligence Artificielle</strong>.
            </p>
            <p>
              💻 Passionné par l'apprentissage continu, la création et <strong>le fait de casser des systèmes (hacking) pour comprendre leur fonctionnement</strong>.
            </p>
            
            {/* Les compteurs de statistiques animés */}
            <div className="about-stats">
              <div className="stat-item">
                {/* La classe stat-counter est utilisée par le JS de App.jsx pour l'animation des nombres */}
                <div className="stat-number stat-counter" data-target={data.stats.years}>0</div>
                <div className="stat-label">Années d'études</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-counter" data-target={data.stats.projects}>0</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-counter" data-target={data.stats.clubs}>0</div>
                <div className="stat-label">Clubs actifs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

