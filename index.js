import express from "express";
import axios from "axios";
const port = 3000;
const app = express();
const API_URL = "https://api.adviceslip.com/advice";
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { adv: result.data.slip.advice });
    console.log(result.data.slip.advice);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
