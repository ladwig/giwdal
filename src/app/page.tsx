'use client';

import dynamic from 'next/dynamic';

const Dither = dynamic(() => import('../components/Dither'), {
  ssr: false,
  loading: () => <div style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    background: '#000000',
    zIndex: -1 
  }} />
});

export default function Home() {
  return (
    <main className="main">
      {/* Animated background */}
      <div className="background-container">
        <Dither
          waveColor={[0, 0.3, 1]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0}
          colorNum={4}
          waveAmplitude={0.26}
          waveFrequency={2.1}
          waveSpeed={0.02}
        />
      </div>
      
      {/* Name overlay */}
      <div className="name-overlay">
        <svg className="star-top" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L18.472 13.528L30 16L18.472 18.472L16 30L13.528 18.472L2 16L13.528 13.528L16 2Z" fill="white"/>
        </svg>
        <h1 className="name-text">DANIEL LADWIG</h1>
        <svg className="star-bottom" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L18.472 13.528L30 16L18.472 18.472L16 30L13.528 18.472L2 16L13.528 13.528L16 2Z" fill="white"/>
        </svg>
      </div>
      
      {/* Bottom corner links */}
      <div className="corner-links">
        <a href="https://www.linkedin.com/in/ladwigdaniel/" target="_blank" rel="noopener noreferrer" className="corner-link">
          LinkedIn
        </a>
        <a href="https://github.com/ladwig" target="_blank" rel="noopener noreferrer" className="corner-link">
          GitHub
        </a>
      </div>
    </main>
  )
} 