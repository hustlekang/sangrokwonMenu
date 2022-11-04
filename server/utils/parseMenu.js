const { splitPriceAndFood } = require("./splitPriceAndFood");
const { bindFoodInfo } = require("./bindFoodInfo");

const { JSDOM } = require("jsdom");
// const querySelector = require("query-selector");
const parseMenu = (html) => {
  // const domParser = new DOMParser();
  const doc = new JSDOM(html).window.document;
  // const doc = domParser.parseFromString(html, "text/html"); // string 타입의 html을 DOM으로 만듬

  // DOM 에서 메뉴들을 파싱
  // 집밥 점심 메뉴
  const lunch1 = splitPriceAndFood(
    bindFoodInfo(
      doc
        .querySelector(
          "li:nth-of-type(3) table tr:nth-of-type(2) td:nth-of-type(2)"
        )
        .textContent.split("\n")
    )
  );
  // 한그릇 점심 메뉴
  const lunch2 = splitPriceAndFood(
    bindFoodInfo(
      doc
        .querySelector(
          "li:nth-of-type(3) table tr:nth-of-type(3) td:nth-of-type(2)"
        )
        .textContent.split("\n")
    )
  );
  // 집밥 저녁 메뉴
  const dinner = splitPriceAndFood(
    bindFoodInfo(
      doc
        .querySelector(
          "li:nth-of-type(3) table tr:nth-of-type(2) td:nth-of-type(3)"
        )
        .textContent.split("\n")
    )
  );

  const menu = {
    lunch1: lunch1,
    lunch2: lunch2,
    dinner: dinner,
  };

  return menu;
};

module.exports = { parseMenu };
