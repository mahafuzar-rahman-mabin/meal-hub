import { Suspense } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
const AllProductsData = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
  );
  return res.json();
};

const productsAllData = AllProductsData();

function App() {
  return (
    <>
      <Suspense fallback={<h2> All meal Loading.......</h2>}>
        <Products productsAllData={productsAllData}></Products>
      </Suspense>
    </>
  );
}

export default App;
