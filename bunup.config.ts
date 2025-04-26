import { defineConfig } from 'bunup'

export default defineConfig({
	entry: ['src/index.tsx'],
	format: ['esm'],
	dts: true, // Generate declaration file (.d.ts)
	external: ['yoga-wasm-web', 'react'], // Exclude these packages from the bundle
	minify: true,
	clean: true,
})
