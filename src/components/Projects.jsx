import { Play } from 'lucide-react';

const projects = [
  {
    title: 'Ocean Hazard Reporting App (INCOIS)',
    tech: 'JavaScript, Node.js, Python, AI',
    desc: 'Designed for the Smart India Hackathon (SIH) under the Ministry of Earth Sciences. Features a secure, multi-role architecture tailored for different stakeholders and integrates AI-analyzed data streams to process complex environmental metrics into actionable hazard alerts.',
    color: '#0D72EA'
  },
  {
    title: 'Fantasy Cricket App',
    tech: 'React.js, Node.js, MongoDB',
    desc: 'Developed a Fantasy Cricket app leveraging React.js for the frontend, Node.js and MongoDB for the backend. Includes features for team creation based on live match data and calculates user points dynamically depending on actual player performance.',
    color: '#1DB954'
  },
  {
    title: 'Decentralized Agentic Federated Learning Platform',
    tech: 'Federated Learning, Machine Learning, Blockchain',
    desc: 'A platform addressing financial fraud detection securely using Python, PyTorch, and Blockchain. Showcases skills in machine learning algorithms, distributed systems architecture, and implementing federated learning principles.',
    color: '#E91429'
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ marginTop: '3rem' }}>
      <h2 className="section-title">Projects</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="spotify-card" style={{ display: 'flex', gap: '2rem', padding: '1.5rem', alignItems: 'center' }}>
            {/* Album Cover */}
            <div style={{ 
              width: '150px', 
              height: '150px', 
              flexShrink: 0,
              backgroundColor: project.color, 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              {/* Hover Play Button */}
              <div style={{ 
                position: 'absolute', 
                bottom: '12px', 
                right: '12px', 
                backgroundColor: 'var(--spotify-green)', 
                borderRadius: '50%', 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                opacity: 0,
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                transform: 'translateY(8px)'
              }} className="project-play-btn">
                <Play fill="#000" color="#000" size={24} style={{ marginLeft: '4px' }} />
              </div>
            </div>
            
            {/* Project Details */}
            <div style={{ flex: 1 }}>
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--spotify-green)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
                {project.tech}
              </p>
              <p style={{ color: 'var(--text-subdued)', fontSize: '1rem', lineHeight: '1.6' }}>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .spotify-card:hover .project-play-btn {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
