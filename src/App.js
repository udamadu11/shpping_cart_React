import "./App.css";
//component
import Header from "./component/Header/Header";
import MainContent from "./component/MainContent/MainContent";
import product_data from "./component/Data/product_data";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent data={product_data} />
    </div>
  );
}

export default App;
