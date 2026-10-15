const express = require("express");
const app = express();

// Environment variables with default values
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello World! preview";

app.get("/", (req, res) => {
    res.send(MESSAGE);
});

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
