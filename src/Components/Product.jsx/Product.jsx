import "./Prodcut.css";
const Product = ({ product }) => {
  return (
    <div className="prodcutsBox">
      <img className="proImg" src={product.strMealThumb} alt="" />
      <h2>{product.strMeal}</h2>
      <p>Category : {product.strCategory}</p>
      <p>Meal Country : {product.strCountry}</p>
      <button className="name-btn">Order</button>
    </div>
  );
};

export default Product;
