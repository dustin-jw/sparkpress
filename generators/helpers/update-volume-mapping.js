import yaml from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const baseDir = join(dirname(fileURLToPath(import.meta.url)), '../../');

export const updateVolumeMapping = (slug, type = 'theme') => {
	const dockerComposePath = join(baseDir, 'docker-compose.yml');
	const config = yaml.load(readFileSync(dockerComposePath, { encoding: 'utf8' }));
	config.services.web.volumes.push(`./dist/${type}s/${slug}:/var/www/html/wp-content/${type}s/${slug}`);

	const updatedConfig = yaml.dump(config, { lineWidth: -1 });
	writeFileSync(dockerComposePath, updatedConfig, { encoding: 'utf8' });
};
