import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import PreorderPage from "./pages/PreorderPage";
import Layout from "./components/Layout";

import MenuPage from "./pages/MenuPage";

import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import AboutPage from "./pages/AboutPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/preorder" element={<PreorderPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Optional but fine to keep */}
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
