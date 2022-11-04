const axios = require("axios");
const { parseMenu } = require("../utils/parseMenu");

const fetchHtml = async (sday) => {
  const query =
    "https://dgucoop.dongguk.edu/mobile/menu.html?code=5&sday=" + sday;
  try {
    const res = await axios.get(query);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getMenu = async (sday) => {
  const html = await fetchHtml(sday);
  const menu = parseMenu(html);
  return menu;
};

module.exports = { getMenu };
