import React, { useEffect, useState } from "react";
//component
import Header from "./component/Header/Header";
import MainContent from "./component/MainContent/MainContent";
import product_data from "./component/Data/product_data";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setData(product_data);
  }, []);

  function getHandleChange(e) {
    let keyword = e.target.value;
    setSearch(keyword);
    let newfiltered = data.filter((item) => {
      return item.product_name.indexOf(keyword) != -1;
    });
    setFiltered(newfiltered);
  }

  return (
    <div className="App">
      <Header handleChange={getHandleChange} />
      <MainContent data={filtered.length === 0 ? data : filtered} />
    </div>
  );
}

export default App;
