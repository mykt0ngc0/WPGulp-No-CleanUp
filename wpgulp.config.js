/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

const target_folder = '../your-theme-plugin-folder'; // your theme/plugin folder

module.exports = {
	// Project options.
	projectURL: 'myk.local', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
	productURL: target_folder + '/', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: false,
	injectChanges: true,

	// Style options.
	styleSRC: './assets/sass/style.scss', // Path to main .scss file.
	styleDestination: target_folder + '/dist/', // Path to place the compiled CSS file. Default set to root folder.
	styleMainFile: 'main',
	outputStyle: 'compressed', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	jsVendorSRC: './assets/js/lib/*.js', // Path to JS vendor folder.
	jsVendorDestination: './assets/js/compiled/', // Path to place the compiled JS vendors file.
	jsVendorFile: 'lib', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsCustomSRC: './assets/js/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './assets/js/compiled/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'main', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// bundleJS options
	jsBundleSRC: './assets/js/compiled/*.js',
	jsBundleDestination: target_folder + '/dist/',
	jsBundleFile: 'bundle',

	// Images options.
	imgSRC: './assets/img/*', // Source folder of images which should be optimized and watched. You can also specify types e.g. raw/**.{png,jpg,gif} in the glob.
	imgDST: target_folder + '/dist/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Watch files paths.
	watchStyles: './assets/sass/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	watchJsVendor: './assets/js/lib/*.js', // Path to all vendor JS files.
	watchJsCustom: './assets/js/*.js', // Path to all custom JS files.
	watchJsBundle: './assets/js/compiled/*.js',
	watchPhp: target_folder + '/**/*.php', // Path to all PHP files.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};
