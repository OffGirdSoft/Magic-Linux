'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaTerminal, FaAngleDown } from 'react-icons/fa';

const ScrollIndicator = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animación del indicador de flecha
    gsap.to(container.querySelector('.scroll-indicator-arrow'), {
      y: 5,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
    });

    // Animación del cursor parpadeante de terminal
    gsap.to(container.querySelector('.scroll-indicator-cursor'), {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: 'steps(1)',
    });

    // Animación de color para el texto
    gsap.to(container.querySelector('.scroll-indicator-text'), {
      color: '#4ade80',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 bg-black/80 text-green-500 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-mono backdrop-blur-sm border border-green-500/30 hover:bg-black/90 transition-all duration-300"
    >
      <FaTerminal className="text-lg" />
      {/* Aumentar el padding vertical para evitar cortes */}
      <span className="scroll-indicator-text text-descender-safe">scroll_down</span>
      <span className="scroll-indicator-cursor">_</span>
      <FaAngleDown className="scroll-indicator-arrow ml-1" />
    </div>
  );
};

export default ScrollIndicator;
