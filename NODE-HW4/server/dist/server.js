"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = require("fs");
const loggingMiddlewate_js_1 = require("./loggingMiddlewate.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || "9595", 10);
const hostname = process.env.HOST || "localhost";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(loggingMiddlewate_js_1.loggingMiddleware);
async function loadNewsArticles() {
    try {
        const data = await fs_1.promises.readFile("./database/database.json", "utf8");
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
}
let newsArticles = [];
async function initializeNewsArticles() {
    newsArticles = await loadNewsArticles();
}
initializeNewsArticles();
function saveNewsArticles() {
    try {
        fs_1.promises.writeFile("./database/database.json", JSON.stringify(newsArticles), "utf8");
    }
    catch (error) {
        console.error("Error saving news articles:", error);
    }
}
app.get(["/api/newsposts", "/api", "/", ""], async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const size = parseInt(req.query.size, 10) || 10;
    const start = (page - 1) * size;
    const end = start + size;
    const paginatedNewsArticles = newsArticles.slice(start, end);
    res.status(200).json(paginatedNewsArticles);
});
app.get("/api/newsposts/:id", (req, res) => {
    const { id } = req.params;
    const newsArticle = newsArticles.find((article) => article.id === parseInt(id));
    if (newsArticle) {
        res.status(200).json(newsArticle);
    }
    else {
        res.status(404).json({ error: "Article not found" });
    }
});
app.post("/api/newsposts", (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        res.status(400).json({ error: "Title and text are required" });
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
    const newsArticleIndex = newsArticles.findIndex((article) => article.id === parseInt(id));
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
    const newsArticleIndex = newsArticles.findIndex((article) => article.id === parseInt(id));
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
