import path from "node:path";
import { rootDirname } from "..";
import fs from "node:fs";

// biome-ignore lint/suspicious/noExplicitAny: CacheValue is any by design
type CacheValue = any;

export class LocalCache {
	static folder: string;
	private fileName: string;
	private filePath: string;

	private checkPaths() {
		if (!fs.existsSync(LocalCache.folder)) {
			fs.mkdirSync(LocalCache.folder);
		}
		if (!fs.existsSync(path.join(LocalCache.folder, this.fileName))) {
			fs.writeFileSync(path.join(LocalCache.folder, this.fileName), "{}");
		}
	}

	constructor(fileName: `${string}.json`) {
		LocalCache.folder = path.join(rootDirname, "../.cache");
		this.fileName = fileName;
		this.filePath = path.join(LocalCache.folder, this.fileName);
		this.checkPaths();
	}

	set(key: string, value: CacheValue): void {
		this.checkPaths();

		const file = fs.readFileSync(this.filePath, "utf-8");
		const data = JSON.parse(file);
		data[key] = value;
		fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
	}

	get(key: string): CacheValue | undefined {
		this.checkPaths();

		const file = fs.readFileSync(this.filePath, "utf-8");
		const data = JSON.parse(file);
		return data[key];
	}

	delete(key: string): void {
		this.checkPaths();

		const file = fs.readFileSync(this.filePath, "utf-8");
		const data = JSON.parse(file);
		delete data[key];
		fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
	}
}
