export type SupportedBrowserId = "google" | "brave" | "edge" | "opera";

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
	brave: {
		label: "Brave",
		platforms: {
			linux: "brave-browser",
			darwin: "Brave Browser",
			win32: "brave",
		},
	},
	edge: {
		label: "Microsoft Edge",
		platforms: {
			linux: "microsoft-edge",
			darwin: "Microsoft Edge",
			win32: "msedge",
		},
	},
	opera: {
		label: "Opera",
		platforms: {
			linux: "opera",
			darwin: "Opera",
			win32: "opera",
		},
	},
};
