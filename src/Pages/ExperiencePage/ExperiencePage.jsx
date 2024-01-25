import React, { useEffect, useContext, useState } from "react";
import SkillIconAndName from "../../Components/SkillIcon/SkillIconAndName";
import Experience from "../../Components/Experience/Experience";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import * as Styles from "./ExperiencePage.styles.js";

export default function ExperiencePage() {
  const { theme } = useContext(ThemeContext);
  const [ampas] = useState({
    companyName:
      "Full-Stack Developer at The Academy of Motion Picture Arts and Sciences",
    companyLocationAndDate: "Los Angeles, CA - Remote / May 2023 – Present",
    tasks: [
      "Develop and contribute to the Academy Museum, Nominees Portal, Oscars Official, and AFrame Newsletter websites for the Academy of Motion Picture Arts and Sciences, ensuring visually appealing and user-friendly interfaces.",
      "Collaborate with designers and stakeholders to gather requirements and implement intuitive user interfaces, incorporating responsive design techniques for seamless experiences across devices.",
      "Implement server-side rendering using Node.js and utilize AWS Lambda and API Gateway for secure and efficient communication channels.",
      "Retrieve and manage data for the websites using Contentful, optimizing performance through code minification, image optimization, and caching techniques.",
      "Deploy projects to AWS Elastic Beanstalk, ensuring reliable and scalable hosting, while conducting code reviews and debugging to maintain code quality.",
      "Implement authentication and authorization mechanisms, integrating third-party APIs and services for enhanced functionality and secure user access.",
      "Develop and maintain the Nominee Portal, providing a secure platform for nominees to access information and submit materials.",
      "Collaborate with cross-functional teams in an agile work environment, delivering high-quality results efficiently and aligning with AMPAS goals and objectives.",
      "Monitor website analytics, generate reports, and contribute to the documentation of code, processes, and best practices for knowledge sharing.",
      "Stay updated with the latest web development trends, bringing innovative ideas and solutions to enhance the websites' performance and user experience.",
      "Provide ongoing support and maintenance for the websites, promptly addressing user inquiries and technical issues while continuously seeking opportunities for improvement.",
    ],
    image: {
      alt: "AMPAS",
      src: "./images/ampas.png",
    },
  });
  const [avtr] = useState({
    companyName: "Back-End Developer at Lightstorm Entertainment",
    companyLocationAndDate: "Manhattan Beach, CA / July 2019 – January 2023",
    tasks: [
      "Collaborated with development team to implement essential application for production of Avatar sequels.",
      "Developed and maintained RESTful APIs, including tweaking previous endpoints, for a browser-based digital asset management and human workflow system.",
      "Designed mapping schemas using Elasticsearch to improve query performance.",
      "Managed and maintained MySQL databases using Python and wrote Java code for CRUD operations.",
      "Troubleshoot network connectivity errors and analyzed server logs for inconsistencies.",
      "Conducted endpoint testing by writing scripts or using unit testing frameworks to ensure the functionality and reliability of APIs.",
      "Developed scripts to modify data as needed, ensuring data integrity and supporting data manipulation requirements.",
      "Developed Java code utilizing software tools for image processing (Imagemagick) and multimedia handling (FFmpeg), to handle image and video processing and manipulation tasks.",
      "Implemented Java application for synchronized binary data and file transfer from Lightstorm Entertainment's servers in Los Angeles to their servers located in New Zealand.",
      "Provided support to the frontend team on proper access to data from our web services.",
      "Resolved reported issues and addressed queries in a timely manner.",
      "Contributed to improving code quality by implementing recommended best practices.",
    ],
    image: {
      alt: "AVTR",
      src: "./images/avatar.png",
    },
  });
  const [freelancer] = useState({
    companyName: "Freelance Full-Stack Developer",
    companyLocationAndDate:
      "Los Angeles, CA - Remote / August 2018 – July 2019",
    tasks: [
      "Designed and developed web models and prototypes that encompassed interface, logic, and data models to meet project goals and user needs.",
      "Produced website maps, application models, image templates, or page templates to optimize the user experience and adhere to industry standards.",
      "Developed cross-compatible databases to support web applications and sites, ensuring accessibility across various browsers and devices.",
      "Established searchable indices for webpage content to optimize user search functionality.",
    ],
  });

  const setAmpasSkills = () => {
    return (
      <Styles.SkillsContainer>
        <SkillIconAndName
          name={"Next.js"}
          icon={<i className="devicon-nextjs-plain colored"></i>}
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
          name={"React.js"}
          icon={<i className="devicon-react-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Redux"}
          icon={<i className="devicon-redux-original colored"></i>}
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
          name={"Contentful"}
          icon={<img alt="Contentful" src="./images/contentful-logo.png" />}
        />
        <SkillIconAndName
          name={"AWS"}
          icon={<i className="devicon-amazonwebservices-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Vim"}
          icon={<i className="devicon-vim-plain colored"></i>}
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
          name={"Bootstrap"}
          icon={<i className="devicon-bootstrap-plain"></i>}
        />
        <SkillIconAndName
          name={"Figma"}
          icon={<i className="devicon-figma-plain colored"></i>}
        />

        <SkillIconAndName
          name={"GitHub"}
          icon={<i className="devicon-github-plain-wordmark"></i>}
        />
        <SkillIconAndName
          name={"Git"}
          icon={<i className="devicon-git-plain colored"></i>}
        />
      </Styles.SkillsContainer>
    );
  };

  const setAmpasLinks = () => {
    return (
      <>
        {/* <Styles.AmpasLinksContainer
          href="https://aframe.oscars.org/"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <img
            src="./images/oscar.png"
            alt="A.FRAME"
            className="oscar-logo"
          ></img>
          A.FRAME
        </Styles.AmpasLinksContainer>
        <Styles.AmpasLinksContainer
          href="https://academymuseum.org/"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <img
            src="./images/oscar.png"
            alt="Academy Museum"
            className="oscar-logo"
          ></img>
          Academy Museum
        </Styles.AmpasLinksContainer> */}
      </>
    );
  };

  const setAvtrSkills = () => {
    return (
      <Styles.SkillsContainer>
        <SkillIconAndName
          name={"Java"}
          icon={<i className="devicon-java-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Spring"}
          icon={<i className="devicon-spring-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Python"}
          icon={<i className="devicon-python-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"PostgreSQL"}
          icon={<i className="devicon-postgresql-plain-wordmark colored"></i>}
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
          name={"GitLab"}
          icon={<i className="devicon-gitlab-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Git"}
          icon={<i className="devicon-git-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Jenkins"}
          icon={<i className="devicon-jenkins-plain colored"></i>}
        />
        <SkillIconAndName
          name={"nginx"}
          icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"AWS"}
          icon={<i className="devicon-amazonwebservices-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Vim"}
          icon={<i className="devicon-vim-plain colored"></i>}
        />
        <SkillIconAndName
          name={"ElasticSearch"}
          icon={
            <img alt="elasticsearch" src="./images/elasticsearch (1).png" />
          }
        />
        <SkillIconAndName
          name={"ImageMagick"}
          icon={<img alt="imagemagick" src="./images/imagemagick.png" />}
        />
      </Styles.SkillsContainer>
    );
  };

  const setAvtrLinks = () => {
    return (
      <Styles.AvtrLinkContainer
        href="https://www.imdb.com/name/nm14548800/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/imdb-icon.png"
          alt="IMDB"
          className="imdb-logo"
        ></img>
      </Styles.AvtrLinkContainer>
    );
  };

  const setFreelancerLinks = () => {
    return (
      <Styles.ProjectsLinkContainer>
        <Link to="/projects" className="project-button">
          <i className="fas fa-layer-group"></i>&nbsp;Projects
        </Link>
      </Styles.ProjectsLinkContainer>
    );
  };

  const setFreelancerSkills = () => {
    return (
      <Styles.SkillsContainer>
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
          icon={<i className="devicon-postgresql-plain-wordmark colored"></i>}
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
      </Styles.SkillsContainer>
    );
  };

  useEffect(() => {
    document.title = "Meisam Poorzand | Experiences";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styles.ExperiencesContainer>
      <Experience props={ampas} Skills={setAmpasSkills} Links={setAmpasLinks} />
      <Experience props={avtr} Skills={setAvtrSkills} Links={setAvtrLinks} />
      <Experience
        props={freelancer}
        Skills={setFreelancerSkills}
        Links={setFreelancerLinks}
      />
    </Styles.ExperiencesContainer>
  );
}
