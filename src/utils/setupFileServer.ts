import http from "node:http";
import fs from "node:fs";

export default function setupFileServer(filePath: string) {
	return http.createServer((req, res) => {
		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end("Error loading the file");
				return;
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	});
}
