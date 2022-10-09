import React from "react";
import "./style.pcss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "pages/Landing";
import Claim from "pages/Claim";
import Create from "pages/Create";
import Layout from "modules/Layout";

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer position="top-center" />
    <Routes>
      <Route index element={<Landing />} />

      <Route path="/" element={<Layout />}>
        <Route path="create" element={<Create />} />
        <Route path="claim" element={<Claim />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
