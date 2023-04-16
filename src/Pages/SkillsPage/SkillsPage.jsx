import React, { useState } from "react";
import styled from "styled-components";
import CubeBox from "../../Components/CubeBox/CubeBox";
import SkillsListView from "../../Components/SkillsListView/SkillsListView";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SkillsPage() {
  const [listView, setListView] = useState(false);

  if (window.innerWidth < 900) {
    return <SkillsListView />;
  }
  return (
    <SkillsPageWrapper>
      <div data-aos="fade-left" className="experience_card">
        <div className="experience">
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
          <Link to="/projects" className="project-button">
            <i className="fas fa-layer-group"></i>&nbsp;Projects
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="experience">
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
          >
            <img src="./images/imdb-icon.png" className="imdb-logo"></img>
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

const SkillsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 26px;
  }

  .experience_card {
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .experience {
    width: 80%;
    margin-left: 250px;
  }
  .position-location {
    width: 300px;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 50%;
    margin-top: 20%;
  }

  li {
    list-style-type: square;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
  }

  .view-button {
    margin: 0 auto 0 auto;
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
    width: 110px;
    height: 40px;
    margin-top: 20px;
  }

  .imdb-icon {
    font-size: 15px;
  }

  .imdb-logo {
    width: 60px;
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
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
    width: 110px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
  }
  .project-button:hover {
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
  }
`;
