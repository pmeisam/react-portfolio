import React, { useEffect } from "react";
import "./SkillsListView.scss";
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
      </div>
    </div>
  );
};

export default SkillsListView;
