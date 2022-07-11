import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Signin from "./components/signin";
import Signup from "./components/signup";
import ProductsPage from "./components/products";
import UserContext from "./context/UserContext.js";
import ProductContext from "./context/ProductContext.js";
import ProductPage from "./components/product";

function App() {
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/signin" element={<Signin setUserData={setUserData} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<ProductsPage products={products} setProducts={setProducts} />} />
              <Route path="/product/:id" element={<ProductPage products={products} setProducts={setProducts} />} />
            </Routes>
          </BrowserRouter>
        </ProductContext.Provider>
      </UserContext.Provider>
    </>
  )
}

/**/

ReactDOM.render(<App />, document.querySelector(".root"));