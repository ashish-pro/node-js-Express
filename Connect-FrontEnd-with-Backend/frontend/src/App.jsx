import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>Helllo</h1>
      <h5>Number of Product: {products.length}</h5>
      <div className="d-flex flex-wrap mb-2 ">
      {products.map((product) => {
        return (
          <div className="mx-2" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: <span>&#8377;</span>
                  {product.price}
                </h6>
              </div>
            </div>
          </div>
        );
      })} </div>
    </>
  );
}

export default App;
