import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Assessment from "../pages/Assessment";
import HowItWorksPage from "../pages/HowItWorksPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
