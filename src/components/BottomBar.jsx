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
    <div className="bottom-bar-container">
      <audio ref={audioRef} src="/afro-song-music.m4a" loop autoPlay />
      
      {/* Left: Now Playing Info */}
      <div className="now-playing-info">
        <div style={{ width: '44px', height: '44px', backgroundColor: '#282828', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '20px' }}>👨‍💻</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <span style={{ color: 'var(--text-white)', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Software Engineer</span>
          <span style={{ color: 'var(--text-subdued)', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Rohan Ramesh</span>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="player-controls">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Shuffle size={18} color="var(--text-subdued)" className="desktop-control-icon" />
          <SkipBack size={20} color="var(--text-subdued)" className="desktop-control-icon" />
          <div 
            onClick={togglePlay}
            style={{ width: '32px', height: '32px', backgroundColor: 'var(--text-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
          >
            {isPlaying ? (
              <Pause size={16} color="var(--spotify-black)" />
            ) : (
              <Play size={16} color="var(--spotify-black)" style={{ marginLeft: '2px' }} />
            )}
          </div>
          <SkipForward size={20} color="var(--text-subdued)" className="desktop-control-icon" />
          <Repeat size={18} color="var(--text-subdued)" className="desktop-control-icon" />
        </div>
        <div className="progress-bar-container">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subdued)' }}>0:00</span>
          <div style={{ height: '4px', backgroundColor: '#535353', borderRadius: '2px', flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '30%', backgroundColor: 'var(--text-white)', borderRadius: '2px' }}></div>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subdued)' }}>3:45</span>
        </div>
      </div>

      {/* Right: Extra Controls */}
      <div className="player-extra-controls">
        <Mic2 size={16} color="var(--text-subdued)" className="desktop-control-icon" />
        <MonitorSpeaker size={16} color="var(--text-subdued)" className="desktop-control-icon" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100px' }} className="volume-control-wrapper">
          <div onClick={toggleMute} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {isMuted ? (
              <VolumeX size={18} color="var(--text-subdued)" />
            ) : (
              <Volume2 size={18} color="var(--text-subdued)" />
            )}
          </div>
          <div style={{ height: '4px', backgroundColor: '#535353', borderRadius: '2px', flex: 1 }} className="volume-slider">
            <div style={{ height: '100%', width: isMuted ? '0%' : '70%', backgroundColor: 'var(--text-white)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
