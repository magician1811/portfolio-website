import { useState } from 'react';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Originals from './components/Originals';
import Experience from './components/Experience';
import Contact from './components/Contact';
import EntranceOverlay from './components/EntranceOverlay';
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered && (
        <EntranceOverlay onEnter={() => setHasEntered(true)} />
      )}
      
      {hasEntered && (
        <div className="app-layout">
          <Sidebar />
          <div className="main-view">
            <div style={{ background: 'linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, var(--spotify-base) 100%), url("/banner.jpg") center/cover no-repeat', paddingBottom: '2rem' }}>
              <Hero />
            </div>
            <div style={{ padding: '0 2rem 4rem 2rem' }}>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Originals />
              <Contact />
            </div>
          </div>
          <BottomBar />
        </div>
      )}
    </>
  );
}

export default App;
