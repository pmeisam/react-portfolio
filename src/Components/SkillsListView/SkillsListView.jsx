import React, { useEffect } from "react";
import "./SkillsListView.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillIcon from "../SkillIcon/SkillIcon";
// import Fade from "react-reveal/Fade";

const SkillsListView = () => {
  useEffect(() => {
    document.title = "Meisam Poorzand | Skills";
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {/* <Fade top> */}

      <div className="skills_parent">
        <div className="skills_card">
          <h1 className="skills_card_title">Backend</h1>
          <div className="skills_card_container">
            <SkillIcon
              name={"Node.js"}
              icon={<i className="devicon-nodejs-plain colored"></i>}
            />
            <SkillIcon
              name={"Express"}
              icon={<i className="devicon-express-original"></i>}
            />
            <SkillIcon
              name={"Python"}
              icon={<i className="devicon-python-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Django"}
              icon={<i className="devicon-django-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Java"}
              icon={<i className="devicon-java-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Spring"}
              icon={<i class="devicon-spring-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"C"}
              icon={<i className="devicon-c-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"C++"}
              icon={
                <i className="devicon-cplusplus-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"Firebase"}
              icon={<i className="devicon-firebase-plain-wordmark colored"></i>}
            />
          </div>
        </div>

        <div className="skills_card">
          <h1 className="skills_card_title">Frontend</h1>
          <div className="skills_card_container">
            <SkillIcon
              name={"Angular.js"}
              icon={
                <i className="devicon-angularjs-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"React.js"}
              icon={<i className="devicon-react-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Vue.js"}
              icon={<i className="devicon-vuejs-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"TypeScript"}
              icon={<i className="devicon-typescript-plain colored"></i>}
            />
            <SkillIcon
              name={"JavaScript"}
              icon={<i className="devicon-javascript-plain colored"></i>}
            />
            <SkillIcon
              name={"jQuery"}
              icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"HTML"}
              icon={<i className="devicon-html5-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"CSS"}
              icon={<i className="devicon-css3-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"SASS"}
              icon={<i className="devicon-sass-original colored"></i>}
            />
            <SkillIcon
              name={"wordpress"}
              icon={<i className="devicon-wordpress-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Bootstrap"}
              icon={<i class="devicon-bootstrap-plain"></i>}
            />
            <SkillIcon
              name={"Material UI"}
              icon={<i class="devicon-materialui-plain"></i>}
            />
          </div>
        </div>

        <div className="skills_card">
          <h1 className="skills_card_title">Databases</h1>
          <div className="skills_card_container">
            <SkillIcon
              name={"MongoDB"}
              icon={<i className="devicon-mongodb-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"PostgreSQL"}
              icon={
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"MySQL"}
              icon={<i className="devicon-mysql-plain-wordmark colored"></i>}
            />
          </div>
          <br />
          <br />
          <br />
          <h1 className="skills_card_title">Others</h1>
          <div className="skills_card_container">
            <SkillIcon
              name={"AWS"}
              icon={
                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"GitHub"}
              icon={<i className="devicon-github-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Git"}
              icon={<i className="devicon-git-plain colored"></i>}
            />

            <SkillIcon
              name={"Heroku"}
              icon={<i className="devicon-heroku-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Jenkins"}
              icon={<i className="devicon-jenkins-plain colored"></i>}
            />
            <SkillIcon
              name={"nginx"}
              icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
            />
          </div>
        </div>
        {/* 
        <div data-aos="fade-down" className="experience_card">
          <div>
            <h1>
              Back-End Developer at Lightstorm Entertainment,{" "}
              <span> Manhattan Beach, CA / Jul 2019 – Present</span>
            </h1>
            <ul>
              <li>
                Member of development team responsible for the implementation of
                essential applications for the production of Avatar sequels
              </li>
              <li>
                Create RESTful APIs as well as maintain and tweak previous
                endpoints for a browser-based digital asset management and human
                workflow system
              </li>
              <li>
                Design mapping schemas using Elasticsearch for improved query
                performance
              </li>
              <li>
                Manage and maintain MySQL databases using Python and writing
                Java code for CRUD operations
              </li>
              <li>
                Troubleshoot network connectivity errors and check server logs
                for any inconsistencies
              </li>
              <li>
                Support the frontend team by sharing information on how to
                properly access data from our web services
              </li>
              <li>
                Resolve reported issues and reply to queries in a timely manner
              </li>
              <li>
                Help improve code quality by implementing the recommended best
                practices
              </li>
            </ul>
          </div>
          <div>
            <h1>
              Back-End Developer at Lightstorm Entertainment,{" "}
              <span> Manhattan Beach, CA / Jul 2019 – Present</span>
            </h1>
            <ul>
              <li>
                Create web models and prototypes that include interface,
                logical, and data models
              </li>
              <li>
                Develop web site maps, application models, image templates, or
                page templates that meet project goals, user needs and standards
              </li>
              <li>
                Develop Databases that support web applications and web sites
              </li>
              <li>
                Evaluate code to ensure that it is valid, is properly
                structured, meets industry standards and is compatible with
                browsers, devices, or operating systems
              </li>
              <li>Create searchable indices for web page content</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsListView;
