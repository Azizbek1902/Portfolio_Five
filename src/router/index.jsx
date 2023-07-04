import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "../components/views/home/About";
import Profile from "../components/views/home/Container";
import What from "../components/views/home/CardCorousel";
import Contact from "../components/views/home/Contact";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what" element={<What />} />
        <Route path="/portfoloi" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
