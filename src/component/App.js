import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//component
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import product_data from "./Data/product_data";
import { addProduct } from "../Store/Actions/ProductAction";

function App(props) {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState([]);

  dispatch(addProduct(product_data));

  const products = useSelector((state) => state.products.products);

  function getHandleChange(e) {
    let keyword = e.target.value;
    let newfiltered = products.filter((item) => {
      return item.product_name.indexOf(keyword) != -1;
    });
    setFiltered(newfiltered);
  }

  return (
    <div>
      <Header handleChange={getHandleChange} />
      <MainContent data={filtered.length === 0 ? products : filtered} />
    </div>
  );
}

export default App;
