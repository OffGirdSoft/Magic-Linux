'use client';

import { useState, useEffect } from 'react';
import ScrollTeaser from "../components/ScrollTeaser";
import Hero from "../components/Hero";
import LinuxStats from "../components/LinuxStats";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Asegurar que la página siempre comience desde arriba cuando se carga o recarga
  useEffect(() => {
    // Forzar el scroll al inicio cuando se carga la página
    window.scrollTo(0, 0);

    // La función beforeunload se usa para asegurar que el loading se muestre
    // cuando se recarga la página
    const handleBeforeUnload = () => {
      // Almacenar un indicador en sessionStorage
      sessionStorage.setItem('isReloading', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Si no hay un indicador de recarga en curso, podemos darle un tiempo mínimo
    // de visualización a la pantalla de carga para mejorar UX
    const isReloading = sessionStorage.getItem('isReloading') === 'true';
    if (isReloading) {
      sessionStorage.removeItem('isReloading');
    }

    // Asegurarse de que la pantalla de carga se muestre al menos por un tiempo mínimo
    // para evitar flashes o transiciones demasiado rápidas
    const minLoadingTime = isReloading ? 2500 : 2000;

    const timer = setTimeout(() => {
      // La página continuará cargando, pero este temporizador asegura un tiempo mínimo
    }, minLoadingTime);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Función para finalizar la carga
  const handleFinishLoading = () => {
    setIsLoading(false);
    document.body.style.overflow = 'auto'; // Habilitar el scroll después de la carga
    // Garantizar que estemos en la parte superior después de que termine la carga
    window.scrollTo(0, 0);
  };

  // Deshabilitar el scroll durante la carga
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen finishLoading={handleFinishLoading} />}

      <div className="flex flex-col min-h-screen">
        {/* Scroll Teaser Section */}
        <ScrollTeaser />

        {/* Hero Section */}
        <Hero />

        {/* Linux Stats Section */}
        <LinuxStats />

        {/* Aumentamos el espacio de scroll al final para asegurar que hay suficiente
            espacio para las animaciones e interacciones de scroll */}
      </div>

      {/* Indicador de scroll fijo */}
      <ScrollIndicator />
    </>
  );
}