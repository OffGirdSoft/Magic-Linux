'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { scrollToElement } from '@/lib/scrollUtils';

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    // Pin la sección Hero con duración ajustada
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=200%", // Reducido para mantenerlo justo
      pin: true,
      pinSpacing: true,
    });

    // Crear una timeline con inicio más temprano
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 10%", // Inicia antes para evitar retrasos
        end: "+=200%",
        scrub: 0.2, // Más rápido para mejor respuesta
      },
    });

    // Establecer estado inicial de los elementos
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
      opacity: 0,
      x: '-50px',
    });
    gsap.set(ctaRef.current.children, { y: 50, opacity: 0 });
    gsap.set(featuresRef.current.children, { y: 80, opacity: 0 });
    gsap.set(logoRef.current, { x: '100vw', opacity: 0 });

    // Animaciones secuenciales con tiempos más rápidos
    tl.to(titleRef.current, { opacity: 1, x: 0, duration: 0.3 })
      .to(subtitleRef.current, { opacity: 1, x: 0, duration: 0.3 }, "-=0.15")
      .to(descriptionRef.current, { opacity: 1, x: 0, duration: 0.3 }, "-=0.15")
      .to(ctaRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
      })
      .to(featuresRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.3,
      })
      .to(logoRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
      });

    // Efecto parallax para el logo
    gsap.to(logoRef.current, {
      y: '15%',
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Desvanecimiento al final
    gsap.to([titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current, featuresRef.current, logoRef.current], {
      opacity: 0,
      y: '-20px',
      stagger: 0.05,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "80% top", // Ajustado para que ocurra antes
        end: "100% top",
        scrub: true,
      },
    });
  }, []);

  const handleScrollTo = (elementId) => {
    scrollToElement(elementId, 80);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="hero-section"
      aria-labelledby="hero-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-transparent hero-overlay"></div>

      {/* Logo */}
      <div ref={logoRef} className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block linux-logo">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <Image
            src="/tux-color.svg"
            alt="Tux, la mascota de Linux, representando la libertad y potencia del sistema operativo Linux"
            width={350}
            height={350}
            className="relative z-10"
            priority
          />
        </div>
      </div>

      {/* Contenido */}
      <div ref={contentRef} className="container mx-auto px-6 py-24 relative z-20">
        <div className="max-w-3xl hero-content pt-16">
          <h1 ref={titleRef} id="hero-title" className="text-4xl md:text-6xl font-bold text-white mb-6 hero-title">
            El Poder del <span className="text-yellow-400">Código Abierto</span>
          </h1>
          <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 hero-subtitle">
            Descubre Linux: Libertad, Seguridad y Control
          </h2>
          <p ref={descriptionRef} className="text-xl text-gray-300 mb-8 hero-description">
            Linux ofrece un sistema operativo seguro, potente y flexible que devuelve el control a tus manos.
            Únete a millones de usuarios y empresas que confían en soluciones de código abierto.
          </p>

          {/* Botones CTA - Convertidos a enlaces para mejor SEO */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16 hero-cta-container">
            <a
              onClick={(e) => {e.preventDefault(); handleScrollTo('linux-stats')}}
              href="#linux-stats"
              className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium text-lg hover:bg-yellow-400 transition-colors duration-300 text-center cursor-pointer"
            >
              Descubre Linux
            </a>
            <a
              onClick={(e) => {e.preventDefault(); handleScrollTo('benefits')}}
              href="#benefits"
              className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg font-medium text-lg hover:bg-blue-400/10 transition-colors duration-300 text-center cursor-pointer"
            >
              Conoce las Ventajas
            </a>
          </div>

          {/* Características - Mejoradas con list para mejor semántica */}
          <ul ref={featuresRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6" aria-label="Características principales de Linux">
            <li className="flex flex-col items-center text-center advantage-icon">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-white font-medium">Seguro</span>
            </li>
            <li className="flex flex-col items-center text-center advantage-icon">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-white font-medium">Gratuito</span>
            </li>
            <li className="flex flex-col items-center text-center advantage-icon">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <span className="text-white font-medium">Personalizable</span>
            </li>
            <li className="flex flex-col items-center text-center advantage-icon">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-white font-medium">Estable</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;