import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
import { ThemeContext } from "../../Context/ThemeContext";
import HomePageSvg from "./undraw_festivities_tvvj";
import "./HomePage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import slideInLeft from 'react-animations/lib/slide-in-left';
// import Tada from 'react-reveal/Tada';

const HomePage = () => {
  const [intro, setIntro] = useState(null);
  const [bio, setBio] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Meisam Poorzand";
    window.scrollTo(0, 0);
    let intro = "HI THERE, I'M MEISAM";
    let biography =
      "I'm a backend developer at Lightstorm Entertainment and a fullstack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    biography = biography.toUpperCase();
    intro = intro.toUpperCase();
    setIntro(intro);
    // setBio(biography);
    //   let biography =
    //     "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    //   this.setState({ theText: biography });

    setBio(biography);
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
      font-size: 4.9vw;
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
    }
    & > div {
      display: grid;
      grid-template-rows: 1fr 2fr 1fr;
      width: 77%;
      & > .projectLink {
        z-index: 999;
        cursor: pointer;
        margin-top: -50px;
        & > .projectButton {
          // position: absolute;
          // top: 55%;
          background-image: linear-gradient(
            to right,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
          width: 200px;
          height: 50px;
          border-radius: 60px;
          border: none;
          color: white;
          cursor: pointer;
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
      right: 0;
      bottom: 0;
      width: 38vw;
    }

    @media screen and (max-width: 900px) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;

      & > svg {
        width: 99vw;
        height: 50%;
        left: 0;
      }
      & > div {
        & > p {
          margin: -30px 0 20px 0;
        }
        & > svg {
          z-index: -1;
        }
      }
    }
    @media screen and (max-width: 600px) {
      & > svg {
        width: 86vw;
        height: 50%;
        left: 7vw;
        bottom: -5vh;
      }
      & > div {
        width: 98%;
        grid-template-rows: auto auto auto;
        & > p {
          margin-top: -15px;
          font-size: 16px;
        }
        & > .projectLink {
          z-index: 999;
          margin-top: 7px;
          & > .projectButton {
            background-image: linear-gradient(
              to right,
              rgb(117, 101, 236),
              rgb(122, 42, 196)
            ) !important;
            width: 200px;
            height: 45px;
            border-radius: 60px;
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
          <h1 data-aos="zoom-in">{intro}</h1>
        </Tada>
        <p data-aos="zoom-out">
          {bio ? bio.toUpperCase() : null}
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
