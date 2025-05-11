'use client';

import React from 'react';

/**
 * Componente que renderiza una sección
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la sección
 * @param {string} props.id - ID de la sección (para navegación)
 * @param {string} props.className - Clases CSS adicionales
 */
const AnimatedSection = ({
  children,
  id,
  className = "",
  ...props
}) => {
  return (
    <section
      id={id}
      className={`min-h-[90vh] relative ${className}`} // Mantener estructura básica
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
