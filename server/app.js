const express = require("express");
const cors = require("cors");
const { getMenu } = require("./api/fetchData");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.static("build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./build/index.html");
});

app.get("/api/menu", async (req, res) => {
  const sday = req.query.sday;
  const menu = await getMenu(sday);
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`server run | ${PORT}`);
});
