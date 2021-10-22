const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");



const PORT = process.env.PORT || 3001

const app = express();
app.use(logger("dev"));
const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://jheckel:Pa$$word@cluster0.4ruu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//connect api routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/view-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});