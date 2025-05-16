const express = require("express");
const sequelize = require("./config/connect.js");
const studentRouter = require("./routes/studentRoutes.js");

const app = express();
app.use(express.json());
app.use("/students", studentRouter);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () => console.log("Server is running on port 3000"));