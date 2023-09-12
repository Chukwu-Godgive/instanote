import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WriteNote from "./pages/WriteNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="./home" element={<Home />} />
        <Route exact path="./login" element={<Login />} />
        <Route exact path="./signup" element={<Signup />} />
        <Route exact path="./dashboard" element={<Dashboard />} />
        <Route exact path="./writenote" element={<WriteNote />} />

        {/* After building login page then we can import
            and uncomment below code ⬇
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
