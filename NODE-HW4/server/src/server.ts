import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { promises as fsPromises } from "fs";
import { loggingMiddleware } from "./loggingMiddlewate.js";

dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "9595", 10);
const hostname: string = process.env.HOST || "localhost";

app.use(express.json());
app.use(cors());
app.use(loggingMiddleware);

interface NewsArticle {
  id: number;
  title: string;
  text: string;
}

async function loadNewsArticles(): Promise<NewsArticle[]> {
  try {
    const data = await fsPromises.readFile("./database/database.json", "utf8");
    return JSON.parse(data) as NewsArticle[];
  } catch (error) {
    return [];
  }
}

let newsArticles: NewsArticle[] = [];

async function initializeNewsArticles() {
  newsArticles = await loadNewsArticles();
}

initializeNewsArticles();

function saveNewsArticles() {
  try {
    fsPromises.writeFile(
      "./database/database.json",
      JSON.stringify(newsArticles),
      "utf8"
    );
  } catch (error) {
    console.error("Error saving news articles:", error);
  }
}

app.get(["/api/newsposts", "/api", "/", ""], async (req, res) => {
  const page: number = parseInt(req.query.page as string, 10) || 1;
  const size: number = parseInt(req.query.size as string, 10) || 10;

  const start = (page - 1) * size;
  const end = start + size;

  const paginatedNewsArticles = newsArticles.slice(start, end);

  res.status(200).json(paginatedNewsArticles);
});

app.get("/api/newsposts/:id", (req, res) => {
  const { id } = req.params;
  const newsArticle = newsArticles.find(
    (article) => article.id === parseInt(id)
  );

  if (newsArticle) {
    res.status(200).json(newsArticle);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.post("/api/newsposts", (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    res.status(400).json({
      error:
        "Title and Text are required, ID should not be added and will be provided by the server itself",
    });
    return;
  }

  const maxId = newsArticles.reduce((max, article) => {
    return article.id > max ? article.id : max;
  }, 0);

  const newId = maxId + 1;

  const newArticle = {
    id: newId,
    title,
    text,
  };

  newsArticles.push(newArticle);

  saveNewsArticles();

  res.status(201).json(newArticle);
});

app.put("/api/newsposts/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const newsArticleIndex = newsArticles.findIndex(
    (article) => article.id === parseInt(id)
  );

  if (newsArticleIndex === -1) {
    res.status(404).json({ error: "Article not found" });
    return;
  }

  newsArticles[newsArticleIndex].title = title;
  saveNewsArticles();

  res.status(200).json(newsArticles[newsArticleIndex]);
});

app.delete("/api/newsposts/:id", (req, res) => {
  const { id } = req.params;
  const newsArticleIndex = newsArticles.findIndex(
    (article) => article.id === parseInt(id)
  );

  if (newsArticleIndex === -1) {
    res.status(404).json({ error: "Article not found" });
    return;
  }

  newsArticles.splice(newsArticleIndex, 1);
  saveNewsArticles();

  res.status(200).json({ message: "News article deleted successfully" });
});

initializeNewsArticles().then(() => {
  app.listen(port, hostname, () => {
    console.log(`Server is up & running on http://${hostname}:${port}`);
  });
});
