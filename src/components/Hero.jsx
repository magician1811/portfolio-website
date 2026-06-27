import { BadgeCheck, Play, MoreHorizontal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-profile-container">
        {/* Profile Picture */}
        <div className="hero-avatar">
          <img src="/profile.jpg" alt="Rohan Ramesh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="hero-text-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-white)' }}>
            <BadgeCheck size={20} color="#3d91f4" fill="currentColor" />
            <span style={{ fontSize: '0.85rem', fontWeight: '500', letterSpacing: '1px' }}>FINAL YEAR CSE STUDENT AT MIT</span>
          </div>

          <h1 className="hero-title">
            Rohan Ramesh
          </h1>
        </div>
      </div>

      <div className="hero-actions">
        <button className="play-btn">
          <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
        </button>
        <a href="/Rohan_Ramesh_Resume.pdf" download="Rohan_Ramesh_Resume.pdf" style={{ display: 'inline-block', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'var(--text-white)', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'none' }}>
          RESUME
        </a>
        <MoreHorizontal size={32} color="var(--text-subdued)" style={{ cursor: 'pointer' }} />
      </div>
    </section>
  );
}

