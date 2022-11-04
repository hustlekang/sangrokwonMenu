import Corner from "./Corner";

export default function Menu({ menu }) {
  return (
    <>
      <Corner corner={menu.lunch1}>lunch 집밥</Corner>
      <Corner corner={menu.lunch2}>lunch 한그릇</Corner>
      <Corner corner={menu.dinner}>dinner 집밥</Corner>
    </>
  );
}
