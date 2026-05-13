import { use } from "react";
import Product from "../Product.jsx/Product";
import "./Products.css";

const Products = ({ productsAllData }) => {
  const productsData = use(productsAllData);
  const products = productsData.meals;
  console.log(products);
  return (
    <div>
      <h1>Our Meals</h1>

      <div className="prodcutsCounter">
        {products.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
