require("dotenv").config(); 

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mysql = require("mysql2")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


const hbs = exphbs.create({ extname: "hbs" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");






  const routes= require("./server/routes/students")
  app.use("/",routes)


const Port= process.env .Port || 4000
app.listen(Port, () => {
  console.log("Server is running ongit add app.js package.json");
});
