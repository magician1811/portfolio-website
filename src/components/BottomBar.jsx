import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, MonitorSpeaker } from 'lucide-react';

export default function BottomBar() {
  return (
    <div style={{ gridArea: 'now-playing', backgroundColor: '#181818', borderTop: '1px solid #282828', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
      
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
          <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--text-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Play size={16} color="var(--spotify-black)" style={{ marginLeft: '2px' }} />
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
          <Volume2 size={16} color="var(--text-subdued)" />
          <div style={{ height: '4px', backgroundColor: '#535353', borderRadius: '2px', flex: 1 }}>
            <div style={{ height: '100%', width: '70%', backgroundColor: 'var(--text-white)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
