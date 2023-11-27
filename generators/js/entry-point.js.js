export const getJSEntryPoint = (type = 'theme') => `// This is the JavaScript entry point for your ${type}.
// esbuild will treat any .js files in this folder as entry points,
// so any supporting JavaScript that gets imported into this file should
// live in a folder outside of the src/js/themes or src/js/plugins folders.`;
