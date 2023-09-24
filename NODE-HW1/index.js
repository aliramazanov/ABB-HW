import http from "http";

let requestCount = 0;

const newServer = http.createServer((req, res) => {
  requestCount++;

  res.writeHead(200, "OK", {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Request handled successfully",
      requestCount,
    })
  );

  console.log(
    `A New Request: URL: ${req.url}, Method: ${req.method}, User-Agent: ${req.headers["user-agent"]}`
  );
});

newServer.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
