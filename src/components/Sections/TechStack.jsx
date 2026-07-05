import React from 'react';

export default function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">// Tech Stack</span>
          <h2 className="section-title"><span>Technologies</span> Maîtrisées</h2>
          <p className="section-description">
            Un aperçu des langages, environnements et outils que j'utilise au quotidien pour concevoir et sécuriser des systèmes.
          </p>
        </div>

        <div className="techstack-grid">
          {/* Core Programming */}
          <div className="techstack-category reveal">
            <h3>🧠 Core Programming</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className="tech-shield" />
              <img src="https://img.shields.io/badge/Python-3670A0.svg?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" className="tech-shield" />
              <img src="https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" className="tech-shield" />
            </div>
          </div>

          {/* Web Development */}
          <div className="techstack-category reveal">
            <h3>🌐 Web Development</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" className="tech-shield" />
              <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" className="tech-shield" />
              <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" className="tech-shield" />
              <img src="https://img.shields.io/badge/Vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js" className="tech-shield" />
              <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="tech-shield" />
              <img src="https://img.shields.io/badge/Next.js-black.svg?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" className="tech-shield" />
              <img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" className="tech-shield" />
            </div>
          </div>

          {/* Mobile Development */}
          <div className="techstack-category reveal">
            <h3>📱 Mobile Development</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" className="tech-shield" />
              <img src="https://img.shields.io/badge/Dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white" alt="Dart" className="tech-shield" />
              <img src="https://img.shields.io/badge/Firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" className="tech-shield" />
            </div>
          </div>

          {/* Backend & Servers */}
          <div className="techstack-category reveal">
            <h3>⚙️ Backend & Servers</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" className="tech-shield" />
              <img src="https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" className="tech-shield" />
              <img src="https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" className="tech-shield" />
              <img src="https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className="tech-shield" />
              <img src="https://img.shields.io/badge/Apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white" alt="Apache" className="tech-shield" />
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="techstack-category reveal">
            <h3>🛠️ Tools & Platforms</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="tech-shield" />
              <img src="https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="tech-shield" />
              <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="tech-shield" />
              <img src="https://img.shields.io/badge/Linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" className="tech-shield" />
              <img src="https://img.shields.io/badge/Cisco-%23049fd9.svg?style=for-the-badge&logo=cisco&logoColor=black" alt="Cisco" className="tech-shield" />
              <img src="https://img.shields.io/badge/Packet%20Tracer-%23007ACC.svg?style=for-the-badge&logo=cisco&logoColor=white" alt="Packet Tracer" className="tech-shield" />
            </div>
          </div>

          {/* Design & Conception */}
          <div className="techstack-category reveal">
            <h3>🎨 Design</h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" className="tech-shield" />
              <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=canva&logoColor=white" alt="Canva" className="tech-shield" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
