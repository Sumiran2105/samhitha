import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Assessment from "../pages/Assessment";
import Contact from "../pages/Contact";
import HowItWorksPage from "../pages/HowItWorksPage";
import AdminDashboard from "../pages/AdminDashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin — full screen, no site nav/footer */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Public site */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
