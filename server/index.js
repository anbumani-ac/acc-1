const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//express app
const app = express();

mongoose
  .connect(
    "mongodb+srv://subash:1234@cluster0-dkqjr.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Boom! mongoose"));

app.use(bodyParser.json());

//routes
app.use("/api", require("./routes/api"));

const port = process.env.port || 9000;
app.listen(port, () => console.log(`Example listening on port ${port}!`));
