import { useState } from 'react';
import { Home, Search, Library, PlusSquare, Heart, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="mobile-top-bar">
        <h1 style={{ color: 'var(--text-white)', fontSize: '1.25rem', fontWeight: '800' }}>ROHAN</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-white)', cursor: 'pointer', padding: '4px' }}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMenu}>
          <nav className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', width: '100%' }}>
              <h2 style={{ color: 'var(--text-white)', fontSize: '1.5rem', fontWeight: '800' }}>Navigation</h2>
              <button onClick={closeMenu} style={{ background: 'none', border: 'none', color: 'var(--text-white)', cursor: 'pointer' }}>
                <X size={28} />
              </button>
            </div>

            <a href="#home" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-white)', fontWeight: '700', fontSize: '1.1rem' }}>
              <Home size={24} /> Home
            </a>
            <a href="#skills" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '700', fontSize: '1.1rem' }}>
              <Search size={24} /> Search Skills
            </a>
            <a href="#projects" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '700', fontSize: '1.1rem' }}>
              <Library size={24} /> Your Projects
            </a>
            <a href="#experience" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '700', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              <div style={{ backgroundColor: '#b3b3b3', color: '#000', padding: '4px', borderRadius: '2px' }}>
                <PlusSquare size={18} />
              </div>
              Experience
            </a>
            <a href="#contact" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '700', fontSize: '1.1rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #450af5, #c4efd9)', padding: '4px', borderRadius: '2px', color: '#fff' }}>
                <Heart size={18} />
              </div>
              Contact Me
            </a>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="sidebar-container">
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
    </>
  );
}

