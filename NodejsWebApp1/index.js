const express = require("express");
var path = require('path');
const app = express();
const data = require('./stops.json');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {jsonobj : JSON.stringify(data)}); // index refers to index.ejs
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});