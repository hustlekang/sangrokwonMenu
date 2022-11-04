import wrapPromise from "./wrapPromise";

const getMenu = async (sday) => {
  const url =
    "/api/menu?" +
    new URLSearchParams({
      sday: sday,
    });

  try {
    const res = await fetch(url);
    const menu = res.json();
    return menu;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchInitMenu = () => {
  const yymmdd = new Date()
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");

  const sday = new Date(yymmdd).getTime() / 1000 - 32400;
  const url =
    "/api/menu?" +
    new URLSearchParams({
      sday: sday,
    });
  const promise = fetch(url).then((res) => res.json());

  return wrapPromise(promise);
};

export { getMenu, fetchInitMenu };
