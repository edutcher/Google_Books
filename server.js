const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/snapthat", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(process.env.PORT || 3001, () => console.log("Now listening"));
