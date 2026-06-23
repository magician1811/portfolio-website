import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div style={{ gridArea: 'sidebar', backgroundColor: 'var(--spotify-black)', padding: '24px 12px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ padding: '0 12px' }}>
        <h1 style={{ color: 'var(--text-white)', fontSize: '1.5rem', fontWeight: '800' }}>ROHAN</h1>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 12px', color: 'var(--text-white)', fontWeight: '700' }}>
          <Home size={24} /> Home
        </a>
        <a href="#skills" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 12px', fontWeight: '700' }}>
          <Search size={24} /> Search Skills
        </a>
        <a href="#projects" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 12px', fontWeight: '700' }}>
          <Library size={24} /> Your Projects
        </a>
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <a href="#experience" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 12px', fontWeight: '700' }}>
          <div style={{ backgroundColor: '#b3b3b3', color: '#000', padding: '4px', borderRadius: '2px' }}>
            <PlusSquare size={16} />
          </div>
          Experience
        </a>
        <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 12px', fontWeight: '700' }}>
          <div style={{ background: 'linear-gradient(135deg, #450af5, #c4efd9)', padding: '4px', borderRadius: '2px', color: '#fff' }}>
            <Heart size={16} />
          </div>
          Contact Me
        </a>
      </div>
      
      <div style={{ flex: 1 }}></div>
      <div style={{ padding: '0 12px', fontSize: '0.8rem' }}>
        <p>User: Student</p>
      </div>
    </div>
  );
}
