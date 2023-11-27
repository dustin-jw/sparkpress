import { getSCSSEntryPoint } from '../scss/entry-point.scss.js';
import { writeToFile } from './write-to-file.js';

export const scaffoldSCSSStructure = (directory, slug) => {
	writeToFile(directory, `${slug}-theme.scss`, getSCSSEntryPoint());
	writeToFile(`${directory}/settings`, '.gitkeep', '');
	writeToFile(`${directory}/tools`, '.gitkeep', '');
	writeToFile(`${directory}/generic`, '.gitkeep', '');
	writeToFile(`${directory}/elements`, '.gitkeep', '');
	writeToFile(`${directory}/objects`, '.gitkeep', '');
	writeToFile(`${directory}/components`, '.gitkeep', '');
	writeToFile(`${directory}/vendors`, '.gitkeep', '');
	writeToFile(`${directory}/utilities`, '.gitkeep', '');
};
