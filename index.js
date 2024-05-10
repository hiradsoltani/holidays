import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import log from "loglevel";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
morgan;

app.listen(port, (req, res) => {
  console.log(`App started running on port ${port}.`);
  console.log(process.env.API_KEY);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});
