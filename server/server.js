const express = require('express');
const connectDB = require('./db');

const resultRouter = require('./routes/result')

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello irwin!'));

app.use('/ping', function (req, res) {
    return res.send('pong');
   });

app.use("/api", resultRouter);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));