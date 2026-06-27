import { Clock } from 'lucide-react';

const internships = [
  {
    title: 'AIML Intern',
    org: 'Giggso India Private Limited',
    date: 'June 4 – June 30, 2025',
    desc: [
      'Conducted model performance metrics analysis to evaluate dataset trends and improve pipeline transparency.',
      'Analyzed the Giskard AI framework for scanning, testing, and debugging vulnerabilities in machine learning models.',
      'Executed test suites for external APIs to verify structural integrity and seamless system integration.'
    ]
  }
];

const education = [
  {
    title: 'B.E Computer Science and Engineering',
    org: 'Madras Institute of Technology',
    date: '2023 - 2027',
    desc: 'CGPA: 8.49/10'
  },
  {
    title: 'Class XII - State Board',
    org: 'A.M.M Matriculation Higher Secondary School',
    date: '2009 - 2023',
    desc: 'Score: 557/600 (92.8%)'
  }
];

const certifications = [
  {
    title: 'Python in Data Science with 75%',
    org: 'NPTEL Elite Certificate',
    date: '',
    desc: ''
  },
  {
    title: 'SQL (Intermediate) Certification',
    org: 'HackerRank',
    date: '',
    desc: ''
  },
  {
    title: 'Cloud IoT Based Smart Community Workshop',
    org: 'Tekion',
    date: '',
    desc: ''
  }
];

const extraCurricular = [
  {
    title: 'Badminton District Player',
    org: 'Sports',
    date: '',
    desc: 'Represented at the district level in Badminton.'
  },
  {
    title: 'Zonal Tennis',
    org: 'Madras Institute of Technology',
    date: '',
    desc: 'Representing MIT in Zonal Tennis tournaments.'
  },
  {
    title: 'Murugappa Madras Quotient Quiz',
    org: 'Quizzing',
    date: '',
    desc: 'Participated in quizzes and won the Murugappa Madras Quotient Quiz.'
  },
  {
    title: 'Music Producer & Singer',
    org: 'Music',
    date: '',
    desc: 'Music Producer and Singer trained in Carnatic Music.'
  }
];

function Tracklist({ items }) {
  return (
    <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
      <div className="tracklist-header">
        <div className="tracklist-row">
          <span>#</span>
          <span>Title</span>
          <span style={{ display: 'flex', justifyContent: 'flex-end' }}><Clock size={16} /></span>
        </div>
      </div>

      {items.map((item, idx) => (
        <div key={idx} className="tracklist-row">
          <span style={{ color: 'var(--text-subdued)', fontSize: '1rem' }}>{idx + 1}</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--text-white)', fontSize: '1rem', fontWeight: '500' }}>{item.title}</span>
            {Array.isArray(item.desc) ? (
              <div style={{ color: 'var(--text-subdued)', fontSize: '0.85rem', marginTop: '4px' }}>
                <span style={{ fontWeight: '500' }}>{item.org}</span>
                <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                  {item.desc.map((d, i) => (
                    <li key={i} style={{ marginBottom: '2px', listStyleType: 'disc' }}>{d}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <span style={{ color: 'var(--text-subdued)', fontSize: '0.85rem' }}>
                {item.org}{item.org && item.desc ? ' - ' : ''}{item.desc}
              </span>
            )}
          </div>
          <span className="tracklist-date">{item.date}</span>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ marginTop: '3rem', paddingBottom: '2rem' }}>
      <h2 className="section-title">Education</h2>
      <Tracklist items={education} />

      <h2 className="section-title">Internships</h2>
      <Tracklist items={internships} />

      <h2 className="section-title">Certifications</h2>
      <Tracklist items={certifications} />

      <h2 className="section-title">Extra-Curriculars</h2>
      <Tracklist items={extraCurricular} />
    </section>
  );
}
