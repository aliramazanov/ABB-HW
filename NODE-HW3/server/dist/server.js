"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs_1 = require("fs");
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
const hostname = process.env.HOST || "localhost";
const port = parseInt(process.env.PORT || "9595");
const newsArticles = JSON.parse((0, fs_1.readFileSync)("./database.json", "utf8"));
const server = http.createServer((req, res) => {
    (0, cors_1.default)()(req, res, () => {
        const url = req.url || "";
        const urlPageParam = url.includes("page=")
            ? url.split("page=")[1].split("&")[0]
            : "1";
        const urlSizeParam = url.includes("size=")
            ? url.split("size=")[1].split("&")[0]
            : "10";
        const page = parseInt(urlPageParam);
        const size = parseInt(urlSizeParam);
        try {
            const start = (page - 1) * size;
            const end = start + size;
            res.writeHead(200, { "Content-Type": "application/json" });
            const paginatedNewsArticles = newsArticles.slice(start, end);
            res.end(JSON.stringify(paginatedNewsArticles));
        }
        catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: error.toString() }));
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server is up & running on http://${hostname}:${port}`);
});
