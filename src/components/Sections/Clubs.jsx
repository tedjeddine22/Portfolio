import React from 'react';

export default function Clubs() {
  const clubsData = [
    {
      id: 'openminds',
      name: 'Open Minds Club',
      image: '/img/LogoOpenMindsClub.png',
      role: 'Membre IT Actif',
      description: "Promotion de la philosophie Libre et Open Source. Organisation d'événements, d'ateliers et de l'Install Party à l'USTHB."
    },
    {
      id: 'shellmates',
      name: 'Shellmates Club',
      image: '/img/shellmates logo.png',
      role: 'Membre',
      description: "Club de cybersécurité. Organisation de CTFs, du HackINI et promotion de la sécurité offensive et défensive."
    },
    {
      id: 'devup',
      name: 'Dev Up',
      image: '/img/dev up logo.jpg',
      role: 'Membre (2024)',
      description: "Communauté de développeurs focalisée sur le partage de connaissances en développement logiciel et nouvelles technologies."
    },
    {
      id: 'microclub',
      name: 'Micro Club',
      image: '/img/microclub.jpg',
      role: 'Membre',
      description: "Club scientifique axé sur l'innovation technologique, la mécatronique et la robotique."
    }
  ];

  return (
    <section className="clubs" id="clubs">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">// Communauté</span>
          <h2 className="section-title">Clubs <span>& Associations</span></h2>
          <p className="section-description">
            Mon engagement associatif m'a permis de développer mon esprit d'équipe, 
            mes compétences en communication et de partager ma passion pour la technologie.
          </p>
        </div>
        
        <div className="clubs-grid">
          {clubsData.map((club) => (
            <div className="club-card reveal" key={club.id}>
              <div className="club-logo">
                <img 
                  src={club.image} 
                  alt={club.name} 
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    background: 'var(--bg-secondary)',
                    padding: '5px',
                    border: '1px solid var(--accent-main)'
                  }}
                />
              </div>
              <h3>{club.name}</h3>
              <div style={{
                marginTop: '10px', 
                padding: '4px 10px', 
                background: 'rgba(0, 255, 51, 0.1)', 
                border: '1px solid var(--accent-main)', 
                borderRadius: '4px', 
                display: 'inline-block',
                fontSize: '0.85rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)'
              }}>
                {club.role}
              </div>
              <p style={{
                marginTop: '15px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {club.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
