import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setAllProducts(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <ProductList allProducts={allProducts} />
    </div>
  );
}

export default App;
