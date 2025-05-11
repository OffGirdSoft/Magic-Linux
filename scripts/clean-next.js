const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

const nextDir = path.join(process.cwd(), '.next');

console.log(`${colors.yellow}Iniciando script de limpieza clean-next.js...${colors.reset}`);
console.log(`${colors.yellow}Intentando limpiar el directorio .next en: ${nextDir}${colors.reset}`);

try {
  if (fs.existsSync(nextDir)) {
    if (process.platform === 'win32') {
      console.log(`${colors.yellow}Plataforma Windows detectada. Intentando terminar procesos 'node.exe' que puedan bloquear archivos...${colors.reset}`);
      try {
        console.log(`${colors.yellow}Ejecutando: taskkill /f /im node.exe${colors.reset}`);
        // Añadido shell: true por si acaso y timeout para evitar cuelgues indefinidos.
        // const taskkillResult = spawnSync('taskkill', ['/f', '/im', 'node.exe'], { encoding: 'utf-8', shell: true, timeout: 15000 }); // Timeout de 15 segundos
        // Cambiado a shell: false para un manejo de argumentos más directo y fiable
        const taskkillResult = spawnSync('taskkill', ['/f', '/im', 'node.exe'], { encoding: 'utf-8', shell: false, timeout: 15000 });


        if (taskkillResult.error) {
          console.error(`${colors.red}Error al intentar ejecutar taskkill (ej. comando no encontrado, timeout): ${taskkillResult.error.message}${colors.reset}`);
          // Considerar esto como no fatal, ya que el objetivo principal es eliminar .next
        } else {
          console.log(`${colors.green}Salida stdout de taskkill:\n${taskkillResult.stdout || '(ninguna)'}${colors.reset}`);
          console.log(`${colors.yellow}Salida stderr de taskkill:\n${taskkillResult.stderr || '(ninguna)'}${colors.reset}`);
          console.log(`${colors.yellow}Código de estado de taskkill: ${taskkillResult.status}${colors.reset}`);

          if (taskkillResult.status === 0) {
            console.log(`${colors.green}Taskkill reportó éxito (uno o más procesos 'node.exe' fueron terminados).${colors.reset}`);
          } else if (taskkillResult.status === 128 && taskkillResult.stderr && taskkillResult.stderr.toLowerCase().includes('no tasks running')) {
            // Código 128 es común si no hay procesos que coincidan. El mensaje exacto puede variar.
            console.log(`${colors.green}Taskkill informa que no había procesos node.exe en ejecución.${colors.reset}`);
          } else if (taskkillResult.signal === 'SIGTERM' || taskkillResult.signal === 'SIGKILL' || (taskkillResult.error && taskkillResult.error.code === 'ETIMEDOUT')) {
            console.log(`${colors.yellow}Taskkill fue terminado debido a un timeout. Se continuará con la limpieza.${colors.reset}`);
          }
          else {
            console.log(`${colors.yellow}Taskkill terminó con un código de estado (${taskkillResult.status}) o mensaje stderr inesperado. Se continuará con la limpieza de todos modos.${colors.reset}`);
          }
        }
      } catch (e) {
        // Este catch es para errores síncronos en el bloque try, spawnSync mismo podría lanzar uno si el comando no existe y no se usa shell:true
        console.error(`${colors.red}Excepción durante la ejecución de taskkill: ${e.message}${colors.reset}`);
        // Continuar de todos modos, el objetivo es limpiar .next
      }
      console.log(`${colors.yellow}Continuando con la eliminación del directorio .next después del intento de taskkill.${colors.reset}`);
    }

    console.log(`${colors.green}Intentando eliminar directorio .next: ${nextDir}${colors.reset}`);
    // En Windows, usar rd /s /q es más efectivo que fs.rmdir para directorios con problemas de permisos
    if (process.platform === 'win32') {
      execSync(`rd /s /q "${nextDir}"`, { stdio: 'inherit' });
    } else {
      fs.rmSync(nextDir, { recursive: true, force: true });
    }
    console.log(`${colors.green}Directorio .next eliminado con éxito (o ya no existía).${colors.reset}`);
  } else {
    console.log(`${colors.yellow}El directorio .next no existe en ${nextDir}, no se necesita limpieza.${colors.reset}`);
  }

  console.log(`${colors.green}Limpieza del directorio .next completada con éxito.${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Error durante el proceso de limpieza del directorio .next: ${error.message}${colors.reset}`);
  console.error(`${colors.red}Stack trace: ${error.stack}${colors.reset}`);
  console.log(`${colors.yellow}Asegúrate de que no haya otros procesos (como tu editor de código o terminales) usando archivos dentro de la carpeta .next.${colors.reset}`);
  console.log(`${colors.yellow}Si el problema persiste, intenta cerrar todas las instancias de Node.js manualmente y ejecuta el comando 'npm run build' en una terminal con permisos de administrador.${colors.reset}`);
  process.exit(1);
}

console.log(`${colors.green}Script clean-next.js finalizado.${colors.reset}`);
