const express = require("express");
const path = require("path");
const app = express();

const appRouting = require("./routers/app.route");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/helpers", express.static(path.join(__dirname, "helpers")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", appRouting);

app.listen(8080, () => {
	console.log("Application running in port : 8080");
});

module.exports = app;
