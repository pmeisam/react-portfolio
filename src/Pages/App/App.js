import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SkillsPage from "../SkillsPage/SkillsPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProfilePage from "../ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/experiences" render={() => <SkillsPage />} />
        <Route path="/projects" render={() => <ProjectPage />} />
        <Route path="/contact" render={() => <ContactPage />} />
        <Route path="/profile" render={() => <ProfilePage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


// Deploying with SSL Certificate to AWS s3, using cloudfront, route 53, Certificate Management
// https://www.youtube.com/watch?v=lB4DTqMEumY&t=1261s&ab_channel=EsterlingAccime
// https://jsfiddle.net/9y5ax0t6/