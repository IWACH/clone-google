const express = require("express");
const connectDB = require("./db");
const path = require("path");

const resultRouter = require("./routes/result");

const app = express();

// Connect Database
connectDB();

app.use("/api", resultRouter);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../build/index.html")
    );
  });

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
