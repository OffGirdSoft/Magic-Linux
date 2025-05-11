/**
 * Función para realizar scroll suave a un elemento por su ID,
 * considerando la altura del navbar
 *
 * @param {string} elementId - ID del elemento al que hacer scroll
 * @param {number} offset - Offset adicional en píxeles (por defecto 80px para la navbar)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/**
 * Función para forzar el scroll al inicio de la página
 * Útil para recargas o navegación inicial
 *
 * @param {string} behavior - Comportamiento del scroll ('auto' o 'smooth')
 */
export const scrollToTop = (behavior = 'auto') => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
  }
};

/**
 * Hook personalizado para crear un observador de scroll
 * para elementos en la página
 */
export const useScrollObserver = (options = {}) => {
  // Implementación que podría agregarse en el futuro
  // Para evitar el error de no-unused-vars, puedes registrar la opción o usarla de alguna manera.
  // Por ahora, simplemente la registramos para mostrar que se reconoce.
  if (options) {
    console.log('useScrollObserver options:', options);
  }
};

/**
 * Hook personalizado para manejar scroll horizontal táctil
 * Especialmente útil para carruseles horizontales en dispositivos móviles
 *
 * @param {React.RefObject} containerRef - Referencia al contenedor con scroll horizontal
 * @param {Object} options - Opciones adicionales
 * @returns {Object} - Funciones y estado para el manejo del scroll horizontal
 */
import { useState, useEffect, useCallback } from 'react';

export function useHorizontalScroll(containerRef, options = {}) {
  const {
    preventTextCut = true,
    textPadding = 4,
    enableSnap = true,
    snapThreshold = 0.5,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    preventVerticalScroll = true
  } = options;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ajustar contenedores para evitar corte de texto
  useEffect(() => {
    if (!containerRef.current || !preventTextCut) return;

    // Seleccionar todos los elementos de texto dentro del contenedor
    const textElements = containerRef.current.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button');

    textElements.forEach(element => {
      // Aumentar padding inferior para textos con posibles descendentes
      element.style.paddingBottom = `${textPadding}px`;
      // Asegurar que la altura de línea sea suficiente
      if (window.getComputedStyle(element).lineHeight === 'normal') {
        element.style.lineHeight = '1.5';
      }
    });
  }, [containerRef, preventTextCut, textPadding]);

  // Resto del código para manejo de scroll horizontal
  const handleMouseDown = useCallback((e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, [containerRef]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (enableSnap && containerRef.current) {
      snapToClosestItem(containerRef.current, snapThreshold);
    }
  }, [enableSnap, containerRef, snapThreshold]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault(); // preventVerticalScroll podría usarse aquí si se implementara
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad de scroll
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, containerRef, startX, scrollLeft]);

  // Función para ajustar al elemento más cercano
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const snapToClosestItem = (container, threshold) => {
    const containerWidth = container.clientWidth;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.children[0]?.clientWidth || containerWidth;

    const index = Math.round(scrollPosition / itemWidth);
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef, handleMouseDown, handleMouseUp, handleMouseMove]);

  return {
    isDragging,
    scrollTo: (position) => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: position,
          behavior: 'smooth'
        });
      }
    }
  };
}

// Exportar useTouchScroll como un alias de useHorizontalScroll para mantener compatibilidad
export const useTouchScroll = useHorizontalScroll;
