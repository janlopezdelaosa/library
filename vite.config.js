import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'calc.js', // El archivo de entrada de tu librería
      name: 'MyCalcLibrary', // El nombre global de tu librería si se incluye mediante una etiqueta <script>
      fileName: (format) => `my-calc-library.${format}.js` // El nombre del archivo de salida
    },
    rollupOptions: {
      // Asegúrate de definir los formatos de salida deseados
      output: [
        {
          format: 'es', // ESModule
          dir: 'dist', // Directorio de salida
          entryFileNames: '[name].esm.js'
        },
        {
          format: 'cjs', // CommonJS
          dir: 'dist', // Directorio de salida
          entryFileNames: '[name].cjs.js'
        }
      ]
    }
  }
});