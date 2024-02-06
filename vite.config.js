import { defineConfig } from "vite"
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      name: 'CSSUtils',
      filename: 'css-utils'
    }
  }
})