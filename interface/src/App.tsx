import React from "react";
import "./style.pcss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "pages/Landing";
import Claim from "pages/Claim";

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer position="top-center" />
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
