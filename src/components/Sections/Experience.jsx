import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">04. TIMELINE</div>
          <h2 className="section-title">Mon <span>Parcours</span></h2>
        </div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-content">
                <span className="timeline-date">{exp.year}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
