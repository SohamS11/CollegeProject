import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Home/Header";
import {
  AboutUs,
  ContactUs,
  Home,
  Search,
  Department,
  RoadmapDropdown,
  CollegeList,
} from "./Routes/ExportRoutes";
import CollegeDetail from "./Routes/Collegedetails";
import Exam from "./Routes/Exam";
import Courses from "./Routes/Courses";

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
          path="/courses/:id"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
