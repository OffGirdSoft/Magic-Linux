/**
 * Generador de esquemas estructurados para SEO
 *
 * Este archivo contiene funciones para generar datos estructurados (JSON-LD)
 * que mejoran el SEO al proporcionar información contextual a los motores de búsqueda
 */

// Schema para la página de inicio
export function getHomePageSchema(url = "https://magiclinux.com") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Magic Linux",
    "url": url,
    "description": "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

// Schema para el artículo sobre distribuciones de Linux
export function getDistributionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Distribuciones Populares de Linux",
    "description": "Explora las distribuciones más populares de Linux como Ubuntu, Linux Mint, Fedora y más.",
    "image": "https://magiclinux.com/images/distributions.jpg",
    "author": {
      "@type": "Organization",
      "name": "Magic Linux Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Magic Linux",
      "logo": {
        "@type": "ImageObject",
        "url": "https://magiclinux.com/logos/Icon.svg"
      }
    },
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };
}

// Schema para FAQ sobre Linux
export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es Linux?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Linux es un sistema operativo de código abierto basado en Unix creado en 1991 por Linus Torvalds."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué usar Linux?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Linux ofrece mayor seguridad, estabilidad, personalización y es gratuito, lo que lo hace ideal para servidores y usuarios que valoran la libertad de software."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué empresas utilizan Linux?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grandes empresas como Google, Amazon, Microsoft, IBM, Facebook y la NASA utilizan Linux en sus operaciones críticas."
        }
      }
    ]
  };
}

// Schema para la organización
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Magic Linux",
    "url": "https://magiclinux.com",
    "logo": "https://magiclinux.com/logos/Icon.svg",
    "description": "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia.",
    "sameAs": [
      "https://twitter.com/magiclinux",
      "https://linkedin.com/company/magiclinux",
      "https://github.com/magiclinux"
    ]
  };
}
