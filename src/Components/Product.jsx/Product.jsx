const Product = ({ product }) => {
  return (
    <div>
      <img src={product.strMealThumb} alt="" />
      <h2>Name: {product.strMeal}</h2>
    </div>
  );
};

export default Product;
