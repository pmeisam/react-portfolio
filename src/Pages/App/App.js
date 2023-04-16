// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import HomePage from "../HomePage/HomePage";
// import SkillsPage from "../SkillsPage/SkillsPage";
// import ProjectPage from "../ProjectPage/ProjectPage";
// import ContactPage from "../ContactPage/ContactPage";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import ProfilePage from "../ProfilePage/ProfilePage";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" render={() => <HomePage />} />
//         <Route path="/experiences" render={() => <SkillsPage />} />
//         <Route path="/projects" render={() => <ProjectPage />} />
//         <Route path="/contact" render={() => <ContactPage />} />
//         <Route path="/profile" render={() => <ProfilePage />} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
const HomePage = lazy(() => import("../HomePage/HomePage"));
const SkillsPage = lazy(() => import("../SkillsPage/SkillsPage"));
const ProjectPage = lazy(() => import("../ProjectPage/ProjectPage"));
const ContactPage = lazy(() => import("../ContactPage/ContactPage"));
const ProfilePage = lazy(() => import("../ProfilePage/ProfilePage"));

function App() {
  const [showLoader, setShowLoader] = useState(true);

  setTimeout(() => {
    setShowLoader(false);
  }, 3000);

  return showLoader ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      {/* <Suspense fallback={<div style={{display: "flex", width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center', fontSize: '30px', color: 'white'}}>Loading...</div>}> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

// Deploying with SSL Certificate to AWS s3, using cloudfront, route 53, Certificate Management
// https://www.youtube.com/watch?v=lB4DTqMEumY&t=1261s&ab_channel=EsterlingAccime
// https://jsfiddle.net/9y5ax0t6/
