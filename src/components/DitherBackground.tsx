'use client';

import dynamic from 'next/dynamic';

const DitherComponent = dynamic(() => import('./Dither'), {
  ssr: false,
  loading: () => <div style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
    zIndex: -1 
  }} />
});

interface DitherBackgroundProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
}

export default function DitherBackground(props: DitherBackgroundProps) {
  return <DitherComponent {...props} />;
} 