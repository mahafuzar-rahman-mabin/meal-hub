import { use } from "react";
import Product from "../Product.jsx/Product";

const Products = ({ productsAllData }) => {
  const productsData = use(productsAllData);
  const products = productsData.meals;
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.idMeal} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
