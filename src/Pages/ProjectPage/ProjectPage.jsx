import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import ProjectComponent from "../../Components/Project/Project";

const ProjectPage = () => {
  const firstDownRef = useRef(null);
  const secondDownRef = useRef(null);
  const thirdDownRef = useRef(null);
  const fourthDownRef = useRef(null);
  const fifthDownRef = useRef(null);
  const sixthDownRef = useRef(null);

  const [nateLimo] = useState({
    img: "images/nateLimo.png",
    name: "Nate Limo Services",
    description:
      "Nate Limo Services is a professional web app for a premium limousine company, featuring a user-friendly search function powered by Google Maps Places API, a visual representation of the distance and route between selected locations, a quote generator based on distance and duration, and easy appointment booking. Administrators can manage appointments and edit their status on the secure admin page.",
    toolsUsed: [
      "React.js",
      "Node.js",
      "Firestore Database",
      "Firebase Functions",
      "Firebase Hosting",
      "Email.js",
      "Express.js",
      "Google Maps API",
    ],
    link: "https://natelimoservices.firebaseapp.com/",
    gitHubLink: "https://github.com/adibfazli/nate-limo-service",
  });
  const [arcadiaCars] = useState({
    img: "images/arcadiacars.png",
    name: "Arcadia Automotive",
    description:
      "Arcadia Automotive is a professional dealership web app that allows admins to upload and manage vehicle details and images. Clients can easily view, filter, and calculate payments on vehicles, as well as contact the dealership directly through the app.",
    toolsUsed: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Email.js",
      "Passport.js",
      "Token Based Auth",
      "AWS EC2",
      "AWS S3",
    ],
    link: "http://www.arcadiacars.com/",
    gitHubLink: "https://github.com/pmeisam/arcadia_automobile",
  });
  const [devSpot] = useState({
    img: "images/devspot.png",
    name: "devSpot",
    description:
      "DevSpot is a cutting-edge web app that allows developers to share their projects through interactive iframes. Users can chat seamlessly with each other, and what sets it apart is the live shared projects, creating an immersive experience that inspires developers of all levels.",
    toolsUsed: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
      "Socket.io",
      "Mongoose",
      "Token Based Auth",
      "Material UI",
      "Bootstrap",
    ],
    link: "http://dev-spot.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/devSpot",
  });
  const [memesagram] = useState({
    img: "images/memesagram.png",
    name: "MEMESAGRAM",
    description:
      "Memesagram is a user-friendly social media platform for meme lovers, featuring easy photo uploads, commenting, liking, and profile updates. With powerful editing tools, users can effortlessly edit or delete their comments and captions, ensuring a seamless and enjoyable experience.",
    toolsUsed: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
      "Mongoose",
      "Passport Authentication",
      "Cloudinary",
      "Bootstrap",
    ],
    link: "http://memesagram.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/instagram",
  });
  const [triplaner] = useState({
    img: "images/triplaner.png",
    name: "TRIPLANER",
    description:
      "A full-service travel planning app that offers a personalized travel experience that caters to your budget. Whether you're looking for a romantic getaway, a family vacation, or a weekend escape, we'll match you with the best flights and hotels to suit your preferences.",
    toolsUsed: [
      "Python",
      "django",
      "PostgreSQL",
      "IATA Codes API",
      "Amadeus API",
      "Bootstrap",
    ],
    link: "http://triplaner.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/trip-planner",
  });
  const [minesweeper] = useState({
    img: "images/minesweeper.png",
    name: "MINESWEEPER",
    description:
      "This game is a thrilling challenge that involves finding hidden mines. Each box you click reveals a number of nearby mines or a mine itself. By using flags, you can mark suspected mine locations. The goal is to click on all boxes without uncovering a mine. Be careful and strategic, as the stakes are high.",
    toolsUsed: ["JavaScript", "jQuery", "HTML", "CSS"],
    link: "https://pmeisam.github.io/minesweeper/",
    gitHubLink: "https://github.com/pmeisam/minesweeper",
  });

  useEffect(() => {
    document.title = "Meisam Poorzand | Projects";
    window.scrollTo(0, 0);
  });

  return (
    <ProjectsWrapper>
      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            firstDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={nateLimo}
            downRef={secondDownRef}
            down={true}
          />
        </div>
      </Fade>

      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            secondDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={arcadiaCars}
            downRef={thirdDownRef}
            down={true}
            upRef={firstDownRef}
            up={true}
          />
        </div>
      </Fade>

      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            thirdDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={devSpot}
            downRef={fourthDownRef}
            down={true}
            upRef={secondDownRef}
            up={true}
          />
        </div>
      </Fade>
      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            fourthDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={triplaner}
            downRef={fifthDownRef}
            down={true}
            upRef={thirdDownRef}
            up={true}
          />
        </div>
      </Fade>
      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            fifthDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={memesagram}
            downRef={sixthDownRef}
            down={true}
            upRef={fourthDownRef}
            up={true}
          />
        </div>
      </Fade>
      <Fade big>
        <div
          className="project_container"
          ref={(el) => {
            sixthDownRef.current = el;
          }}
        >
          <ProjectComponent
            project={minesweeper}
            upRef={fifthDownRef}
            up={true}
          />
        </div>
      </Fade>
    </ProjectsWrapper>
  );
};

export default ProjectPage;

const ProjectsWrapper = styled.div`
  overflow: auto;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  position: relative;
  .project_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15% 0;
  }

  @media screen and (max-width: 600px) {
    // margin: 300px 0;
    .project_container {
      margin: 35% 0;
    }
  }
  // height: 100vh;
  // overflow-y: scroll;
  // scroll-snap-type: y mandatory;

  // .project_container {
  //   height: 100vh;
  //   flex: 0 0 100%;
  //   scroll-snap-align: center;
  // }
  // .project_container {
  //   display: flex;
  //   height: 100vh;
  //   justify-content: center;
  //   align-items: center;
  // }
`;
