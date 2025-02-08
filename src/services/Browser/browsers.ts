export type SupportedBrowserId = "google";

export type SupportedBrowsers = {
	[key in SupportedBrowserId]: {
		label: string;
		platforms: {
			[key in NodeJS.Platform]?: string;
		};
	};
};

/**
 * @description Currently we only support chromium-based browsers because of a
 * puppeteer limitation. And other alternatives such as `playwright` are not
 * able to use extensions, so they don't work either.
 *
 * Feel free to add other platforms, you just need to check what's the
 * keyword to open the browser.
 */
export const SUPPORTED_BROWSERS: SupportedBrowsers = {
	google: {
		label: "Google Chrome",
		platforms: {
			linux: "google-chrome",
			darwin: "Google Chrome",
			win32: "chrome",
		},
	},
};
