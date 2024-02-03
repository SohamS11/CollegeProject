import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Home/Header";

import {
  AboutUs,
  ContactUs,
  Home,
  Search,
  Department,
  RoadmapDropdown,
  CollegeList
} from "./Routes/ExportRoutes";

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
        <Route
          path="collegeList/:id"
          element={
            <Layout>
              <CollegeList />
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
