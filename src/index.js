import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import UserContext from "./context/UserContext.js";
import ProductContext from "./context/ProductContext.js";
import Signin from "./components/signin";
import Signup from "./components/signup";
import ProductsPage from "./components/products";
import ProductPage from "./components/product";
import Checkout from "./components/checkout";
import Success from "./components/success";
import Cart from "./components/cart";



function App() {
  const [userData, setUserData] = useState({ cart: [] });
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Navigate replace to="/products" />} />
              <Route path="/signin" element={<Signin userData={userData} setUserData={setUserData} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<ProductsPage setUserData={setUserData} userData={userData} products={products} setProducts={setProducts} />} />
              <Route path="/cart" element={<Cart setUserData={setUserData} userData={userData} products={products} />} />
              <Route path="/product/:id" element={<ProductPage products={products} setProducts={setProducts} />} />
              <Route path="/checkout" element={<Checkout setUserData={setUserData} userData={userData} products={products} setProducts={setProducts} />} />
              <Route path="/success" element={<Success setUserData={setUserData} userData={userData} products={products} setProducts={setProducts} />} />
            </Routes>
          </BrowserRouter>
        </ProductContext.Provider>
      </UserContext.Provider>
    </>
  )
}

/**/

ReactDOM.render(<App />, document.querySelector(".root"));