import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

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

  return <div className="App"></div>;
}

export default App;
