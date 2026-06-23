export default function About() {
  return (
    <section id="about" style={{ marginTop: '3rem' }}>
      <h2 className="section-title">About</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ color: 'var(--text-subdued)', fontSize: '1rem', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>
            Computer Science Engineering student seeking to transition academic knowledge into practical industry experience. Proficient in foundational technologies including C, C++, Java, Python, and DBMS, with an interest in full-stack JavaScript development.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            I am an enthusiastic, quick learner who values open communication and teamwork when solving complex challenges. I am looking forward to joining a collaborative engineering team where I can apply my foundational skills and develop my capabilities.
          </p>
        </div>
        
        {/* Playlists Menu */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <span style={{ color: 'var(--text-white)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '1rem' }}>Public Playlists</span>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
             <a href="#skills" className="spotify-card" style={{ padding: '0.8rem 1rem', color: 'var(--text-white)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '40px', height: '40px', backgroundColor: '#E13300', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>🎧</div>
               Top Genres (Skills)
             </a>
             <a href="#projects" className="spotify-card" style={{ padding: '0.8rem 1rem', color: 'var(--text-white)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '40px', height: '40px', backgroundColor: '#1DB954', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>🚀</div>
               Popular Releases (Projects)
             </a>
             <a href="#experience" className="spotify-card" style={{ padding: '0.8rem 1rem', color: 'var(--text-white)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '40px', height: '40px', backgroundColor: '#E8115B', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>📖</div>
               Tracklist (Experience)
             </a>
             <a href="#originals" className="spotify-card" style={{ padding: '0.8rem 1rem', color: 'var(--text-white)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '40px', height: '40px', backgroundColor: '#8D67AB', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>🎵</div>
               Original Releases
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}
