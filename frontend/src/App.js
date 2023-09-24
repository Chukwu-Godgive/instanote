import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WriteNote from "./pages/WriteNote";
import EditNote from "./pages/EditNote";
import Note from "./pages/Note";
import Protected from "./components/Protected";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      
      {/* protected */}
      <Route exact element={<Protected />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/note" element={<Dashboard />} />
        <Route exact path="/writenote" element={<WriteNote />} />
        <Route exact path="/editnote/:id" element={<EditNote />} />
        <Route exact path="/note/:id" element={<Note />} />
      </Route>
    </Routes>
  );
}

export default App;
