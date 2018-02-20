exports.config = {
	getPageTimeout: 100000,
	baseUrl: 'http://localhost:3000',

	capabilities: {
		browserName: 'chrome',
		loggingPrefs: {
			driver: 'SEVERE',
			server: 'SEVERE',
			browser: 'SEVERE'
		}
	},
	specs: [ 'test/spec/**/*.spec.js' ],
};
