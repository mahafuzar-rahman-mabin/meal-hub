import { use, useState } from "react";
import Product from "../Product.jsx/Product";
import "./Products.css";
import Cart from "./Cart";

const Products = ({ productsAllData }) => {
  const productsData = use(productsAllData);
  const products = productsData.meals;
  const [addData, setAddData] = useState([]);
  const handelDatahook = (product) => {
    const exqitData = addData.find((data) => data.idMeal === product.idMeal);
    if (!exqitData) {
      const newData = [...addData, product];
      setAddData(newData);
    }
  };

  //   console.log(addData);

  return (
    <div>
      <h1>Our Meals</h1>
      <h1>Order Meals : {addData.length}</h1>
      <div className="main-box">
        <div className="prodcutsCounter">
          {products.map((product) => (
            <Product
              key={product.idMeal}
              handelDatahook={handelDatahook}
              product={product}></Product>
          ))}
        </div>
        <div className="cartBox">
          <h2>place order</h2>
          <div className="all-cart">
            {addData.map((cart) => (
              <Cart key={cart.idMeal} cart={cart}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
