const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const MY_VARIABLE = process.env.MY_VARIABLE || "not set";

app.get("/", (req, res) => {
    res.send(`Hello World! preview — MY_VARIABLE: ${MY_VARIABLE}`);
});

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
