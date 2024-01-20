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

  const [nomineesPortal] = useState({
    img: "images/nomineesPortal.png",
    name: "Oscars Nominees Portal",
    description:
      "The Oscar Nominees Portal serves as their exclusive digital haven, intricately designed for profile management and unparalleled access to prestigious Academy events, providing nominees with a personalized Oscars journey.",
    toolsUsed: ["React.js", "MSAL", "AWS Cloudfront", "AWS S3", "Contentful"],
    link: null,
  });
  const [academyMuseum] = useState({
    img: "images/academyMuseum.png",
    name: "The Academy Museum",
    description:
      "The Academy Museum website is a sophisticated online platform dedicated to the world of cinema. It enables seamless exploration of film history, captivating exhibits, and event updates. Visitors can immerse themselves in the magic of movies, while my contributions to the website's development ensure a user-friendly experience for enthusiasts worldwide.",
    link: "academymuseum.org",
  });
  const [oscars] = useState({
    img: "images/oscars.png",
    name: "Oscars Official",
    description:
      "This official website provides a comprehensive portal for everything related to the Academy Awards. From nominee lists to event details, users can stay informed and engaged.",
    link: "oscars.org",
  });
  const [aframe] = useState({
    img: "images/aframe.png",
    name: "Academy A.Frame NewsLetter",
    description:
      "Stay in the cinematic loop with aframe.oscars.org, the Academy's newsletter website. Dive into the latest updates, exclusive content, and behind-the-scenes stories.",
    link: "aframe.oscars.org",
  });

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
    link: null,
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
    link: "arcadiacars.com",
  });

  useEffect(() => {
    document.title = "Meisam Poorzand | Projects";
    window.scrollTo(0, 0);
  });

  return (
    <ProjectsWrapper>
      <div
        className="project_container"
        ref={(el) => {
          firstDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={academyMuseum}
          downRef={secondDownRef}
          down={true}
        />
      </div>

      <div
        className="project_container"
        ref={(el) => {
          secondDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={oscars}
          downRef={thirdDownRef}
          down={true}
          upRef={firstDownRef}
          up={true}
        />
      </div>

      <div
        className="project_container"
        ref={(el) => {
          thirdDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={nomineesPortal}
          downRef={fourthDownRef}
          down={true}
          upRef={secondDownRef}
          up={true}
        />
      </div>

      <div
        className="project_container"
        ref={(el) => {
          fourthDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={aframe}
          downRef={fifthDownRef}
          down={true}
          upRef={thirdDownRef}
          up={true}
        />
      </div>

      <div
        className="project_container"
        ref={(el) => {
          fifthDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={arcadiaCars}
          downRef={sixthDownRef}
          down={true}
          upRef={fourthDownRef}
          up={true}
        />
      </div>

      <div
        className="project_container"
        ref={(el) => {
          sixthDownRef.current = el;
        }}
      >
        <ProjectComponent
          project={nateLimo}
          downRef={null}
          down={false}
          upRef={fifthDownRef}
          up={true}
        />
      </div>
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
`;
