import type { Bookmarks, Bookmark } from "@/models/Bookmark";

export type GetBookmarksMethod = (searchParams?: {
	withPreviewImages?: boolean;
}) => Promise<Bookmarks[]>;

export type GetDefaultBookmarkMethod = (searchParams?: {
	withDetails?: boolean;
}) => Promise<Bookmark>;

export type GetBookmarkMethod = (
	id: string,
	searchParams?: {
		withDetails?: boolean;
	},
) => Promise<Bookmark>;
