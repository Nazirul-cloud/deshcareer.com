import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./component/Layout/Layout";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/us" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
