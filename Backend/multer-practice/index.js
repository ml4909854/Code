const express = require("express");
const connectDB = require("./db");
const userRouter = require("./controller/user.controller");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());
app.use("/upload", express.static("upload")); // serve uploaded images

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("connected!");
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, async () => {
  await connectDB();
  console.log("server is running");
});
