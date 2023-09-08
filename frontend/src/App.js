import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

        {/* After building login and signup page then we can import
            and uncomment below code ⬇
        */}

        {/* <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
