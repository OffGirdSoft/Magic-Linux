'use client';

import React, { useEffect, useState } from 'react';
import { SiLinux } from 'react-icons/si';
import { gsap } from '@/lib/gsap';

const LoadingScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  // Simular progreso de carga
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCount => {
        const newCount = prevCount + Math.floor(Math.random() * 10) + 1;
        return newCount > 100 ? 100 : newCount;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Cuando el contador llega a 100, terminar la animación y notificar
  useEffect(() => {
    if (counter === 100) {
      const timeline = gsap.timeline();

      timeline.to('.loading-logo', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });

      timeline.to('.loading-text, .loading-progress', {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      }, '-=0.4');

      timeline.to('.loading-screen', {
        y: '-100%',
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          // Notificar que la carga ha terminado
          setTimeout(() => {
            finishLoading();
          }, 100);
        }
      });
    }
  }, [counter, finishLoading]);

  // Animación inicial
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.from('.loading-logo', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
    });

    timeline.from('.loading-text', {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4');

    timeline.from('.loading-progress-container', {
      width: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3');

    // Animación de terminal - efecto de typing
    gsap.to('.terminal-text', {
      text: {
        value: "Inicializando sistema Linux...",
        delimiter: ""
      },
      duration: 1.5,
      ease: "none",
      delay: 0.5
    });

    // Animación de destello para el pingüino de Linux
    gsap.to('.loading-logo', {
      filter: 'drop-shadow(0 0 10px #3498db)',
      repeat: -1,
      yoyo: true,
      duration: 1.5
    });
  }, []);

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="loading-content flex flex-col items-center justify-center">
        <div className="loading-logo text-6xl mb-6 text-blue-400">
          <SiLinux />
        </div>

        <h1 className="loading-text text-white text-2xl font-bold mb-2">Linux Magic</h1>

        {/* Terminal de Linux simulado */}
        <div className="terminal-container bg-black border border-gray-700 rounded-md p-4 mb-8 w-[300px] sm:w-[400px] overflow-hidden">
          <div className="terminal-header flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="terminal-body font-mono text-sm text-green-400">
            <p className="terminal-prompt flex">
              <span className="text-blue-400 mr-2">user@linux-magic:~$</span>
              <span className="terminal-text"></span>
              <span className="terminal-cursor animate-pulse">_</span>
            </p>
          </div>
        </div>

        <div className="loading-progress-container w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="loading-progress h-full bg-blue-500"
            style={{ width: `${counter}%` }}
          ></div>
        </div>

        <p className="loading-text text-gray-400 text-sm mt-2">Cargando... {counter}%</p>
        <p className="loading-text text-gray-500 text-xs mt-4">Creado por JuansesDev, Kroek y OffGridSoft</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
