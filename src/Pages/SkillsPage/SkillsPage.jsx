import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import CubeBox from "../../Components/CubeBox/CubeBox";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import SkillIconAndName from "../../Components/SkillIcon/SkillIconAndName";

export default function SkillsPage() {
  const { theme } = useContext(ThemeContext);

  const SkillsPageWrapper = styled.div`
    .experience {
      width: 100%;
    }

    h1 {
      font-family: "Saira Stencil One", cursive;
      font-size: 26px;
    }

    .experiences_card {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 100px auto;
    }

    .experience-card {
      display: flex;
      flex-direction: row;
    }

    .ampas-logo {
      width: 150px;
      margin-left: 40px;
    }

    .aframe-card {
      margin-bottom: 100px;
    }

    .position-location {
      background-color: ${theme.fontColor};
      color: ${theme.backgroundColor};
      width: 300px;
    }

    .skills-container {
      display: none;
      // display: flex;
      // flex-direction: column;
      // width: 40vw;
      // height: 50%;
    }
    .skills_list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      list-style-type: square;
      margin-left: 20px;
      font-family: "Roboto", sans-serif;
      color: rgb(138, 138, 138);
    }

    .view-button {
      margin: 0 auto;
      width: 200px;
      border: none;
      border-radius: 5px;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
    .active {
      color: rgb(255, 255, 255);
      background-image: linear-gradient(
        to bottom,
        rgb(117, 101, 236),
        rgb(122, 42, 196)
      ) !important;
      box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
    }
    span {
      width: 100%;
      height: 100%;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(244, 244, 244);
      color: rgb(48, 32, 66);
    }

    .imdb-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #f5c518;
      color: #000;
      background-color: #f5c518;
      border-radius: 5px;
      width: 120px;
      height: 48px;
      margin-top: 20px;
    }
    .imdb-link:hover {
      box-shadow: 0px 0px 26px 4px #f5c518;
    }

    .imdb-icon {
      font-size: 15px;
    }

    .imdb-logo {
      width: 60px;
    }

    .aframe-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid white;
      color: #000;
      background-color: white;
      border-radius: 5px;
      width: 120px;
      height: 48px;
      margin-top: 20px;
    }
    .aframe-link:hover {
      box-shadow: 0px 0px 26px 4px #fff;
    }
    .aframe-logo {
      width: 110px;
    }

    .project-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(
        to bottom,
        rgb(117, 101, 236),
        rgb(122, 42, 196)
      ) !important;
      width: 110px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 15px;
      font-weight: 300;
      margin: 20px 0 30px 0;
    }
    .project-button:hover {
      box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
    }

    @media screen and (max-width: 900px) {
      li {
        font-size: 15px;
      }
    }

    @media screen and (max-width: 700px) {
      h1 {
        font-size: 20px;
      }
      li {
        font-size: 14px;
      }
      .project-button {
        font-size: 12px;
      }
      .experiences_card {
        width: 80%;
        margin-top: 80px;
      }
    }
  `;

  useEffect(() => {
    document.title = "Meisam Poorzand | Experiences";
    window.scrollTo(0, 0);
  }, []);

  return (
    <SkillsPageWrapper>
      <div className="experiences_card">
        <div className="experience aframe-card" data-aos="fade-left">
          <div className="experience-card">
            <div>
              <h1>
                The Academy of Motion Picture Arts and Sciences
                <span className="position-location">
                  Los Angeles, CA - Remote / May 2023 – Present
                </span>
              </h1>
              
            </div>

            <picture>
              <img
                alt="AMPAS"
                className="ampas-logo"
                src="./images/ampas.png"
              />
            </picture>
          </div>

          <div className="skills_list">
            <SkillIconAndName
              name={"React.js"}
              icon={<i className="devicon-react-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"Node.js"}
              icon={<i className="devicon-nodejs-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Express"}
              icon={<i className="devicon-express-original"></i>}
            />
            <SkillIconAndName
              name={"Python"}
              icon={<i className="devicon-python-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"Django"}
              icon={<i className="devicon-django-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"MongoDB"}
              icon={<i className="devicon-mongodb-plain colored"></i>}
            />
            <SkillIconAndName
              name={"PostgreSQL"}
              icon={
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              }
            />
            <SkillIconAndName
              name={"MySQL"}
              icon={<i className="devicon-mysql-plain colored"></i>}
            />
            <SkillIconAndName
              name={"JavaScript"}
              icon={<i className="devicon-javascript-plain colored"></i>}
            />
            <SkillIconAndName
              name={"TypeScript"}
              icon={<i className="devicon-typescript-plain colored"></i>}
            />
            <SkillIconAndName
              name={"jQuery"}
              icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"HTML"}
              icon={<i className="devicon-html5-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"CSS"}
              icon={<i className="devicon-css3-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"SASS"}
              icon={<i className="devicon-sass-original colored"></i>}
            />
            <SkillIconAndName
              name={"wordpress"}
              icon={<i className="devicon-wordpress-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"Firebase"}
              icon={<i className="devicon-firebase-plain colored"></i>}
            />
            <SkillIconAndName
              name={"AWS"}
              icon={<i className="devicon-amazonwebservices-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Bootstrap"}
              icon={<i className="devicon-bootstrap-plain"></i>}
            />
            <SkillIconAndName
              name={"Material UI"}
              icon={<i className="devicon-materialui-plain"></i>}
            />
            <SkillIconAndName
              name={"Figma"}
              icon={<i className="devicon-figma-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Redux"}
              icon={<i className="devicon-redux-original colored"></i>}
            />
            <SkillIconAndName
              name={"GitHub"}
              icon={<i className="devicon-github-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"Git"}
              icon={<i className="devicon-git-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Heroku"}
              icon={<i className="devicon-heroku-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"nginx"}
              icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
            />
          </div>
          <a
            href="https://aframe.oscars.org/"
            target="_blank"
            className="aframe-link"
            rel="noopener noreferrer"
          >
            <img
              src="./images/aframe-icon.png"
              alt="A.FRAME"
              className="aframe-logo"
            ></img>
          </a>
        </div>
        {/* <div className="experience" data-aos="fade-left">
          <h1>
            Freelance Full-Stack Developer
            <span className="position-location">
              {" "}
              Los Angeles, CA - Remote / Aug 2018 – Present
            </span>
          </h1>
          <ul>
            <li>
              Designed and developed web models and prototypes that encompassed
              interface, logic, and data models to meet project goals and user
              needs.
            </li>
            <li>
              Produced website maps, application models, image templates, or
              page templates to optimize the user experience and adhere to
              industry standards.
            </li>
            <li>
              Developed cross-compatible databases to support web applications
              and sites, ensuring accessibility across various browsers and
              devices.
            </li>
            <li>
              Established searchable indices for webpage content to optimize
              user search functionality.
            </li>
          </ul>
          <div className="skills_list">
            <SkillIconAndName
              name={"React.js"}
              icon={<i className="devicon-react-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"Node.js"}
              icon={<i className="devicon-nodejs-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Express"}
              icon={<i className="devicon-express-original"></i>}
            />
            <SkillIconAndName
              name={"Python"}
              icon={<i className="devicon-python-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"Django"}
              icon={<i className="devicon-django-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"MongoDB"}
              icon={<i className="devicon-mongodb-plain colored"></i>}
            />
            <SkillIconAndName
              name={"PostgreSQL"}
              icon={
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              }
            />
            <SkillIconAndName
              name={"MySQL"}
              icon={<i className="devicon-mysql-plain colored"></i>}
            />
            <SkillIconAndName
              name={"JavaScript"}
              icon={<i className="devicon-javascript-plain colored"></i>}
            />
            <SkillIconAndName
              name={"TypeScript"}
              icon={<i className="devicon-typescript-plain colored"></i>}
            />
            <SkillIconAndName
              name={"jQuery"}
              icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"HTML"}
              icon={<i className="devicon-html5-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"CSS"}
              icon={<i className="devicon-css3-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"SASS"}
              icon={<i className="devicon-sass-original colored"></i>}
            />
            <SkillIconAndName
              name={"wordpress"}
              icon={<i className="devicon-wordpress-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"Firebase"}
              icon={<i className="devicon-firebase-plain colored"></i>}
            />
            <SkillIconAndName
              name={"AWS"}
              icon={<i className="devicon-amazonwebservices-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Bootstrap"}
              icon={<i className="devicon-bootstrap-plain"></i>}
            />
            <SkillIconAndName
              name={"Material UI"}
              icon={<i className="devicon-materialui-plain"></i>}
            />
            <SkillIconAndName
              name={"Figma"}
              icon={<i className="devicon-figma-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Redux"}
              icon={<i className="devicon-redux-original colored"></i>}
            />
            <SkillIconAndName
              name={"GitHub"}
              icon={<i className="devicon-github-plain-wordmark"></i>}
            />
            <SkillIconAndName
              name={"Git"}
              icon={<i className="devicon-git-plain colored"></i>}
            />
            <SkillIconAndName
              name={"Heroku"}
              icon={<i className="devicon-heroku-plain-wordmark colored"></i>}
            />
            <SkillIconAndName
              name={"nginx"}
              icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
            />
          </div>
          <Link to="/projects" className="project-button">
            <i className="fas fa-layer-group"></i>&nbsp;Projects
          </Link>
        </div> */}
        <div className="experience" data-aos="fade-right">
          <h1>
            Back-End Developer at Lightstorm Entertainment
            <span className="position-location">
              {" "}
              Manhattan Beach, CA / Jul 2019 – Jan 2023
            </span>
          </h1>
          <ul>
            <li>
              Collaborated with development team to implement essential
              application for production of Avatar sequels.
            </li>
            <li>
              Developed and maintained RESTful APIs, including tweaking previous
              endpoints, for a browser-based digital asset management and human
              workflow system.
            </li>
            <li>
              Designed mapping schemas using Elasticsearch to improve query
              performance.
            </li>
            <li>
              Managed and maintained MySQL databases using Python and wrote Java
              code for CRUD operations.
            </li>
            <li>
              Troubleshoot network connectivity errors and analyzed server logs
              for inconsistencies.
            </li>
            <li>
              Conducted endpoint testing by writing scripts or using unit
              testing frameworks to ensure the functionality and reliability of
              APIs.
            </li>
            <li>
              Developed scripts to modify data as needed, ensuring data
              integrity and supporting data manipulation requirements.
            </li>
            <li>
              Developed Java code utilizing software tools for image processing
              (Imagemagick) and multimedia handling (FFmpeg), to to handle image
              and video processing and manipulation tasks.
            </li>
            <li>
              Implemented Java application for synchronized binary data and file
              transfer from Lightstorm Entertainment's servers in Los Angeles to
              their servers located in New Zealand.
            </li>
            <li>
              Provided support to the frontend team on proper access to data
              from our web services.
            </li>
            <li>
              Resolved reported issues and addressed queries in a timely manner.
            </li>
            <li>
              Contributed to improving code quality by implementing recommended
              best practices.
            </li>
          </ul>
          
          <a
            href="https://www.imdb.com/name/nm14548800/"
            target="_blank"
            className="imdb-link"
            rel="noopener noreferrer"
          >
            <img
              src="./images/imdb-icon.png"
              alt="IMDB"
              className="imdb-logo"
            ></img>
          </a>
        </div>
      </div>
      <div className="skills-container" data-aos="fade-down">
        {/* <div onClick={() => setListView(!listView)} className="view-button">
          <span className={!listView && `active`}>Box View</span>
          <span className={listView && `active`}>List View</span>
        </div> */}
        {/* {listView ? <SkillsListView /> : <CubeBox />} */}
        <CubeBox />
      </div>
    </SkillsPageWrapper>
  );
}
