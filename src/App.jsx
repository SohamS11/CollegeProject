import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Home/Header";
import {
  AboutUs,
  ContactUs,
  Home,
  Search,
  Register,
  CollegeLists,
  Login,
  Newz,
  FetchNewz,
} from "./Routes/ExportRoutes";
import CollegeDetail from "./Routes/Collegedetails";
import Exam from "./Routes/Exam";
import Course from "./Routes/Course";
import { useThemeContext } from "./ContextApi/ThemeContext";
import Color from "./Theme/Color";
import ThreeDCardDemo from "../src/components/3d-Comp.tsx";

const Layout = ({ children }) => {
  const { darkMode } = useThemeContext();
  return (
    <div
      className={`${darkMode ? Color.dark.mainbg : Color.light.mainbg} h-full `}
    >
      <Header />
      <div className="py-6">{children}</div>
    </div>
  );
};

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/newz/:category" // Update the route to accept category parameter
          element={
            <Layout>
              <FetchNewz />
            </Layout>
          }
        />
        <Route
          path="/collegeList/:id"
          element={
            <Layout>
              <CollegeLists />
            </Layout>
          }
        />

        <Route path="/search" element={<Search />} />
        <Route
          path="*"
          element={
            <Layout>
              <h1>Not found</h1>
            </Layout>
          }
        />
        <Route
          path="/collegedetail/:id"
          element={
            <Layout>
              <CollegeDetail />
            </Layout>
          }
        />
        <Route
          path="/exam/:id"
          element={
            <Layout>
              <Exam />
            </Layout>
          }
        />
        <Route
          path="/course/:id"
          element={
            <Layout>
              <Course />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
