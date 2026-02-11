
import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let step = 0;
    const animate = () => {
      step += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const drawWave = (offset: number, amplitude: number, speed: number, color: string) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = Math.sin(x * 0.005 + step * speed + offset) * amplitude + canvas.height / 2;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      };

      drawWave(0, 40, 1, 'rgba(14, 165, 233, 0.2)');
      drawWave(2, 30, 0.8, 'rgba(59, 130, 246, 0.15)');
      drawWave(4, 50, 1.2, 'rgba(16, 185, 129, 0.1)');

      requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />;
};
