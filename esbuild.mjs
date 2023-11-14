import * as esbuild from 'esbuild';
import { config } from 'dotenv';

config();

const isProduction = process.env.NODE_ENV !== 'development';

const options = {
	entryPoints: ['src/js/plugins/**/*.js', 'src/js/themes/**/*.js'],
	format: 'esm',
	bundle: true,
	outdir: 'dist',
	// run `npx browserslist` to find updated minimum versions to set here
	target: ['chrome109', 'edge109', 'firefox109', 'safari15.5', 'opera94'],
	sourcemap: isProduction ? false : 'inline',
	minify: isProduction,
	logLevel: 'info',
};

if (!isProduction) {
	const context = await esbuild.context(options);
	await context.watch();
} else {
	await esbuild.build(options);
}
