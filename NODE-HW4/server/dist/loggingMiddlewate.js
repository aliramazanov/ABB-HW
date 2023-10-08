"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingMiddleware = void 0;
function loggingMiddleware(req, res, next) {
    const { method, url, query, body } = req;
    const logMessage = `${method} ${url} query:${JSON.stringify(query)} body:${JSON.stringify(body)}`;
    console.log(logMessage);
    res.on("finish", () => {
        console.log(`Response Status: ${res.statusCode}`);
    });
    next();
}
exports.loggingMiddleware = loggingMiddleware;
