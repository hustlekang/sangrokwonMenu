import "./App.css";
import { useState, Suspense } from "react";
import Menu from "./components/Menu";
import DateSelector from "./components/DateSelector";
import { getMenu, fetchInitMenu } from "./api/fetchData";

const initMenu = fetchInitMenu();

function App() {
  const [menu, setMenu] = useState(initMenu.read());
  const [dateString, setDateString] = useState(
    new Date()
      .toLocaleDateString()
      .match(/[0-9]+/g)
      .map((date) => (date.length === 1 ? 0 + date : date))
      .join("-")
  );
  const today = new Date(dateString);
  const differ = 13 - today.getDay();
  const maxDateString = new Date(today.setDate(today.getDate() + differ))
    .toLocaleDateString()
    .match(/[0-9]+/g)
    .map((date) => (date.length === 1 ? 0 + date : date))
    .join("-");

  const handleDateChange = async (event) => {
    const newDate = new Date(event.target.value);
    const menu = await getMenu(newDate.getTime() / 1000 - 9 * 60 * 60);
    setMenu(menu);
  };

  return (
    <div className="App">
      <div className="container">
        <Suspense fallback={<div>loading...</div>}>
          <Menu menu={menu} />
        </Suspense>
      </div>
      <DateSelector
        maxDateString={maxDateString}
        dateString={dateString}
        handleDateChange={handleDateChange}
      />
    </div>
  );
}

export default App;
