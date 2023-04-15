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
      "Nate Limo Services is a web-app designed for a limousine company. Users can search through the origin and destination address through google maps places API, see the distance on a map through google maps destinations API, get a quote based on the distance and duration and book an appointment. Admins can also view appointments on the admin page and edit the status of an appointment.",
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
      "Arcadia Automotive is a dealership web-app. The admin can log in and upload vehicle images along with their details to the inventory. In addition, clients can view the inventory, filter and search through the inventory, calculate payments on a specific vehicle and contact the dealership regarding a vehicle they have in mind to purchase.",
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
      "devSpot is a web-app where developers can share their projects through iframes. In addition, users can chat with each other through the app. The posted projects are live, meaning users can interact with them as they would if they were to visit the project.",
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
      "Memesagram is a social media platform where users can login with their Google account and upload photos, especially memes. Users can also comment, like, and update their profiles with photos and custom usernames. In addition, users can edit or delete their comments and captions.",
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
      "A full-service travel planning app that matches you with flights and hotels based on your travel budget. Whethere you're planning a romantic getaway, a family vacation, or just need a weekend escape.",
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
      "The game is about finding the hidden mines. Each box you click on will either show a number of mines around each box or a mine. If there is no number it means that there is no mine around it. You can put a flag by right-clicking anywhere you think there is a mine. If you click all the boxes without clicking a mine, you will win.",
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
        <div className="project_container" ref={(el) => {
            firstDownRef.current = el;
          }}>
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
