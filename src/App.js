import "./styles.css";
import Title from "./components/Title";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./components/data";
import Button from "./components/Button";
import { useState } from "react";

const categories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);

  const filterItemHandler = (category) => {
    if (category === "all") {
      setMenuItems(data);
    } else {
      setMenuItems(
        data.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  return (
    <>
      <Title />
      <Button />
      <Categories filterItem={filterItemHandler} categories={categories} />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
