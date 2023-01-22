import "../../App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePages from "../../pages/HomePages";
import CategoriesPage from "../../pages/CategoriesPages";
import ProductsPages from "../../pages/ProductsPages";
import ProductPages from "../../pages/ProductPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePages />} />
          <Route path="category" element={<CategoriesPage />} />
          <Route path="category/:categororys" element={<ProductsPages />} />
          <Route path="products/:id" element={<ProductPages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
