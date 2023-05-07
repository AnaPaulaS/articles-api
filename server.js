require('dotenv').config()
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();

app.use(cors());

app.get("/everything", async (req, res) => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-04-07&sortBy=publishedAt&apiKey=${process.env.APIKEY}`
    );

    const data = [];

    response.data.articles.forEach((element) => {
      data.push({
        author: element.author,
        title: element.title,
        description: element.description,
      });
    });

    return res.json(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen("4567");
