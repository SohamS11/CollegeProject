import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Home/Header";
import {
  AboutUs,
  ContactUs,
  Home,
  Search,
  Register,
  RoadmapDropdown,
  CollegeLists,
  Login,
} from "./Routes/ExportRoutes";
import CollegeDetail from "./Routes/Collegedetails";
import Exam from "./Routes/Exam";
import Course from "./Routes/Course";
import { useThemeContext } from "./ContextApi/ThemeContext";
import Color from "./Theme/Color";
// import Signup from "./routes/Signup";

const Layout = ({ children }) => {
  const { darkMode } = useThemeContext();
  return (
    <div className={darkMode ? Color.dark.mainbg : Color.light.mainbg}>
      <Header />
      {children}
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
          path="collegeList/:id"
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
              <div className="flex w-full h-screen justify-center items-center">
               <h1 className="text-4xl font-bold "> Page not Found Baby  </h1>
              </div>
             
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
