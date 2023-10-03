import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
import { config } from "dotenv";
import cors from "cors";

config();

const hostname: string = process.env.HOST || "localhost";
const port: number = parseInt(process.env.PORT || "9595");

const newsArticles = JSON.parse(readFileSync("./database.json", "utf8"));

interface NewsArticle {
  id: number;
  title: string;
  text: string;
}

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    const url = req.url || "";
    const urlPageParam = url.includes("page=")
      ? url.split("page=")[1].split("&")[0]
      : "1";
    const urlSizeParam = url.includes("size=")
      ? url.split("size=")[1].split("&")[0]
      : "10";

    const page: number = parseInt(urlPageParam);
    const size: number = parseInt(urlSizeParam);

    try {
      const start: number = (page - 1) * size;
      const end: number = start + size;
      res.writeHead(200, { "Content-Type": "application/json" });

      const paginatedNewsArticles: NewsArticle[] = newsArticles.slice(
        start,
        end
      );

      res.end(JSON.stringify(paginatedNewsArticles));
    } catch (error: any) {
      res.writeHead(500, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ error: error.toString() }));
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is up & running on http://${hostname}:${port}`);
});
