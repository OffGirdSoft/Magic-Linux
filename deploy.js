// Script de despliegue para GitHub Pages
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Colores para la consola
const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

/**
 * Ejecuta un comando del sistema y muestra la salida
 * @param {string} command - Comando a ejecutar
 * @param {string} description - Descripción de la acción
 */
function runCommand(command, description) {
  try {
    console.log(`${colors.yellow}▶ ${description}...${colors.reset}`);
    execSync(command, { stdio: "inherit" });
    console.log(`${colors.green}✓ Completado: ${description}${colors.reset}\n`);
    return true;
  } catch (error) {
    console.error(`${colors.red}✗ Error: ${description}${colors.reset}`);
    console.error(error.message);
    return false;
  }
}

/**
 * Crea un archivo con el contenido especificado
 * @param {string} filePath - Ruta del archivo
 * @param {string} content - Contenido del archivo
 * @param {string} description - Descripción de la acción
 */
function createFile(filePath, content, description) {
  try {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`${colors.green}✓ Archivo creado: ${filePath}${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.red}✗ Error al crear ${filePath}${colors.reset}`);
    console.error(error.message);
    return false;
  }
}

// Inicio del proceso de despliegue
console.log(
  `\n${colors.cyan}=== Iniciando despliegue en GitHub Pages ===${colors.reset}\n`
);

// 1. Construir la aplicación
if (!runCommand("npm run build", "Construyendo la aplicación")) {
  process.exit(1);
}

// 2. Crear archivo .nojekyll en la carpeta out
createFile("out/.nojekyll", "", "Creando archivo .nojekyll");

// 3. Asegurarse de que existe un archivo 404.html en la carpeta out
if (!fs.existsSync("out/404.html")) {
  console.log(
    `${colors.yellow}! No se encontró 404.html, copiando desde public...${colors.reset}`
  );
  if (fs.existsSync("public/404.html")) {
    fs.copyFileSync("public/404.html", "out/404.html");
  } else {
    console.log(
      `${colors.yellow}! Creando archivo 404.html básico${colors.reset}`
    );
    createFile(
      "out/404.html",
      `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redireccionando...</title>
  <script>
    // Redireccionamiento para manejar las rutas en GitHub Pages
    const segments = window.location.pathname.split('/');
    // Eliminar el primer segmento vacío y el segmento 'Magic-Linux'
    segments.splice(0, 2);
    const path = segments.join('/');

    // Redireccionar al índice con parámetros de consulta
    window.location.href = \`/Magic-Linux/?path=\${path}\`;
  </script>
</head>
<body>
  <p>Redireccionando...</p>
</body>
</html>`,
      "Creando archivo 404.html"
    );
  }
}

// 5. Desplegar a GitHub Pages
if (
  !runCommand("npx gh-pages -d out --dotfiles -b build", "Desplegando en GitHub Pages")
) {
  process.exit(1);
}

console.log(
  `\n${colors.green}=== Despliegue completado con éxito ===${colors.reset}`
);
console.log(
  `${colors.cyan}Tu sitio estará disponible en: https://offgirdsoft.github.io/Magic-Linux/${colors.reset}\n`
);
