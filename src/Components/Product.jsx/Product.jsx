import { useState } from "react";
import "./Prodcut.css";
const Product = ({ product, handelDatahook }) => {
  const [btnclick, setBtnclick] = useState(false);
  const hendelClick = () => {
    !btnclick && setBtnclick(true);
    handelDatahook(product);
  };
  return (
    <div className="prodcutsBox">
      <img className="proImg" src={product.strMealThumb} alt="" />
      <h2>{product.strMeal}</h2>
      <p>Category : {product.strCategory}</p>
      <p>Meal Country : {product.strCountry}</p>
      <button onClick={hendelClick} className="name-btn">
        Order
      </button>
    </div>
  );
};

export default Product;
