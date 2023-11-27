import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

export const getWordPressVersion = (fallback) => {
	const dockerfilePath = join(dirname(fileURLToPath(import.meta.url)), '../../Dockerfile');
	const dockerfile = readFileSync(dockerfilePath, { encoding: 'utf8' });

	const wordPressVersion =
		Array.from(dockerfile.matchAll(/WP_VERSION=(.*)/gm), (match) => match[1])?.[0] ?? fallback;
	return wordPressVersion;
};
