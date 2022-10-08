import React from "react";
import "./style.pcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer position="top-center" />
    <Routes>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
