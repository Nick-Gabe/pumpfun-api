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
 * @description Currently we only support chromium-based browsers that are able
 * to open more than a window simultaneously. We plan to support more browsers
 * in the future.
 *
 * Also feel free to add other platforms, you just need to check what's the
 * keyword to open the browser.
 */
export const SUPPORTED_BROWSERS: SupportedBrowsers = {
	google: {
		label: "Google Chrome",
		platforms: {
			linux: "google-chrome",
			darwin: "Google Chrome",
		},
	},
};
