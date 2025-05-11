'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  FaServer,
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaSpaceShuttle,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook
} from 'react-icons/fa';
import {
  SiLinux,
  SiUbuntu,
  SiLinuxmint,
  SiFedora,
  SiDebian,
  SiManjaro,
  SiDeepnote
} from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/lib/gsap';
import { useTouchScroll } from '@/lib/scrollUtils';

const LinuxStats = () => {
  const statsRef = useRef(null);
  const benefitsContainerRef = useRef(null);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  const distributions = [
    {
      name: 'Ubuntu',
      description: 'Ideal para principiantes y desarrollo, con amplio soporte comunitario.',
      websiteUrl: 'https://ubuntu.com/',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      borderColor: 'border-orange-400',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-orange-600',
      icon: <SiUbuntu className="text-5xl" />,
    },
    {
      name: 'Linux Mint',
      description: 'Basado en Ubuntu, enfocado en la facilidad de uso y elegancia.',
      websiteUrl: 'https://linuxmint.com/',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      borderColor: 'border-green-400',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-green-600',
      icon: <SiLinuxmint className="text-5xl" />,
    },
    {
      name: 'Fedora',
      description: 'Innovador y centrado en software libre, patrocinado por Red Hat.',
      websiteUrl: 'https://getfedora.org/',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      borderColor: 'border-blue-400',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      icon: <SiFedora className="text-5xl" />,
    },
    {
      name: 'Deepin',
      description: 'Conocido por su entorno de escritorio elegante y fácil de usar.',
      websiteUrl: 'https://www.deepin.org/',
      color: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600',
      borderColor: 'border-sky-400',
      gradientFrom: 'from-sky-500',
      gradientTo: 'to-sky-600',
      icon: <SiDeepnote className="text-5xl" />,
    },
    {
      name: 'Manjaro',
      description: 'Basado en Arch Linux, potente y amigable para el usuario.',
      websiteUrl: 'https://manjaro.org/',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      borderColor: 'border-teal-400',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-teal-600',
      icon: <SiManjaro className="text-5xl" />,
    },
    {
      name: 'Debian',
      description: 'La base de muchas otras distribuciones, conocido por su estabilidad.',
      websiteUrl: 'https://www.debian.org/',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      borderColor: 'border-red-400',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-600',
      icon: <SiDebian className="text-5xl" />,
    },
  ];

  const companies = [
    { name: 'Google', icon: <FaGoogle className="text-3xl text-blue-600 dark:text-blue-400" /> },
    { name: 'Amazon', icon: <FaAmazon className="text-3xl text-blue-600 dark:text-blue-400" /> },
    { name: 'Microsoft', icon: <FaMicrosoft className="text-3xl text-blue-600 dark:text-blue-400" /> },
    { name: 'IBM', icon: <FaServer className="text-3xl text-blue-600 dark:text-blue-400" /> },
    { name: 'Facebook', icon: <FaFacebook className="text-3xl text-blue-600 dark:text-blue-400" /> },
    { name: 'NASA', icon: <FaSpaceShuttle className="text-3xl text-blue-600 dark:text-blue-400" /> },
  ];

  const companiesDetailed = [
    {
      name: 'Google',
      icon: <FaGoogle className="text-6xl text-blue-600 dark:text-blue-400" />,
      description: 'Google utiliza variantes personalizadas de Linux para prácticamente toda su infraestructura, desde sus servidores de búsqueda hasta sus centros de datos. Android, el sistema operativo móvil de Google, está basado en el kernel de Linux. Google también desarrolló Chrome OS, un sistema operativo basado en Linux para Chromebooks.',
      achievements: ['Infraestructura de servidores', 'Android', 'Chrome OS', 'Kubernetes'],
      stats: { deployments: '2M+', servers: '90%', products: '8+' },
      color: 'bg-blue-50 dark:bg-blue-900/20',
      accent: 'bg-blue-600 dark:bg-blue-500',
      textAccent: 'text-blue-600 dark:text-blue-400',
      borderAccent: 'border-blue-500',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-blue-700',
      id: 'google-case',
      patternPosition: 'top-20 right-10'
    },
    {
      name: 'Amazon',
      icon: <FaAmazon className="text-6xl text-orange-600 dark:text-orange-400" />,
      description: 'Amazon Web Services (AWS), el mayor proveedor de servicios en la nube del mundo, ejecuta sus servidores principalmente en sistemas basados en Linux. Amazon también desarrolló su propia distribución Linux, Amazon Linux AMI, optimizada para entornos de nube. Los dispositivos Echo con Alexa también funcionan con software basado en Linux.',
      achievements: ['Amazon Web Services', 'Amazon Linux 2', 'Dispositivos Echo', 'FireOS'],
      stats: { servers: '95%', services: '200+', datacenters: '40+' },
      color: 'bg-orange-50 dark:bg-orange-900/20',
      accent: 'bg-orange-600 dark:bg-orange-500',
      textAccent: 'text-orange-600 dark:text-orange-400',
      borderAccent: 'border-orange-500',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-orange-700',
      id: 'amazon-case',
      patternPosition: 'bottom-20 left-10'
    },
    {
      name: 'Microsoft',
      icon: <FaMicrosoft className="text-6xl text-green-600 dark:text-green-400" />,
      description: 'Microsoft ha abrazado Linux en los últimos años, integrándolo en Windows mediante WSL (Windows Subsystem for Linux). Azure, la plataforma de nube de Microsoft, ofrece amplio soporte para distribuciones Linux, y actualmente más de la mitad de todas las máquinas virtuales de Azure ejecutan Linux en lugar de Windows Server.',
      achievements: ['Azure Cloud', 'Windows Subsystem for Linux', 'GitHub', 'SQL Server para Linux'],
      stats: { servers: '60%', services: '100+', regions: '54' },
      color: 'bg-green-50 dark:bg-green-900/20',
      accent: 'bg-green-600 dark:bg-green-500',
      textAccent: 'text-green-600 dark:text-green-400',
      borderAccent: 'border-green-500',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-green-700',
      id: 'microsoft-case',
      patternPosition: 'top-10 left-10'
    },
    {
      name: 'IBM',
      icon: <FaServer className="text-6xl text-indigo-600 dark:text-indigo-400" />,
      description: 'IBM ha sido un importante contribuyente al kernel de Linux durante más de dos décadas. La compañía ha invertido miles de millones de dólares en tecnologías Linux y de código abierto. IBM utiliza Linux en sus servidores mainframe, soluciones cloud y en su plataforma Watson AI.',
      achievements: ['Mainframes con Linux', 'Red Hat (adquisición)', 'IBM Cloud', 'Supercomputadoras'],
      stats: { servers: '20K+', cloud: '180+', ai: 'Watson' },
      color: 'bg-indigo-50 dark:bg-indigo-900/20',
      accent: 'bg-indigo-600 dark:bg-indigo-500',
      textAccent: 'text-indigo-600 dark:text-indigo-400',
      borderAccent: 'border-indigo-500',
      gradientFrom: 'from-indigo-400',
      gradientTo: 'to-indigo-700',
      id: 'ibm-case',
      patternPosition: 'bottom-10 right-10'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-6xl text-blue-600 dark:text-blue-400" />,
      description: 'Facebook (ahora Meta) opera uno de los despliegues de servidores Linux más grandes del mundo para soportar sus plataformas sociales. La empresa ha desarrollado numerosas herramientas de código abierto para gestionar sus enormes infraestructuras basadas en Linux y contribuye activamente a la comunidad open source.',
      achievements: ['Infraestructura de centros de datos', 'PyTorch', 'React', 'Herramientas de big data'],
      stats: { servers: '30K+', projects: '50+', contributions: '200+' },
      color: 'bg-blue-50 dark:bg-blue-900/20',
      accent: 'bg-blue-600 dark:bg-blue-500',
      textAccent: 'text-blue-600 dark:text-blue-400',
      borderAccent: 'border-blue-500',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-blue-700',
      id: 'facebook-case',
      patternPosition: 'top-10 right-10'
    },
    {
      name: 'NASA',
      icon: <FaSpaceShuttle className="text-6xl text-red-600 dark:text-red-400" />,
      description: 'La NASA utiliza Linux en muchas de sus operaciones críticas. Los rovers en Marte, como Perseverance, ejecutan software basado en el kernel de Linux. La Estación Espacial Internacional también migró de Windows a Linux para sus sistemas operativos principales, buscando mayor fiabilidad y estabilidad.',
      achievements: ['Rovers espaciales', 'Estación Espacial Internacional', 'Supercomputadoras', 'Simulaciones climáticas'],
      stats: { missions: '50+', rovers: '3', supercomputers: '1' },
      color: 'bg-red-50 dark:bg-red-900/20',
      accent: 'bg-red-600 dark:bg-red-500',
      textAccent: 'text-red-600 dark:text-red-400',
      borderAccent: 'border-red-500',
      gradientFrom: 'from-red-400',
      gradientTo: 'to-red-700',
      id: 'nasa-case',
      patternPosition: 'bottom-20 left-10'
    },
  ];

  const benefitsDetailed = [
    {
      title: "Reducción de Costos",
      icon: <FaChartLine className="text-6xl" />,
      percentage: 78,
      description: "La adopción de Linux permite a las organizaciones reducir significativamente sus costos operativos al eliminar las costosas licencias de software propietario. Además, su alta eficiencia permite ejecutar aplicaciones en hardware más económico, reduciendo los gastos en infraestructura y mantenimiento informático.",
      details: [
        "Ahorro en licencias de software",
        "Menor costo en hardware requerido",
        "Reducción de gastos en mantenimiento",
        "Mayor vida útil de equipos"
      ],
      stats: {
        ahorro: "4.2M€",
        "tiempo de ROI": "9 meses",
        "vida útil": "+40%"
      },
      color: "bg-green-50 dark:bg-green-900/20",
      accent: "bg-green-500 dark:bg-green-600",
      textAccent: "text-green-500 dark:text-green-400",
      borderAccent: "border-green-500",
      gradientFrom: "from-green-400",
      gradientTo: "to-green-600",
      id: "cost-benefit",
      patternPosition: "bottom-20 right-10"
    },
    {
      title: "Mayor Seguridad",
      icon: <FaShieldAlt className="text-6xl" />,
      percentage: 67,
      description: "El modelo de código abierto de Linux permite una revisión constante por miles de desarrolladores en todo el mundo, lo que resulta en la rápida identificación y resolución de vulnerabilidades. La transparencia del código y la activa comunidad proporcionan un nivel de seguridad superior en comparación con sistemas propietarios.",
      details: [
        "Menor tiempo de respuesta ante vulnerabilidades",
        "Transparencia total del código",
        "Comunidad activa de seguridad",
        "Actualizaciones frecuentes y gratuitas"
      ],
      stats: {
        "tiempo de parcheo": "24-48h",
        vulnerabilidades: "-35%",
        "revisores": "1000+"
      },
      color: "bg-purple-50 dark:bg-purple-900/20",
      accent: "bg-purple-500 dark:bg-purple-600",
      textAccent: "text-purple-500 dark:text-purple-400",
      borderAccent: "border-purple-500",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600",
      id: "security-benefit",
      patternPosition: "top-20 left-10"
    },
    {
      title: "Estabilidad Superior",
      icon: <FaCogs className="text-6xl" />,
      percentage: 89,
      description: "Linux es reconocido por su excepcional estabilidad en entornos de producción. Su arquitectura robusta permite tiempos de actividad prolongados sin necesidad de reinicios, alcanzando en muchos casos años de funcionamiento ininterrumpido en servidores críticos y sistemas de misión crítica.",
      details: [
        "Mayor tiempo de actividad",
        "Rendimiento consistente bajo carga",
        "Gestión eficiente de recursos",
        "Escalabilidad comprobada"
      ],
      stats: {
        "uptime": "99.997%",
        "reinicios": "-75%",
        "disponibilidad": "24/7/365"
      },
      color: "bg-blue-50 dark:bg-blue-900/20",
      accent: "bg-blue-500 dark:bg-blue-600",
      textAccent: "text-blue-500 dark:text-blue-400",
      borderAccent: "border-blue-500",
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-600",
      id: "stability-benefit",
      patternPosition: "bottom-20 left-10"
    }
  ];

  // Configuración del touch scroll horizontal para la sección de beneficios
  const { handleTouchStart, handleTouchMove, handleTouchEnd, scrollToPanel } = useTouchScroll(
    benefitsContainerRef,
    {
      sensitivity: 1.2,
      panelCount: benefitsDetailed.length,
      onScroll: (scrollLeft) => {
        if (benefitsContainerRef.current) {
          const containerWidth = benefitsContainerRef.current.clientWidth;
          const currentIndex = Math.round(scrollLeft / containerWidth);
          if (currentIndex !== currentBenefitIndex) {
            setCurrentBenefitIndex(currentIndex);
          }
        }
      }
    }
  );

  // Gestionar botones de navegación en móviles
  const handlePrevBenefit = () => {
    if (currentBenefitIndex > 0) {
      scrollToPanel(currentBenefitIndex - 1);
    }
  };

  const handleNextBenefit = () => {
    if (currentBenefitIndex < benefitsDetailed.length - 1) {
      scrollToPanel(currentBenefitIndex + 1);
    }
  };

  useEffect(() => {
    // Actualizar indicadores móviles cuando cambia el índice actual
    document.querySelectorAll('.benefit-mobile-indicator').forEach((indicator, idx) => {
      if (idx === currentBenefitIndex) {
        indicator.classList.add('opacity-100');
        indicator.classList.remove('opacity-40');
      } else {
        indicator.classList.remove('opacity-100');
        indicator.classList.add('opacity-40');
      }
    });
  }, [currentBenefitIndex]);

  useGSAP(() => {
    if (!statsRef.current || !benefitsContainerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para las barras de estadísticas
    gsap.utils.toArray(".stats-bar").forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: bar.style.width,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animaciones para las tarjetas de empresas
    gsap.utils.toArray(".company-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Pinning y animaciones para casos de estudio de empresas
    gsap.utils.toArray(".company-section").forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.5,
        },
      });

      tl.fromTo(
        section.querySelector(".company-logo-container"),
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      )
        .fromTo(
          section.querySelector(".company-name"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          section.querySelector(".company-description"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          section.querySelector(".company-achievements"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );
    });

    // Scroll horizontal para la sección de beneficios
    const benefitsContainer = benefitsContainerRef.current;

    gsap.set(benefitsContainer, { height: '100vh', overflow: 'hidden' }); // Forzar altura completa

    gsap.to(benefitsContainer, {
      x: () => -(benefitsContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: benefitsContainer,
        start: "top top",
        end: () => `+=${benefitsContainer.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 0.5,
        snap: 1 / (benefitsDetailed.length - 1),
        invalidateOnRefresh: true,
        onEnter: () => {
          document.body.style.overflowY = 'hidden';
        },
        onLeave: () => {
          document.body.style.overflowY = 'auto';
        },
        onEnterBack: () => {
          document.body.style.overflowY = 'hidden';
        },
        onLeaveBack: () => {
          document.body.style.overflowY = 'auto';
        },
      },
    });

    // Animaciones para las distribuciones
    gsap.utils.toArray(".distro-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animaciones para las tarjetas de resumen
    gsap.utils.toArray(".summary-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Manejar eventos de rueda para priorizar scroll horizontal
    const handleWheel = (e) => {
      if (!benefitsContainerRef.current) return;
      const rect = benefitsContainerRef.current.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 0.5;
        benefitsContainerRef.current.scrollLeft += scrollAmount;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section
      ref={statsRef}
      id="linux-stats"
      className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 relative overflow-hidden mt-0"
      style={{ zIndex: 20 }}
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <SiLinux className="text-[800px] absolute -right-60 -bottom-60 text-blue-500 transform rotate-6" aria-hidden="true" />
      </div>

      <div className="stats-container container mx-auto px-6 md:px-8 relative z-10">
        <h2 className="stats-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6 text-center">
          Linux en Cifras
        </h2>
        <p className="stats-description text-xl text-gray-700 dark:text-gray-300 mb-16 max-w-4xl mx-auto text-center">
          El ecosistema Linux ha crecido enormemente en las últimas décadas. Descubre el impacto
          real de este sistema operativo de código abierto en el mundo tecnológico actual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <FaServer className="text-blue-500 text-3xl mr-3" />
              <h3 className="stats-title font-semibold text-lg">Servidores web</h3>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-lg mb-2">
              <div className="stats-bar h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg" style={{ width: "96.3%" }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex justify-between">
              <span>96.3% de los servidores web funcionan con Linux</span>
              <span className="font-bold">96.3%</span>
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <FaRocket className="text-purple-500 text-3xl mr-3" />
              <h3 className="stats-title font-semibold text-lg">Supercomputadoras</h3>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-lg mb-2">
              <div className="stats-bar h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg" style={{ width: "100%" }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex justify-between">
              <span>Las 500 supercomputadoras más potentes</span>
              <span className="font-bold">100%</span>
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-green-500 text-3xl mr-3" />
              <h3 className="stats-title font-semibold text-lg">Dispositivos Android</h3>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-lg mb-2">
              <div className="stats-bar h-full bg-gradient-to-r from-green-400 to-green-600 rounded-lg" style={{ width: "71.9%" }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex justify-between">
              <span>Dispositivos móviles (Android)</span>
              <span className="font-bold">71.9%</span>
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <FaCloud className="text-red-500 text-3xl mr-3" />
              <h3 className="stats-title font-semibold text-lg">Desarrollo Cloud</h3>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-lg mb-2">
              <div className="stats-bar h-full bg-gradient-to-r from-red-400 to-red-600 rounded-lg" style={{ width: "90%" }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex justify-between">
              <span>Infraestructura cloud pública</span>
              <span className="font-bold">90%</span>
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-500">
          Empresas que confían en Linux
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {companies.map((company) => (
            <div
              key={company.name}
              className="company-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-full">
                {company.icon}
              </div>
              <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400 leading-relaxed pb-1">
                {company.name}
              </h4>
            </div>
          ))}
        </div>

        <div id="company-cases" className="pt-16">
          <div className="company-title-container mb-16 relative overflow-hidden py-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-500">
              Casos de Éxito Empresarial con Linux
            </h3>
            <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>

          <div className="sticky top-20 z-30 mb-12 flex justify-center space-x-3 sm:space-x-6 py-3 sm:py-4 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full max-w-max mx-auto px-4 sm:px-8 shadow-md">
            {companiesDetailed.map((company) => (
              <a
                key={`nav-${company.id}`}
                href={`#${company.id}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${company.accent} opacity-50 hover:opacity-100 hover:scale-125`}
                aria-label={`Ver caso de ${company.name}`}
              ></a>
            ))}
          </div>

          {companiesDetailed.map((company, index) => (
            <section
              key={company.name}
              id={company.id}
              className="company-section min-h-screen flex items-center py-24 relative overflow-hidden"
              data-company={company.name.toLowerCase()}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className={`${company.accent} opacity-5 w-[600px] h-[600px] rounded-full absolute -right-64 -bottom-64 company-bg-circle`}></div>
                <div className={`${company.accent} opacity-5 w-[300px] h-[300px] rounded-full absolute -left-32 top-1/4 company-bg-circle-sm`}></div>
                <div className={`absolute ${company.patternPosition} opacity-10 transform rotate-12`}>
                  <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 ${i % 3 === 0 ? company.accent : 'bg-gray-500/30'} rounded-sm`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-6 md:px-8">
                <div className={`flex flex-col items-stretch ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16`}>
                  <div className="w-full lg:w-2/5 flex flex-col items-center company-logo-container">
                    <div className={`${company.color} p-16 w-72 h-72 rounded-3xl shadow-xl flex items-center justify-center mb-8 relative overflow-hidden group`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="w-44 h-44 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center company-logo relative z-10 border border-gray-100 dark:border-gray-700">
                        {company.icon}
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-md bg-white/10"></div>
                    </div>
                    <h2 className={`company-name text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${company.gradientFrom} ${company.gradientTo}`}>
                      {company.name}
                    </h2>
                    <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                      {Object.entries(company.stats).map(([key, value]) => (
                        <div key={key} className="flex flex-col items-center">
                          <span className={`text-2xl font-bold ${company.textAccent}`}>{value}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize leading-relaxed pb-0.5">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 company-content">
                    <div className="space-y-10">
                      <div className={`company-description relative pl-6 ${company.borderAccent} border-l-4`}>
                        <h4 className={`text-2xl font-bold mb-6 ${company.textAccent}`}>
                          La Historia de {company.name} con Linux
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                          {company.description}
                        </p>
                      </div>
                      <div className="company-achievements">
                        <h4 className={`text-2xl font-bold mb-6 ${company.textAccent}`}>
                          Tecnologías Linux destacadas:
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          {company.achievements.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md achievement-item hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                              <div className={`w-10 h-10 rounded-lg ${company.accent} flex items-center justify-center mb-3`}>
                                <span className="text-white font-bold">{i + 1}</span>
                              </div>
                              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 company-cta flex justify-end">
                      <a
                        href={`https://${company.name.toLowerCase()}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${company.gradientFrom} ${company.gradientTo} text-white font-medium hover:shadow-lg transition-shadow duration-300`}
                      >
                        Visitar Sitio Oficial
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
              </div>
            </section>
          ))}
        </div>

        <div id="benefits" className="pt-16">
          <div className="benefits-title-container mb-8 md:mb-16 relative overflow-hidden py-8 md:py-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-500">
              Beneficios Tangibles de Linux
            </h3>
            <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </div>

          <div className="md:hidden mb-8 px-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
              Desliza horizontalmente para ver más beneficios
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevBenefit}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {benefitsDetailed.map((benefit, idx) => (
                  <div
                    key={`mobile-nav-${benefit.id}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${benefit.accent} benefit-mobile-indicator ${idx === currentBenefitIndex ? 'opacity-100' : 'opacity-40'}`}
                    onClick={() => scrollToPanel(idx)}
                  ></div>
                ))}
              </div>
              <button
                onClick={handleNextBenefit}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="sticky top-20 z-30 mb-8 md:mb-12 hidden md:flex justify-center space-x-3 sm:space-x-6 py-3 sm:py-4 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full max-w-max mx-auto px-4 sm:px-8 shadow-md">
            {benefitsDetailed.map((benefit) => (
              <a
                key={`nav-${benefit.id}`}
                href={`#${benefit.id}`}
                className={`benefit-nav-item flex flex-col items-center transition-all duration-300 hover:scale-110 group p-1`}
                aria-label={`Ver beneficio: ${benefit.title}`}
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${benefit.accent} opacity-50 group-hover:opacity-100`}></div>
                <span className={`text-[10px] sm:text-xs font-medium mt-1 opacity-70 group-hover:opacity-100 ${benefit.textAccent}`}>
                  {benefit.percentage}%
                </span>
              </a>
            ))}
          </div>

          <div
            ref={benefitsContainerRef}
            className="flex flex-row benefit-container touch-pan-x overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ width: `${benefitsDetailed.length * 100}vw`, height: '100vh' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {benefitsDetailed.map((benefit, index) => (
              <section
                key={benefit.title}
                id={benefit.id}
                className="benefit-section w-screen h-screen flex items-center py-6 md:py-12 lg:py-24 relative overflow-hidden snap-center"
                data-benefit={benefit.id}
                data-index={index}
              >
                <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none opacity-30 md:opacity-100">
                  <div className={`${benefit.accent} opacity-5 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] rounded-full absolute -left-32 sm:-left-64 -bottom-32 sm:-bottom-64 benefit-bg-circle`}></div>
                  <div className={`${benefit.accent} opacity-5 w-[100px] sm:w-[150px] md:w-[300px] h-[100px] sm:h-[150px] md:h-[300px] rounded-full absolute -right-16 sm:-right-32 top-1/4 benefit-bg-circle-sm`}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
                  <div className={`flex flex-col items-center lg:items-stretch ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-8 lg:gap-20 w-full`}>
                    <div className="w-full lg:w-2/5 flex flex-col items-center benefit-visual-container">
                      <div className="relative">
                        <div className={`${benefit.color} rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 flex items-center justify-center mb-4 sm:mb-5 md:mb-10`}>
                          <div className="relative benefit-percentage-circle">
                            <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-gray-600 opacity-50" />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                className={benefit.textAccent}
                                strokeDasharray={`${benefit.percentage * 2.83} 283`}
                                transform="rotate(-90 50 50)"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className={`text-2xl sm:text-3xl md:text-5xl font-bold ${benefit.textAccent} benefit-percentage`}>
                                {benefit.percentage}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full ${benefit.accent} mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center benefit-icon text-white`}>
                            {React.cloneElement(benefit.icon, { className: 'text-2xl sm:text-3xl md:text-5xl' })}
                          </div>
                          <h2 className={`benefit-title text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold ${benefit.textAccent} mb-3 sm:mb-4 md:mb-6`}>
                            {benefit.title}
                          </h2>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-6 mt-4 sm:mt-6 md:mt-10 w-full max-w-md">
                        {Object.entries(benefit.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-1.5 sm:p-2 md:p-4 bg-white dark:bg-gray-800 rounded-lg md:rounded-xl shadow-md benefit-stat"
                          >
                            <span className={`block text-base sm:text-lg md:text-2xl font-bold ${benefit.textAccent} mb-0.5 md:mb-1`}>{value}</span>
                            <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 capitalize">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full lg:w-3/5 benefit-content mt-2 md:mt-0">
                      <div className="space-y-4 sm:space-y-6 md:space-y-10">
                        <div className={`benefit-description relative pl-3 sm:pl-4 md:pl-6 ${benefit.borderAccent} border-l-4`}>
                          <h4 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-6 ${benefit.textAccent}`}>
                            ¿Por qué importa?
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                        <div className="benefit-details mt-3 sm:mt-4 md:mt-8">
                          <h4 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-6 ${benefit.textAccent}`}>
                            Aspectos destacados:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                            {benefit.details.map((item, i) => (
                              <div
                                key={i}
                                className="bg-white dark:bg-gray-800 p-2 sm:p-3 md:p-5 rounded-lg md:rounded-xl shadow-md benefit-detail-item hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-start">
                                  <div className={`min-w-7 h-7 sm:min-w-8 sm:h-8 md:min-w-10 md:h-10 ${benefit.accent} rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0`}>
                                    <span className="text-white text-xs sm:text-sm md:text-base font-bold">{i + 1}</span>
                                  </div>
                                  <p className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base font-medium">
                                    {item}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 sm:mt-8 md:mt-12 benefit-cta flex justify-center lg:justify-start">
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center md:hidden">
                  <div className="flex space-x-1.5">
                    {benefitsDetailed.map((_, idx) => (
                      <div
                        key={`swipe-${idx}`}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === index ? 'bg-gray-800 dark:bg-gray-200' : 'bg-gray-300 dark:bg-gray-600'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="py-10 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-500">
            En Resumen: ¿por qué elegir Linux?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefitsDetailed.map((benefit) => (
              <div
                key={`summary-${benefit.id}`}
                className={`summary-card p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${benefit.borderAccent}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 mb-6 flex items-center justify-center ${benefit.color.replace('bg-', 'bg-').replace('/20', '')} rounded-full`}>
                    <span className={`${benefit.textAccent} text-3xl`}>
                      {benefit.icon}
                    </span>
                  </div>
                  <span className={`text-5xl font-bold ${benefit.textAccent} mb-4`}>{benefit.percentage}%</span>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="distros" className="mt-20 mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Explora Distribuciones Populares de Linux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributions.map((distro) => (
              <div
                key={distro.name}
                className={`distro-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${distro.borderColor} border-b-4`}
              >
                <div className={`bg-gradient-to-r ${distro.gradientFrom} ${distro.gradientTo} p-6 relative overflow-hidden h-32 flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-60 h-60 rounded-full bg-white absolute -top-20 -right-20"></div>
                  </div>
                  <div className="text-white">
                    {distro.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{distro.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 min-h-[80px]">{distro.description}</p>
                  <a
                    href={distro.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${distro.color} ${distro.hoverColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg text-center w-full`}
                  >
                    Visitar Sitio Oficial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinuxStats;