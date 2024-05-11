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
app.use(express.static("public"));

app.listen(port, (req, res) => {
  console.log(`App started running on port ${port}.`);
  console.log(process.env.API_KEY);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const response = await axios.get(process.env.API_BASE_URL, {
      params: {
        api_key: process.env.API_KEY,
        country: "US",
        year: "2020",
        day: "25",
      },
    });
    console.log("response");
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    log.error(error.message);
    res.status(500);
  }
  res.render("index.ejs");
});
