'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si'; // Añadido el import del ícono de Linux
import { gsap } from 'gsap';
import { useGSAP } from '@/lib/gsap';

const ScrollTeaser = () => {
  // Estado para manejar las posiciones de partículas (inicialmente vacío)
  const [particlePositions, setParticlePositions] = useState([]);

  // Generar posiciones de partículas solo en el cliente después del montaje
  useEffect(() => {
    const positions = Array.from({ length: 10 }).map(() => ({
      left: `${Math.floor(Math.random() * 80) + 10}%`,
      top: `${Math.floor(Math.random() * 80) + 10}%`,
    }));
    setParticlePositions(positions);
  }, []);

  // Asegurarse de que la página comience desde arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (particlePositions.length === 0) return; // Esperar a que las partículas estén listas

    // Animación del texto (palabras con rebote escalonado)
    const text = document.querySelector('.teaser-text');
    if (!text) return;

    const words = text.textContent.split(' ');
    text.innerHTML = words
      .map((word) => `<span class="word inline-block">${word}</span>`)
      .join(' ');

    gsap.fromTo(
      '.teaser-text .word',
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'bounce.out',
        delay: 0.2,
      }
    );

    // Animación del ícono (pulso, rotación y cambio de color)
    gsap.to('.teaser-icon', {
      y: 15,
      scale: 1.15,
      rotation: 10,
      color: '#9333ea', // De azul a púrpura
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
    });

    // Animación del texto "scrollea"
    gsap.fromTo(
      '.teaser-scroll-text',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.out',
      }
    );

    gsap.to('.teaser-scroll-text', {
      y: 5,
      scale: 1.05,
      color: '#9333ea', // Mismo color que el ícono
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      delay: 2.3,
      ease: 'sine.inOut',
    });

    // Animaciones de los íconos de Tux de fondo
    gsap.to('.teaser-tux-1', {
      scale: 1.1,
      rotation: 15,
      x: 50,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to('.teaser-tux-2', {
      scale: 1.2,
      rotation: -20,
      y: -30,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to('.teaser-tux-3', {
      scale: 1.15,
      rotation: 10,
      x: -40,
      y: 20,
      duration: 18,
      repeat: -1,
      ease: 'linear',
    });

    // Animación de partículas (destellos)
    gsap.utils.toArray('.teaser-particle').forEach((particle, index) => {
      gsap.to(particle, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        opacity: 0,
        scale: gsap.utils.random(0.5, 1.5),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    });
  }, [particlePositions]); // Dependencia al state de posiciones

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{ zIndex: 30 }}
    >
      {/* Íconos de Tux decorativos en el fondo en lugar de círculos */}
      <div className="absolute inset-0 pointer-events-none">
        <SiLinux className="teaser-tux-1 text-[400px] text-blue-500/10 dark:text-blue-500/20 absolute -top-40 -left-40 transform rotate-6" />
        <SiLinux className="teaser-tux-2 text-[300px] text-purple-500/10 dark:text-purple-500/20 absolute bottom-20 right-10 transform -rotate-12" />
        <SiLinux className="teaser-tux-3 text-[500px] text-blue-500/10 dark:text-blue-400/15 absolute top-10 left-1/2 transform -translate-x-1/2 rotate-3" />
      </div>

      {/* Partículas (destellos) - renderizado condicional basado en el estado */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.length > 0
          ? particlePositions.map((position, i) => (
              <div
                key={i}
                className="teaser-particle w-2 h-2 rounded-full bg-blue-400/50 dark:bg-purple-400/50 absolute"
                style={{ left: position.left, top: position.top }}
              />
            ))
          : null}
      </div>

      {/* Contenido principal */}
      <div className="text-center relative z-10 px-6">
        <h1 className="teaser-text text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-10">
          El Mundo de Linux
        </h1>
        <div className="flex flex-col items-center">
          <FaArrowDown
            className="teaser-icon text-4xl text-blue-500 dark:text-blue-400 mb-4"
            aria-label="Scroll down"
          />
          <p className="teaser-scroll-text text-lg md:text-xl text-blue-500 dark:text-blue-400 font-bold">
            Descubre el poder de Linux
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollTeaser;
