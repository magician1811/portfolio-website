import { BadgeCheck, Play, MoreHorizontal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" style={{ padding: '2rem 2rem 0 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
        {/* Profile Picture Placeholder */}
        <div style={{ width: '232px', height: '232px', borderRadius: '50%', backgroundColor: '#282828', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 60px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
          <img src="/profile.jpg" alt="Rohan Ramesh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-white)' }}>
            <BadgeCheck size={24} color="#3d91f4" fill="currentColor" />
            <span style={{ fontSize: '0.85rem', fontWeight: '500', letterSpacing: '1px' }}>FINAL YEAR CSE STUDENT AT MIT</span>
          </div>

          <h1 style={{ fontSize: '6rem', fontWeight: '800', color: 'var(--text-white)', lineHeight: '1', letterSpacing: '-2px', margin: '0' }}>
            Rohan Ramesh
          </h1>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
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
