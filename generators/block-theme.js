/* eslint-disable no-console */
import prompts from 'prompts';
import * as templates from './themes/block/index.js';
import { writeToFile, copyFile } from './helpers/write-to-file.js';
import { getWordPressVersion } from './helpers/get-wordpress-version.js';
import { scaffoldSCSSStructure } from './helpers/scaffold-scss-structure.js';
import { getJSEntryPoint } from './js/entry-point.js.js';
import { updateVolumeMapping } from './helpers/update-volume-mapping.js';

const getRequiredDetails = async () => {
	const questions = [
		{
			type: 'text',
			name: 'name',
			message: "What should be your theme's name?",
		},
		{
			type: 'text',
			name: 'description',
			message:
				'Please describe this theme. This will be shown on theme selection pages to help identify the theme.',
		},
		{
			type: 'text',
			name: 'authors',
			message: 'Which organization or people should be listed as contributors/authors?',
		},
		{
			type: 'text',
			name: 'themeURI',
			message: "What should be used for the theme URI? This would likely be your organization's website.",
		},
		{
			type: 'text',
			name: 'authorURI',
			message:
				'What should be used for author URI? This may be the same as the theme URI or a link to somewhere else.',
		},
	];

	const response = await prompts(questions);

	return response;
};

const getSkippableDetails = async (useDefaults) => {
	if (useDefaults) {
		return {
			pageTemplates: ['404', 'archive', 'home', 'page', 'search', 'single'],
			supportComments: true,
			supportPostMeta: true,
			useDynamicPatterns: true,
			scaffoldSCSS: true,
			scaffoldJS: true,
		};
	}

	const questions = [
		{
			type: 'multiselect',
			name: 'pageTemplates',
			message:
				'Which page templates would you like to start with? (index.html is required, so it will always be created)',
			hint: 'Space to select. Return to submit',
			instructions: false,
			choices: [
				{
					title: '404.html',
					value: '404',
					selected: true,
				},
				{
					title: 'archive.html',
					value: 'archive',
					selected: true,
				},
				{
					title: 'home.html',
					value: 'home',
					selected: true,
				},
				{
					title: 'page.html',
					value: 'page',
					selected: true,
				},
				{
					title: 'search.html',
					value: 'search',
					selected: true,
				},
				{
					title: 'single.html',
					value: 'single',
					selected: true,
				},
			],
		},
		{
			type: 'toggle',
			name: 'supportComments',
			message: 'Do you need to support comments on posts?',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
		{
			type: 'toggle',
			name: 'supportPostMeta',
			message: 'Do you want to show author, date, and taxonomy info on posts?',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
		{
			type: 'toggle',
			name: 'useDynamicPatterns',
			message:
				'Do you want to include dynamic patterns for things like the copyright date in the footer and translatable labels for the search form? If you choose no, hard-coded values will be used and no patterns or Twig templates will be created.',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
		{
			type: 'toggle',
			name: 'scaffoldSCSS',
			message: 'Would you like to scaffold SCSS for this theme?',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
		{
			type: 'toggle',
			name: 'scaffoldJS',
			message: 'Would you like to scaffold JavaScript for this theme?',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
	];

	const response = await prompts(questions);

	return response;
};

const generateBlockTheme = async () => {
	const useDefaults = process.argv.slice(2).includes('-y');
	if (useDefaults) {
		console.log('Using default values!');
	}

	const { name, description, authors, themeURI, authorURI } = await getRequiredDetails();
	const { pageTemplates, supportComments, supportPostMeta, useDynamicPatterns, scaffoldSCSS, scaffoldJS } =
		await getSkippableDetails(useDefaults);
	const wordPressVersion = getWordPressVersion('6.4');
	const slug = name.toLowerCase().replace(/\W/g, '-');
	const functionPrefix = slug.replaceAll('-', '_');

	const templateParams = {
		name,
		description,
		authors,
		themeURI,
		authorURI,
		pageTemplates,
		supportComments,
		supportPostMeta,
		useDynamicPatterns,
		scaffoldSCSS,
		scaffoldJS,
		wordPressVersion,
		slug,
		functionPrefix,
	};

	const themeDirectory = `src/themes/${slug}`;

	copyFile('generators/themes/block', themeDirectory, 'screenshot.png');
	writeToFile(themeDirectory, 'readme.txt', templates.getReadme(templateParams));
	writeToFile(themeDirectory, 'style.css', templates.getStyleCSS(templateParams));
	writeToFile(themeDirectory, 'theme.json', templates.getThemeJSON(templateParams));

	if (scaffoldSCSS || scaffoldJS || useDynamicPatterns) {
		writeToFile(themeDirectory, 'functions.php', templates.getFunctionsPHP(templateParams));
	}

	const templatesDirectory = `${themeDirectory}/templates`;
	writeToFile(templatesDirectory, 'index.html', templates.getIndexTemplate());

	if (pageTemplates.includes('404')) {
		if (useDynamicPatterns) {
			writeToFile(templatesDirectory, '404.html', templates.get404Template(templateParams));
		} else {
			writeToFile(templatesDirectory, '404.html', templates.get404TemplateWithoutPatterns());
		}
	}

	if (pageTemplates.includes('archive')) {
		writeToFile(templatesDirectory, 'archive.html', templates.getArchiveTemplate());
	}

	if (pageTemplates.includes('home')) {
		writeToFile(templatesDirectory, 'home.html', templates.getHomeTemplate());
	}

	if (pageTemplates.includes('page')) {
		writeToFile(templatesDirectory, 'page.html', templates.getPageTemplate(templateParams));
	}

	if (pageTemplates.includes('search')) {
		if (useDynamicPatterns) {
			writeToFile(templatesDirectory, 'search.html', templates.getSearchTemplate(templateParams));
		} else {
			writeToFile(templatesDirectory, 'search.html', templates.getSearchTemplateWithoutPatterns());
		}
	}

	if (pageTemplates.includes('single')) {
		writeToFile(templatesDirectory, 'single.html', templates.getSingleTemplate(templateParams));
	}

	const templatePartsDirectory = `${themeDirectory}/parts`;
	if (supportComments) {
		writeToFile(templatePartsDirectory, 'comments.html', templates.getCommentsPart());
	}

	if (useDynamicPatterns) {
		writeToFile(templatePartsDirectory, 'footer.html', templates.getFooterPart(templateParams));
	} else {
		writeToFile(
			templatePartsDirectory,
			'footer.html',
			templates.getFooterPartWithoutPatterns(templateParams)
		);
	}

	writeToFile(templatePartsDirectory, 'header.html', templates.getHeaderPart());

	if (supportPostMeta) {
		writeToFile(templatePartsDirectory, 'post-meta.html', templates.getPostMetaPart());
	}

	writeToFile(templatePartsDirectory, 'query-default.html', templates.getQueryDefaultPart());

	if (useDynamicPatterns) {
		const patternsDirectory = `${themeDirectory}/patterns`;
		writeToFile(patternsDirectory, '404.php', templates.get404Pattern(templateParams));
		writeToFile(patternsDirectory, 'footer.php', templates.getFooterPattern(templateParams));
		writeToFile(patternsDirectory, 'no-results.php', templates.getNoResultsPattern(templateParams));

		const viewsDirectory = `${themeDirectory}/views/patterns`;
		writeToFile(viewsDirectory, '404.twig', templates.get404TwigTemplate());
		writeToFile(viewsDirectory, 'footer.twig', templates.getFooterTwigTemplate());
		writeToFile(viewsDirectory, 'no-results.twig', templates.getNoResultsTwigTemplate());
	}

	if (scaffoldSCSS) {
		scaffoldSCSSStructure(`src/scss/themes/${slug}`, slug);
	}

	if (scaffoldJS) {
		writeToFile(`src/js/themes/${slug}`, `${slug}-theme.js`, getJSEntryPoint('theme'));
	}

	updateVolumeMapping(slug, 'theme');
};

generateBlockTheme();
