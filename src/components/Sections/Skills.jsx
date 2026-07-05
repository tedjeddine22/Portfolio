import React from 'react';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">// Compétences</span>
          <h2 className="section-title">Mes <span>Compétences</span> Techniques</h2>
          <p className="section-description">
            Un ensemble de compétences diversifiées acquises à travers ma formation académique et mes projets pratiques.
          </p>
        </div>
        
        <div className="skills-grid">
          {/* Cybersecurity */}
          <div className="skill-card reveal">
            <div className="skill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Cybersécurité</h3>
            <ul className="skill-list">
              <li>Fondamentaux Linux et Permissions</li>
              <li>Escalade de privilèges (Linux/Windows)</li>
              <li>Défis de type CTF (Offensive Security)</li>
              <li>Analyse de logs SOC & DFIR</li>
            </ul>
            <div className="tech-tags">
              <span className="tech-tag">Linux</span>
              <span className="tech-tag">CTF</span>
              <span className="tech-tag">SOC</span>
              <span className="tech-tag">DFIR</span>
            </div>
          </div>

          {/* Networking */}
          <div className="skill-card reveal">
            <div className="skill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3>Réseaux</h3>
            <ul className="skill-list">
              <li>Modèle OSI, TCP/IP & Routage</li>
              <li>Simulations de réseaux (Cisco Packet Tracer)</li>
              <li>Protocoles réseau et analyse de trames</li>
            </ul>
            <div className="tech-tags">
              <span className="tech-tag">TCP/IP</span>
              <span className="tech-tag">Cisco</span>
              <span className="tech-tag">Routing</span>
            </div>
          </div>

          {/* Development */}
          <div className="skill-card reveal">
            <div className="skill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Développement</h3>
            <ul className="skill-list">
              <li>Apps Mobiles (Flutter, Firebase)</li>
              <li>Dev Web (HTML/CSS/JS, Vue.js, React)</li>
              <li>Backend & APIs (Node.js, NestJS, Flask)</li>
              <li>Applications Java (POO, Swing, Sérialisation)</li>
            </ul>
            <div className="tech-tags">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
