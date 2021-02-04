import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./SkillsPage.scss";

const SkillsPage = () => {
  useEffect(() => {
    document.title = "Meisam Poorzand | Skills";
    window.scrollTo(0, 0)
  });
  return (
    <React.Fragment>
      <Fade top>
        <div className="skills_parent">
          <div className="skill_item">
            <i className="devicon-nodejs-plain colored skillSize"></i>
            <span className="skillSearch">nodejs</span>
          </div>
          <div className="skill_item">
            <i className="devicon-express-original skillSize"></i>
            <span className="skillSearch">express</span>
          </div>
          <div className="skill_item">
            <i className="devicon-mongodb-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">MongoDB</span>
          </div>
          <div className="skill_item">
            <i className="devicon-angularjs-plain colored skillSize"></i>
            <span className="skillSearch">Angular</span>
          </div>
          <div className="skill_item">
            <i className="devicon-react-original-wordmark colored skillSize"></i>
            <span className="skillSearch">React</span>
          </div>
          <div className="skill_item">
            <i class="devicon-vuejs-plain colored skillSize"></i>
            <span className="skillSearch">Vue</span>
          </div>
          <div className="skill_item">
            <i className="devicon-python-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">Python</span>
          </div>
          <div className="skill_item">
            <i className="devicon-django-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">Django</span>
          </div>
          <div className="skill_item">
            <i className="devicon-java-plain-wordmark colored skillSizeplain"></i>
            <span className="skillSearch">java</span>
          </div>
          <div className="skill_item">
            <i className="devicon-postgresql-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">PostgreSQL</span>
          </div>
          <div className="skill_item">
            <i className="devicon-mysql-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">mysql</span>
          </div>
          <div className="skill_item">
            <i className="devicon-typescript-plain colored skillSize"></i>
            <span className="skillSearch">Typescript</span>
          </div>
          <div className="skill_item">
            <i className="devicon-javascript-plain colored skillSize"></i>
            <span className="skillSearch">JavaScript</span>
          </div>
          <div className="skill_item">
            <i className="devicon-jquery-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">jquery</span>
          </div>
          <div className="skill_item">
            <i className="devicon-c-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">C</span>
          </div>
          <div className="skill_item">
            <i className="devicon-cplusplus-plain colored skillSize"></i>
            <span className="skillSearch">Cplusplus</span>
          </div>
          <div className="skill_item">
            <i className="devicon-github-plain-wordmark skillSize"></i>
            <span className="skillSearch">git</span>
          </div>
          <div className="skill_item">
            <i className="devicon-html5-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">HTML5</span>
          </div>
          <div className="skill_item">
            <i className="devicon-css3-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">CSS</span>
          </div>

          <div className="skill_item">
            <i className="devicon-sass-original colored skillSize"></i>
            <span className="skillSearch">sass scss</span>
          </div>
          <div className="skill_item">
            <i className="devicon-wordpress-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">wordpress</span>
          </div>
          <div className="skill_item">
            <i className="devicon-amazonwebservices-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">Amazon Web Service</span>
          </div>
          <div className="skill_item">
            <i className="devicon-bootstrap-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">Bootstrap</span>
          </div>
          <div className="skill_item">
            <i className="devicon-git-plain colored skillSize"></i>
            <span className="skillSearch">github</span>
            <span className="skillSearch">git</span>
          </div>
          <div className="skill_item">
            <i className="devicon-heroku-plain-wordmark colored skillSize"></i>
            <span className="skillSearch">heroku</span>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default SkillsPage;
