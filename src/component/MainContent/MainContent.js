import React from "react";
import Cards from "../Card/Cards";
import Styles from "./main.module.css";
function MainContent({ data }) {
  const items = data.map((item) => (
    <Cards
      key={item.id}
      product_name={item.product_name}
      description={item.description}
      img={item.thumb}
    />
  ));
  return <div className={Styles.container}>{items}</div>;
}

export default MainContent;
