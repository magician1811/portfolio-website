import React from 'react';

export default function Originals() {
  return (
    <section id="originals" style={{ marginTop: '3rem' }}>
      <h2 className="section-title">Original Releases</h2>
      
      <div style={{ marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
        <iframe 
          style={{ borderRadius: '12px' }} 
          src="https://open.spotify.com/embed/artist/06V8CnPdwQ3PkndQxvCNz9?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
