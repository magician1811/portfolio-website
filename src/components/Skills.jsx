const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'Python'],
    color: '#E13300' // Spotify genre color style
  },
  {
    title: 'Full Stack',
    skills: ['React', 'Node.js', 'HTML/CSS', 'MongoDB', 'SQL Plus'],
    color: '#1E3264'
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'OOP', 'Operating Systems'],
    color: '#E8115B'
  },
  {
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Postman'],
    color: '#8D67AB'
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{ marginTop: '3rem' }}>
      <h2 className="section-title">Top Genres (Skills)</h2>
      
      <div className="bento-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bento-item" style={{ background: `linear-gradient(135deg, ${category.color} 0%, rgba(0,0,0,0.8) 100%)` }}>
            <h3 className="bento-title">{category.title}</h3>
            <div>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bento-pill">
                  {skill}
                </span>
              ))}
            </div>
            {/* Decorative abstract shape to mimic Spotify genre cards */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '-20px', 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              transform: 'rotate(25deg)', 
              borderRadius: '8px' 
            }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
