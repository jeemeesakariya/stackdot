const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { dbConnect } = require("./config/db.js")
const studentRoutes=require("./routers/studentRouter.js")

dbConnect(process.env.url)

const app = express();
const PORT = process.env.PORT 

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("hello from server");
})

app.use("/student",studentRoutes)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})