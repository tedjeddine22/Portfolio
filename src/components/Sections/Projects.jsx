import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Projects() {
  // On récupère les projets depuis portfolioData car App.jsx ne passe pas de props
  const { projects } = portfolioData;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">// Portfolio</span>
          <h2 className="section-title">Mes <span>Projets</span></h2>
          <p className="section-description">
            Une sélection de projets académiques et personnels démontrant mes compétences techniques et ma polyvalence.
          </p>
        </div>
        
        <div className="projects-grid">
          {/* Boucle sur les données des projets pour créer une carte par projet */}
          {projects.map((project, idx) => {
            // Sécurité : s'assurer qu'il y a un tableau tech, sinon on met des tags par défaut
            const techList = project.tech || ["Sécurité", "Python"];
            // Utiliser le lien github de portfolioData s'il existe
            const projectLink = project.github || project.demo || "#";

            return (
              <div className="project-card reveal" key={idx}>
                {/* L'icône ou l'image du projet */}
                <div className="project-image" aria-hidden="true" style={project.image ? { fontSize: 0 } : {}}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`Logo de ${project.title}`} 
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        background: 'var(--bg-secondary)',
                        padding: '5px',
                        border: '1px solid var(--accent-main)'
                      }}
                    />
                  ) : (
                    project.icon
                  )}
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {/* Boucle imbriquée pour les tags des technologies utilisées */}
                  <div className="tech-tags">
                    {techList.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  
                  <br />
                  
                  {/* Lien vers le repository GitHub ou le site */}
                  <div className="project-links">
                    <a 
                      href={projectLink} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Voir le code source de ${project.title} sur GitHub`}
                    >
                      <span aria-hidden="true">📂</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
