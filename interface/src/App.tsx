import React from "react";
import "./style.pcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "pages/Landing";

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer position="top-center" />
    <Routes>
      <Route path="*" element={<Landing />} />
    </Routes>
  </BrowserRouter>
);

export default App;
