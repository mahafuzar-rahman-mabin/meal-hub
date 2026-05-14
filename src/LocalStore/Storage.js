const DataAddToweb = (allData) => {
  const storedCart = localStorage.getItem("cart");

  let cart = [];

  // old data
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  // loop
  allData.forEach((element) => {
    // duplicate check
    const exists = cart.includes(element.idMeal);

    if (!exists) {
      cart.push(element.idMeal);
    }
  });

  // save
  localStorage.setItem("cart", JSON.stringify(cart));
};

const showDatalsToLive = () => {
  localStorage.getItem("cart");
};

export { DataAddToweb, showDatalsToLive };
