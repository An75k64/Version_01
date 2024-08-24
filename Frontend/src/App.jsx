import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Jobs from "./pages/Jobs.jsx";
import PostResume from "./components/Jobs/PostResume.jsx";
import CurrentOpening from "./components/Jobs/Openings/Opening.jsx";
import Employer from "./pages/Employer.jsx";
import College from "./pages/College.jsx";
import CampusToCubicle from "./pages/CampusToCubicle.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
import CollegeForm from "./components/CampusToCubicle/CollegeForm.jsx";
import CompanyForm from "./components/CampusToCubicle/CompanyForm.jsx";
import Openingform from "./components/Jobs/Openings/Openingform.jsx";
import OnCampus from "./components/Service/OnCampus/OnCampus.jsx";
import OffCampus from "./components/Service/OffCampus/OffCampus.jsx";
import Seminar from "./components/Service/Seminar/Seminar.jsx";
import Counselling from "./components/Service/Counselling/Counselling.jsx";
import Workforce from "./components/Service/Workforce/Workforce.jsx";
import CareerCraft from "./components/Service/CareerCraft/CareerCraft.jsx";
import WhatsAppIcon from "./components/WhatsAppIcon.jsx";  // Import the WhatsAppIcon component

// Import Admin components
import Layout from "./Admin/AdminComponents/Layout.jsx";
import StudentPanel from "./Admin/AdminPages/StudentPanel.jsx";
import CollegePanel from "./Admin/AdminPages/CollegePanel.jsx";
import CompanyPanel from "./Admin/AdminPages/CompanyPanel.jsx";
import ContactPanel from "./Admin/AdminPages/ContactPanel.jsx";
 {/*
import Dashboard from "./Admin/AdminPages/Dashboard";
import Student from "./Admin/AdminPages/Student";
import CollegeAdmin from "./Admin/AdminPages/College";
import Company from "./Admin/AdminPages/Company";
import PostJob from "./Admin/AdminPages/PostJob";
import ContactSupport from "./Admin/AdminPages/ContactSupport"; */}

const NotFound = () => <div>Page Not Found</div>;

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <ScrollToTop />

        {/* General Header and Footer for non-admin pages */}
        <Routes>
          {/* Non-admin routes */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/oncampus" element={<OnCampus />} />
                  <Route path="/offcampus" element={<OffCampus />} />
                  <Route path="/seminar" element={<Seminar />} />
                  <Route path="/counselling" element={<Counselling />} />
                  <Route path="/careercraft" element={<CareerCraft />} />
                  <Route path="/workforce" element={<Workforce />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/jobs/post-resume" element={<PostResume />} />
                  <Route path="/jobs/current-opening" element={<CurrentOpening />} />
                   <Route path="/jobs/opening-form" element={<Openingform />} />
                  <Route path="/employer" element={<Employer />} />
                  <Route path="/college" element={<College />} />
                  <Route path="/campus-to-cubicle" element={<CampusToCubicle />} />
                  <Route path="/college-form" element={<CollegeForm />} />
                  <Route path="/company-form" element={<CompanyForm />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                {/* WhatsApp Icon positioned in the bottom right corner */}
                <Box position="fixed" bottom="4" right="4" zIndex="1000">
                  <WhatsAppIcon />
                </Box>
              </>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin/*"
            element={
              <Layout>
                <Routes>
                  <Route path="student" element={<StudentPanel />} />
                  <Route path="college" element={<CollegePanel />} />
                  <Route path="company" element={<CompanyPanel />} />
                  <Route path="contact-support" element={<ContactPanel />} /> 
                {/*  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="student" element={<Student />} />
                  <Route path="college" element={<CollegeAdmin />} />
                  <Route path="company" element={<Company />} />
                  <Route path="post-job" element={<PostJob />} />
                  <Route path="contact-support" element={<ContactSupport />} /> */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
