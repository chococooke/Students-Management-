const express = require("express");
const sequelize = require("./config/connect.js");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () => console.log("Server is running on port 3000"));