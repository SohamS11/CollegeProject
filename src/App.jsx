import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Department from "./routes/Department";
import RoadmapDropdown from "./routes/RoadmapDropdown";
import Search from "./component/Search";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/department"
          element={
            <Layout>
              <Department />
            </Layout>
          }
        />
        <Route
          path="/allroadmap/*"
          element={
            <Layout>
              <RoadmapDropdown />
            </Layout>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="*"
          element={
            <Layout>
              <h1>not found bro </h1>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
