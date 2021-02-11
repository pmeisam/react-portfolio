import React, { useState, useEffect } from "react";
import ProjectComponent from "../../Components/Project/Project";
import { FullPage, Slide } from "react-full-page";


const ProjectPage = () => {

  const [arcadiaCars] = useState({
    img: "images/arcadiacars.png",
    name: "Arcadia Automotive",
    description:
      "Arcadia Automotive is a dealership web-app. The admin can login and upload a vehicle images along with its details to the inventory. In addition clients can view the inventory, filter and search through the inventory, calculate payments on a specific vehicle and contact the delarship regarding a vehicle they have in mind to purchase.",
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
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <FullPage>
        <Slide>
          <ProjectComponent project={arcadiaCars} />
        </Slide>
        <Slide>
          <ProjectComponent project={devSpot} />
        </Slide>
        <Slide>
          <ProjectComponent project={triplaner} />
        </Slide>

        <Slide>
          <ProjectComponent project={memesagram} />
        </Slide>

        <Slide>
          <ProjectComponent project={minesweeper} />
        </Slide>
      </FullPage>
    </div>
  );
};

export default ProjectPage;
