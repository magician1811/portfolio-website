import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, VolumeX, Mic2, MonitorSpeaker } from 'lucide-react';

export default function BottomBar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ gridArea: 'now-playing', backgroundColor: '#181818', borderTop: '1px solid #282828', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
      <audio ref={audioRef} src="/afro-song-music.m4a" loop autoPlay />
      
      {/* Left: Now Playing Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '30%' }}>
        <div style={{ width: '56px', height: '56px', backgroundColor: '#282828', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '24px' }}>👨‍💻</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'var(--text-white)', fontSize: '0.9rem', fontWeight: '500' }}>Software Engineer</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.75rem' }}>Rohan Ramesh</span>
        </div>
      </div>

      {/* Center: Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '40%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Shuffle size={20} color="var(--text-subdued)" />
          <SkipBack size={24} color="var(--text-subdued)" />
          <div 
            onClick={togglePlay}
            style={{ width: '32px', height: '32px', backgroundColor: 'var(--text-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            {isPlaying ? (
              <Pause size={16} color="var(--spotify-black)" />
            ) : (
              <Play size={16} color="var(--spotify-black)" style={{ marginLeft: '2px' }} />
            )}
          </div>
          <SkipForward size={24} color="var(--text-subdued)" />
          <Repeat size={20} color="var(--text-subdued)" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', maxWidth: '400px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subdued)' }}>0:00</span>
          <div style={{ height: '4px', backgroundColor: '#535353', borderRadius: '2px', flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '30%', backgroundColor: 'var(--text-white)', borderRadius: '2px' }}></div>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subdued)' }}>3:45</span>
        </div>
      </div>

      {/* Right: Extra Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', width: '30%' }}>
        <Mic2 size={16} color="var(--text-subdued)" />
        <MonitorSpeaker size={16} color="var(--text-subdued)" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100px' }}>
          <div onClick={toggleMute} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {isMuted ? (
              <VolumeX size={16} color="var(--text-subdued)" />
            ) : (
              <Volume2 size={16} color="var(--text-subdued)" />
            )}
          </div>
          <div style={{ height: '4px', backgroundColor: '#535353', borderRadius: '2px', flex: 1 }}>
            <div style={{ height: '100%', width: isMuted ? '0%' : '70%', backgroundColor: 'var(--text-white)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
