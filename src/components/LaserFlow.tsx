import React, { useEffect, useRef } from 'react';
import styles from '../styles/laserFlow.module.css';

interface LaserFlowProps {
  horizontalBeamOffset?: number;
  verticalBeamOffset?: number;
  color?: string;
  className?: string;
}

const LaserFlow: React.FC<LaserFlowProps> = ({ 
  horizontalBeamOffset = 0.5,
  verticalBeamOffset = 0.5,
  color = '#8B45FF',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;

    const animate = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);
      
      // Create laser beam effect
      const beamX = width * horizontalBeamOffset;
      const beamY = height * verticalBeamOffset;
      
      // Main laser beam - vertical line
      const gradient = ctx.createLinearGradient(beamX, 0, beamX, height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.1, color + 'FF');
      gradient.addColorStop(0.3, color + 'CC');
      gradient.addColorStop(0.6, color + '88');
      gradient.addColorStop(0.8, color + '44');
      gradient.addColorStop(1, 'transparent');

      // Draw main beam
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient;
      ctx.fillRect(beamX - 2, 0, 4, height);
      
      // Add bright core
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(beamX - 1, 0, 2, height);
      
      // Add glow effect around the beam
      const glowGradient = ctx.createRadialGradient(
        beamX, beamY,
        0,
        beamX, beamY,
        Math.min(width, height) * 0.6
      );
      
      glowGradient.addColorStop(0, color + '60');
      glowGradient.addColorStop(0.3, color + '30');
      glowGradient.addColorStop(0.6, color + '15');
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add some particle effects
      ctx.fillStyle = color + '80';
      for (let i = 0; i < 5; i++) {
        const particleX = beamX + (Math.sin(time + i) * 10);
        const particleY = height * (0.2 + i * 0.15) + Math.sin(time * 2 + i) * 5;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 1 + Math.sin(time + i) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
      
      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [horizontalBeamOffset, verticalBeamOffset, color]);

  return (
    <div 
      ref={containerRef}
      className={`${styles.laserFlowContainer} ${className}`}
    >
      <canvas 
        ref={canvasRef}
        className={styles.laserCanvas}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default LaserFlow;
