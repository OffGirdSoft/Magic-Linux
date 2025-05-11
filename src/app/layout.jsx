import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/*
export const headers = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};
*/

export const metadata = {
  title: "Magic Linux | Descubre el poder del software libre",
  description:
    "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia. Descubre todos los beneficios del software libre.",
  keywords:
    "linux, software libre, ubuntu, fedora, distribuciones linux, empresas con linux, beneficios de linux",
  authors: [
    { name: "JuansesDev" },
    { name: "Kroek" },
    { name: "OffGirdSoft" },
  ],
  creator: "OffGirdSoft",
  publisher: "Magic Linux Team",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://offgirdsoft.github.io/Magic-Linux/"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Magic Linux | Descubre el poder del software libre",
    description:
      "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia.",
    url: "https://offgirdsoft.github.io/Magic-Linux/",
    siteName: "Magic Linux",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magic Linux - El poder del software libre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Linux | Descubre el poder del software libre",
    description:
      "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia.",
    images: [
      {
        url: "/images/twitter-image.jpg",
        alt: "Magic Linux - El poder del software libre",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logos/Icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  license: "MIT",
  rights: "© 2023 OffGirdSoft. Todos los derechos reservados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen bg-gray-50 transition-colors duration-300`}
      >
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Datos estructurados para el sitio web (Organization) */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Magic Linux",
              url: "https://offgirdsoft.github.io/Magic-Linux/",
              logo: "https://offgirdsoft.github.io/Magic-Linux/logos/Icon.svg",
              description:
                "Explora el mundo de Linux, sus distribuciones más populares y cómo las empresas líderes aprovechan su potencia.",
              sameAs: [
                "https://twitter.com/offgirdsoft",
                "https://linkedin.com/company/offgirdsoft",
                "https://github.com/offgirdsoft",
              ],
              license: "https://offgirdsoft.github.io/Magic-Linux/license",
            }),
          }}
        />

        {/* Script para asegurar que la página siempre comience desde arriba al navegar o recargar */}
        <Script id="scroll-top">
          {`
            if (typeof window !== 'undefined') {
              // Forzar el scroll al inicio cuando se carga la página
              window.history.scrollRestoration = 'manual';

              // Para manejar navegación entre páginas (aunque es una SPA)
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo(0, 0);
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
