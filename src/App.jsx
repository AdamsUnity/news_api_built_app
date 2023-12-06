import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import MainLayOut from "./layouts/MainLayOut";
import Entertainment from "./pages/Entertainment";
import Tech from "./pages/Tech";
import Education from "./pages/Education";
import Sport from "./pages/Sport";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<Home />} />
        <Route path="/business" element={<Business />} />\
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/education" element={<Education />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/technology" element={<Tech />} />
      </Route>
    </Routes>
  );
};

export default App;
