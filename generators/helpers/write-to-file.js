import { writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const baseDir = join(dirname(fileURLToPath(import.meta.url)), '../../');

export const writeToFile = (directory, filename, data) => {
	const pathToDir = join(baseDir, directory);
	const pathToFile = join(baseDir, directory, filename);
	mkdirSync(pathToDir, { recursive: true });

	writeFileSync(pathToFile, data, { encoding: 'utf8' });
};

export const copyFile = (source, destination, filename) => {
	mkdirSync(join(baseDir, destination));
	copyFileSync(join(baseDir, source, filename), join(baseDir, destination, filename));
};
