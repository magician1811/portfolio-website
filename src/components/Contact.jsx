import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ marginTop: '3rem', paddingBottom: '2rem' }}>
      <h2 className="section-title">Contact</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
        
        <a href="mailto:rohanramesh1811@gmail.com" className="spotify-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '50%' }}>
            <Mail size={32} color="var(--text-white)" />
          </div>
          <span style={{ color: 'var(--text-white)', fontWeight: '700' }}>Email</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.85rem' }}>rohanramesh1811@gmail.com</span>
        </a>
        
        <a href="tel:7824824249" className="spotify-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '50%' }}>
            <Phone size={32} color="var(--text-white)" />
          </div>
          <span style={{ color: 'var(--text-white)', fontWeight: '700' }}>Phone</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.85rem' }}>+91 7824824249</span>
        </a>

        <a href="https://www.linkedin.com/in/rohan-ramesh-352892369/" target="_blank" rel="noopener noreferrer" className="spotify-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '50%' }}>
            <ExternalLink size={32} color="var(--text-white)" />
          </div>
          <span style={{ color: 'var(--text-white)', fontWeight: '700' }}>LinkedIn</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.85rem' }}>View Profile</span>
        </a>

        <a href="https://github.com/magician1811" target="_blank" rel="noopener noreferrer" className="spotify-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '50%' }}>
            <ExternalLink size={32} color="var(--text-white)" />
          </div>
          <span style={{ color: 'var(--text-white)', fontWeight: '700' }}>GitHub</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.85rem' }}>View Projects</span>
        </a>
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-subdued)', fontSize: '0.9rem' }}>
        <p>© 2026 Rohan Ramesh</p>
        <p>Built with React</p>
      </footer>
    </section>
  );
}
