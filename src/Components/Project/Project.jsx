import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
import Arrow from "../../Components/Arrow/Arrow.jsx";
// import Fade from "react-reveal/Zoom";

const ProjectComponent = (props) => {
  const { theme } = useContext(ThemeContext);

  const Project = styled.div`
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    & > .project-container {
      height: 80vh;
      position: relative;
      display: flex;
      width: 80%;
      margin: 0 auto;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      & > img {
        width: 720px;
        height: 430px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        text-align: center;
        & > h1 {
          font-family: "Saira Stencil One", cursive;
          margin: 0;
        }
        & > p {
          margin-bottom: 10px;
        }
        & > .techs {
          display: grid;
          text-align: center;
          grid-template-columns: 120px 120px;
          & > p {
            background-color: ${theme.fontColor};
            color: ${theme.backgroundColor};
            border-radius: 5px;
            font-size: 9px;
            margin: 2px;
            padding: 3px;
          }
        }

        & > .links {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 60%;
          & > a {
            margin-top: 10px;
            // font-size: 20px;
            & > i {
              font-size: 20px;
              padding: 15px;
              border-radius: 100px;
              color: rgb(255, 255, 255);
              background-image: linear-gradient(
                to bottom,
                rgb(117, 101, 236),
                rgb(122, 42, 196)
              ) !important;
              box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
            }
          }
        }
      }
    }

    @media screen and (max-width: 1324px) {
      & > .project-container {
        & > img {
          width: 670px;
          height: 420px;
        }
      }
    }
    @media screen and (max-width: 1224px) {
      & > img {
        width: 570px;
        height: 320px;
      }
    }
    @media screen and (max-width: 1124px) {
      & > .project-container {
        & > img {
          width: 470px;
          height: 280px;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      & > .project-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;

        & > img {
          width: 440px;
          height: 240px;
        }
        & > div {
          & > h1 {
            font-family: "Saira Stencil One", cursive;
            margin: 0;
          }
          & > .techs {
            display: grid;
            text-align: center;
            grid-template-columns: 120px 120px;
            & > p {
              font-size: 9px;
              margin: 2px;
              padding: 3px;
            }
          }
          & > .links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;
            & > a {
              margin-top: 10px;
              font-size: 40px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      & > .project-container {
        margin-top: -5px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100vh;
        & > img {
          width: 325px;
          height: 180px;
        }
        & > div {
          text-align: center;
          width: 80%;
          & > h1 {
            font-family: "Saira Stencil One", cursive;
            margin: 0;
          }
          & > p {
            font-size: 13px;
            color: rgb(138, 138, 138);
          }
          & > .techs {
            display: grid;
            text-align: center;
            grid-template-columns: 120px 120px;
            & > p {
              font-size: 9px;
              margin: 2px;
              padding: 3px;
            }
          }
          & > .links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;
            & > a {
              font-size: 40px;
            }
          }
        }
      }
    }
  `;

  return props.project ? (
    <Project>
      <Arrow upRef={props.upRef} up={props.up} />
      <div className="project-container">
        <img src={props.project.img} alt="" />

        <div>
          <h1>{props.project.name}</h1>
          <p>{props.project.description}</p>

          <div className="techs">
            {props.project.toolsUsed.map((t, index) => (
              <p key={index}>{t}</p>
            ))}
          </div>

          <div className="links">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={props.project.link}
            >
              <i className="fas fa-globe-americas"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={props.project.gitHubLink}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <Arrow downRef={props.downRef} down={props.down} />
    </Project>
  ) : (
    <p>loading...</p>
  );
};

export default ProjectComponent;
