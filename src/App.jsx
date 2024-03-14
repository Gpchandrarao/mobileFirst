import React from "react";
import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Home />} />
        <Route exact path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
