import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./SkillsPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsPage = () => {
  useEffect(() => {
    document.title = "Meisam Poorzand | Skills";
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div>
      {/* <Fade top> */}
      <div className="skills_parent">
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-nodejs-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Node.js</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-express-original"></i>
            </div>
            <div className="flip-card-back">
              <h3>EXPRESS</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-angularjs-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Angular</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>React</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-vuejs-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Vue.js</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-python-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Python</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-django-plain-wordmark"></i>
            </div>
            <div className="flip-card-back">
              <h3>Django</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-java-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-postgresql-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h4>PostgreSQL</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-mysql-plain-wordmark"></i>
            </div>
            <div className="flip-card-back">
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h4>TypeScript</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-jquery-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>jQuery</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-c-plain-wordmark  colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>C</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-cplusplus-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>C++</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-github-plain-wordmark"></i>
            </div>
            <div className="flip-card-back">
              <h3>GitHub</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-html5-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-css3-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-sass-original colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>SASS</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-wordpress-plain-wordmark"></i>
            </div>
            <div className="flip-card-back">
              <h3>wordpress</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>AWS</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i class="devicon-firebase-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i class="devicon-jenkins-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Jenkins</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i class="devicon-nginx-original colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>nginx</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Bootstrap</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-git-plain colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Git</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <i className="devicon-heroku-plain-wordmark colored"></i>
            </div>
            <div className="flip-card-back">
              <h3>Heroku</h3>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default SkillsPage;
