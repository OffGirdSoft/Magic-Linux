"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SiLinux } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Función para scroll suave sin hashtag en la URL
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarOffset = 80; // Altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Actualizar la URL sin agregar hashtag (history API)
      window.history.pushState({}, '', window.location.pathname);
    }
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Descubre', id: 'hero-section' },
    { name: 'Distribuciones', id: 'distros' },
    { name: 'Empresas', id: 'company-cases' },
    { name: 'Beneficios', id: 'benefits' }
  ];

  return (
    <header
      className={`${
        scrolled
        ? 'bg-gray-900 shadow-lg py-3'
        : 'bg-gray-900 py-4'
      } text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="container mx-auto px-6 flex justify-between items-center"
      >
        <a
          onClick={(e) => {e.preventDefault(); scrollToSection('hero-section')}}
          href="#hero-section"
          className="flex items-center space-x-2 cursor-pointer"
          aria-label="Ir al inicio"
        >
          <SiLinux className="text-2xl text-blue-400" aria-hidden="true" />
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-descender-safe">
            MagicLinux
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <nav aria-label="Navegación de escritorio">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={(e) => {e.preventDefault(); scrollToSection(item.id)}}
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-descender-safe"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-300 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800 shadow-lg">
          <nav aria-label="Navegación móvil">
            <ul className="container mx-auto px-4 py-3">
              {navigationItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    onClick={(e) => {e.preventDefault(); scrollToSection(item.id)}}
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-left w-full block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
