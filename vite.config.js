import { defineConfig } from "vite"
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        lib: path.resolve(__dirname, 'src','index.js'),
        site: path.resolve(__dirname, 'site', 'index.html')
      }
    }
  }
})