# Express News Articles

This code is a Node.js application built using the Express.js framework. It serves as a simple server for managing news articles with CRUD (Create, Read, Update, Delete) operations and basic logging. Key features include: <br/>

Express Server Setup: The code sets up an Express server, listens on a specified port (default: 9595), and provides a hostname (default: localhost). <br/>
Middleware: It uses middleware functions, such as CORS handling and a custom logging middleware that logs incoming requests and their details. <br/>

NewsArticle Interface: Defines a TypeScript interface NewsArticle for representing news articles with properties like id, title, and text. <br/>
File-Based Database: News articles are stored in a JSON file (./database/database.json) and are loaded into memory when the server starts. Changes to articles are also saved back to this file. <br/>

API Endpoints: <br/>
GET /api/newsposts (and other variations) to retrieve a paginated list of news articles. <br/>
GET /api/newsposts/:id to retrieve a single news article by its ID. <br/>
POST /api/newsposts to create a new news article. <br/>
PUT /api/newsposts/:id to update an existing news article by its ID. <br/>
DELETE /api/newsposts/:id to delete a news article by its ID. <br/>

Error Handling: Proper error handling is implemented, including responding with 404 status codes for missing articles and 400 status codes for validation errors. <br/>
Logging Middleware: A separate logging middleware logs incoming requests and their details, as well as response statuses. <br/>
Initialization: The server initializes by loading news articles from the JSON file and listens for incoming requests once initialization is complete. <br/>
