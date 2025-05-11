"use client";

import { SiLinux, SiNextdotjs, SiTailwindcss, SiGithub, SiReact, SiHtml5, SiCss3, SiGreensock } from 'react-icons/si';
import { FaTwitter, FaLinkedin, FaDiscord, FaHeart } from 'react-icons/fa';
import { scrollToElement } from '@/lib/scrollUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaDiscord />, url: 'https://discord.com', label: 'Discord' },
    { icon: <SiGithub />, url: 'https://github.com', label: 'GitHub' }
  ];

  const resourceLinks = [
    { name: 'Linux Foundation', url: 'https://www.linuxfoundation.org/' },
    { name: 'DistroWatch', url: 'https://distrowatch.com/' },
    { name: 'Linux.com', url: 'https://www.linux.com/' },
    { name: 'Open Source Initiative', url: 'https://opensource.org/' },
  ];

  // Actualizamos los enlaces rápidos para que coincidan con la barra de navegación
  const quickLinks = [
    { name: 'Descubre', id: 'hero-section' },
    { name: 'Distribuciones', id: 'distros' },
    { name: 'Empresas', id: 'company-cases' },
    { name: 'Beneficios', id: 'benefits' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer - Información adicional y enlaces</h2>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SiLinux className="absolute text-blue-500 text-[500px] -right-40 -bottom-40 transform rotate-12" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
          {/* Brand column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <SiLinux className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                MagicLinux
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Descubre el poder, la versatilidad y la libertad que Linux ofrece para usuarios y organizaciones de todo el mundo.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Enlaces Rápidos
            </h3>
            <nav aria-label="Enlaces de navegación rápida">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      onClick={(e) => {e.preventDefault(); scrollToElement(link.id, 80)}}
                      href={`#${link.id}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer"
                    >
                      <span className="h-1 w-1 bg-blue-500 rounded-full mr-2" aria-hidden="true"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Recursos de Linux
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <div>&copy; {currentYear} MagicLinux. Todos los derechos reservados.</div>
            <div className="mt-1 text-gray-500">Creado con <FaHeart className="inline mx-1 text-red-500" /> por JuansesDev, Kroek y OffGridSoft</div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              Hecho con <FaHeart className="mx-1 text-red-500" /> usando:
            </div>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="React"
            >
              <SiReact className="mr-1" /> React
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="Next.js"
            >
              <SiNextdotjs className="mr-1" /> Next.js
            </a>
            <a
              href="https://html.spec.whatwg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="HTML5"
            >
              <SiHtml5 className="mr-1" /> HTML
            </a>
            <a
              href="https://www.w3.org/Style/CSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="CSS3"
            >
              <SiCss3 className="mr-1" /> CSS
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="Tailwind CSS"
            >
              <SiTailwindcss className="mr-1" /> Tailwind
            </a>
            <a
              href="https://greensock.com/gsap/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
              aria-label="GSAP"
            >
              <SiGreensock className="mr-1" /> GSAP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
