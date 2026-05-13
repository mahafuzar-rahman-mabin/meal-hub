import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="main-section">
      <div className="cart-img-section">
        <img className="cart-img" src={cart.strMealThumb} alt={cart.strMeal} />
      </div>

      <div>
        <h3>{cart.strMeal}</h3>
        <p>Category: {cart.strCategory}</p>
        <p>Country: {cart.strArea}</p>
      </div>
    </div>
  );
};

export default Cart;
