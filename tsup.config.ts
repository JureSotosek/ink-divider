import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.tsx'],
	format: ['esm'],
	dts: true, // Generate declaration file (.d.ts)
	external: ['yoga-wasm-web', 'react'], // Don't include this packages in bundle
	minify: true,
	sourcemap: true,
	clean: true,
})
