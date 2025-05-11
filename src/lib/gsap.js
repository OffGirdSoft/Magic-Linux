import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'; // Importar TextPlugin para efectos de texto
import { useEffect } from 'react';

// Registrar plugins de GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin); // Registrar TextPlugin también
}

/**
 * Hook personalizado para usar GSAP en componentes React
 * @param {Function} animationFunction - Función que implementa la animación con GSAP
 * @param {Array} dependencies - Dependencias del useEffect (opcional)
 */
export const useGSAP = (
  animationFunction,
  dependencies = []
) => {
  useEffect(() => {
    const ctx = gsap.context(animationFunction);

    // Cleanup function
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationFunction, ...dependencies]); // Agrega animationFunction y esparce las dependencias
};

// Funciones de animación predefinidas
export const animations = {
  // Animación de entrada con fade
  fadeIn: (target, duration = 1, delay = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0 },
      { opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },

  // Animación de entrada desde abajo
  fadeInUp: (target, duration = 1, delay = 0, y = 50) => {
    return gsap.fromTo(
      target,
      { opacity: 0, y },
      { opacity: 1, y: 0, duration, delay, ease: 'power2.out' }
    );
  },

  // Animación de entrada desde la izquierda
  fadeInLeft: (target, duration = 1, delay = 0, x = 50) => {
    return gsap.fromTo(
      target,
      { opacity: 0, x: -x },
      { opacity: 1, x: 0, duration, delay, ease: 'power2.out' }
    );
  },

  // Animación de entrada desde la derecha
  fadeInRight: (target, duration = 1, delay = 0, x = 50) => {
    return gsap.fromTo(
      target,
      { opacity: 0, x },
      { opacity: 1, x: 0, duration, delay, ease: 'power2.out' }
    );
  },

  // Animación de escalado
  scaleIn: (target, duration = 1, delay = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration, delay, ease: 'power2.out' }
    );
  },

  // Animación activada por scroll
  scrollTrigger: (
    target,
    animation,
    triggerOptions = {}
  ) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        ...triggerOptions
      }
    });

    animation(tl);
    return tl;
  }
};

// Exportar gsap para uso directo si es necesario
export { gsap, ScrollTrigger, TextPlugin }; // Exportar ScrollTrigger y TextPlugin explícitamente
export default gsap;
