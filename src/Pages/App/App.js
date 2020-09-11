import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SkillsPage from "../SkillsPage/SkillsPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/skills" render={() => <SkillsPage />} />
        <Route path="/projects" render={() => <ProjectPage />} />
        <Route path="/contact" render={() => <ContactPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
