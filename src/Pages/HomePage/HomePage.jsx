import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
import { ThemeContext } from "../../Context/ThemeContext";
import HomePageSvg from "./a.js";
import "./HomePage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import HomePageSvg from "./undraw_festivities_tvvj";
// import slideInLeft from 'react-animations/lib/slide-in-left';
// import Tada from 'react-reveal/Tada';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Meisam Poorzand";
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
  }, []);

  const Tada = styled.div`
    // animation: 3s ${keyframes`${tada}`} 1;
    // animation-delay: 0.5s;
    margin-top: 100px;
    & > h1 {
      font-family: "Saira Stencil One", cursive;
      font-size: 4vw;
    }
    @media screen and (max-width: 900px) {
      margin-top: 10%;
      & > h1 {
        font-size: 6vw;
      }
    }
    @media screen and (max-width: 600px) {
      margin-top: 16%;
      & > h1 {
        font-size: 6.8vw;
      }
    }
  `;
  const Intro = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    max-height: 80vh;
    margin-top: 0vh;
    h1 {
      margin: 30px 0;
      text-shadow: 0 0 10px ${theme.fonColor};
    }
    & > div {
      display: grid;
      grid-template-rows: 1fr 1.2fr 1fr;
      width: 77%;
      & > .projectLink {
        z-index: 999;
        cursor: pointer;
        width: 200px;
        & > .projectButton {
          background-image: linear-gradient(
            to bottom,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
          width: 240px;
          height: 50px;
          border-radius: 5px;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          font-weight: 300;
        }
        & > .projectButton:hover {
          box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
        }
      }
      & > p {
        margin-top: 10px;
        font-family: "Roboto", sans-serif;
        color: rgb(138, 138, 138);
        font-size: 19px;
        font-weight: 100;
        text-align: left;
        & > .blinking {
          animation: blinkingText 0.8s infinite;
          font-weight: 900;
        }
        @keyframes blinkingText {
          0% {
            color: ${theme.fontColor};
          }
          49% {
            color: transparent;
          }
          50% {
            color: transparent;
          }
          99% {
            color: transparent;
          }
          100% {
            color: ${theme.fontColor};
          }
        }
      }
    }
    & > svg {
      position: fixed;
      right: 70px;
      bottom: 0;
      width: 28vw;
    }

    @media screen and (max-width: 1060px) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      
      h1 {
        text-shadow: none;
      }
      & > svg {
        width: 99vw;
        height: 33%;
        left: 0;
        bottom: 40px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        & > p {
          // height: 70%;
          margin: -30px 0 0 0;
        }
        .projectLink {
          z-index: 999;
          cursor: pointer;
          margin: 15px 0;
          // margin-top: -120px;
        }
        & > svg {
          z-index: -1;
        }
      }
    }
    @media screen and (max-width: 600px) {
      & > svg {
        width: 80vw;
        height: 50%;
        left: 10vw;
        bottom: 0vh;
      }
      & > div {
        width: 98%;
        grid-template-rows: auto auto auto;
        & > p {
          margin-top: -15px;
          font-size: 15px;
          letter-spacing: 0;
        }
        & > .projectLink {
          z-index: 999;
          margin-top: 17px;
          & > .projectButton {
            background-image: linear-gradient(
              to right,
              rgb(117, 101, 236),
              rgb(122, 42, 196)
            ) !important;
            width: 200px;
            height: 45px;
            border-radius: 5px;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 12px;
          }
        }
        & > svg {
          z-index: -1;
        }
      }
    }
  `;

  return (
    <Intro>
      <div>
        <Tada>
          <h1 data-aos="zoom-in">HI THERE, I'M MEISAM.</h1>
        </Tada>
        <p data-aos="zoom-out">
          Full-stack software engineer with a background in computer science. I
          am a motivated self-starter with a persistent drive to succeed. I am
          currently seeking new opportunities to learn and develop new skills in
          the field. My passion lies in utilizing development as a means of
          making positive social change by teaching others the value and
          potential of technology. With a focus on building intuitive,
          user-friendly applications, my ultimate goal is to improve the overall
          user experience.
          <span className="blinking">_</span>
        </p>
        <a
          className="projectLink"
          href="./pdf/Meisam_Poorzand_Resume.pdf"
          download="Meisam_Poorzand_Resume.pdf"
        >
          <button data-aos="zoom-out" className="projectButton">
            Download my resume&nbsp;&nbsp;
            <i className="fas fa-download"></i>
          </button>
        </a>
      </div>
      <HomePageSvg />
    </Intro>
  );
};

export default HomePage;
