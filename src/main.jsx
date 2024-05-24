import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Currency from "./components/Currency.jsx";
import History from "./components/History.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
