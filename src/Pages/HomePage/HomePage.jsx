import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
import "./HomePage.scss";
import HomePageSvg from "./undraw_festivities_tvvj";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
// import slideInLeft from 'react-animations/lib/slide-in-left';
// import Tada from 'react-reveal/Tada';

const HomePage = () => {
  const [intro, setIntro] = useState(null);
  const [bio, setBio] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Meisam Poorzand";
    let intro = "HI THERE, I'M MEISAM";
    let bio =
      "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    bio = bio.toUpperCase();
    intro = intro.toUpperCase();
    setIntro(intro);
    setBio(bio);
    //   let bio =
    //     "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    //   this.setState({ theText: bio });
    //   // this.state.bio.split("").forEach((letter, idx) => {
    //   //   setTimeout(() => {
    //   //     this.setState((state) => ({ theText: state.theText + letter }));
    //   //   }, 30 * idx);
    //   // });
    //   // setInterval(() => {
    //   //     if (this.state.cursor) {
    //   //         this.setState({cursor: false});
    //   //     } else {
    //   //         this.setState({cursor: true});
    //   //     }
    //   // },300);
  }, []);

  const Tada = styled.div`
    animation: 3s ${keyframes`${tada}`} 1;
    animation-delay: 0.5s;
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
      display: flex;
      flex-direction: column;
      width: 77%;
      & > .projectLink {
        cursor: pointer;
        & > .projectButton {
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
          margin-top: 20px;
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
        & > .blinking {
          animation: blinkingText 0.8s infinite;
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
      width: 41vw;
    }

    @media screen and (max-width: 900px) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      & > svg {
        width: 100%;
        height: 50%;
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
      & > div {
        width: 98%;
        & > p {
          margin-top: -15px;
          font-size: 11px;
        }
        & > .projectLink {
          z-index: 999;
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
          <h1>{intro}</h1>
        </Tada>
        <p>
          {bio ? bio.toUpperCase() : null}
          <span className="blinking">|</span>
        </p>
        <Link className="projectLink" to="/projects">
          <button className="projectButton">
            Projects&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </Link>
      </div>
      <HomePageSvg />
    </Intro>
  );
};

export default HomePage;
