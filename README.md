# Magic Linux Website

Este es un proyecto de un sitio web sobre Linux construido con Next.js y TypeScript.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://fonts.google.com/specimen/Inter), a clean and modern sans-serif font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

Para desplegar el sitio en GitHub Pages, puedes usar el script de despliegue incluido:

```bash
npm run deploy
```

Este script:

1. Compila el proyecto para exportación estática
2. Cambia a una rama `build` para almacenar la versión compilada
3. Copia los archivos compilados a la rama
4. Crea un commit con la fecha actual
5. Opcionalmente, hace push a GitHub

También puedes usar GitHub Actions para automatizar el despliegue. El workflow está configurado en `.github/workflows/deploy.yml`.

Para configurar GitHub Pages:

1. Ve a la configuración de tu repositorio
2. En la sección "GitHub Pages", selecciona la rama `build` como fuente
3. El sitio estará disponible en `https://offgirdsoft.github.io/Magic-Linux/`
