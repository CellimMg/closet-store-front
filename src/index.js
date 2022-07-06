import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Signin from "./components/signin";
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin setUserData={setUserData}/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));