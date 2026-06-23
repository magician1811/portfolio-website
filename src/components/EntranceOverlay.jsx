import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EntranceOverlay({ onEnter }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.3s ease',
      opacity: isVisible ? 1 : 0
    }}>
      <div style={{
        backgroundColor: 'var(--spotify-highlight)',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: '2rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h2 style={{ 
          color: 'var(--text-white)', 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          Welcome to Rohan's Profile
        </h2>
        <p style={{ color: 'var(--text-subdued)', marginBottom: '2rem', fontSize: '0.95rem', textAlign: 'center' }}>
          Click below to enter the site.
        </p>

        <button 
          onClick={onEnter}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--text-white)',
            color: 'var(--spotify-black)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '24px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'transform 0.1s ease, background-color 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#f0f0f0';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'var(--text-white)';
          }}
        >
          <Play fill="currentColor" size={18} />
          Enter
        </button>
      </div>
    </div>
  );
}
