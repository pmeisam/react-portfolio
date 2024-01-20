import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
import HomePageSvg from "./a.js";
import { motion } from "framer-motion/dist/framer-motion";
// import "./HomePage.scss";

const Intro = styled.div`
  svg {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: block;
  }

  @media screen and (min-width: 600px) {
    svg {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (min-width: 900px) {
    .svg-container {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
    svg {
      width: 500px;
      height: 500px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 100px auto 0 auto;

  @media screen and (min-width: 900px) {
    margin: 0 auto;
    width: 60%;
    margin-top: 150px;
  }

  @media screen and (min-width: 1100px) {
    width: 50%;
    margin-top: 200px;
  }
`;

const Header = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 28px;

  @media screen and (min-width: 900px) {
    font-size: 38px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 48px;
  }
`;
const Copy = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: rgb(138, 138, 138);
  text-align: left;
  & > .blinking {
    animation: blinkingText 0.8s infinite;
    font-weight: 900;
  }
  @keyframes blinkingText {
    0% {
      color: ${(props) => props.theme.fontColor};
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
      color: ${(props) => props.theme.fontColor};
    }
  }

  /* @media screen and (min-width: 900px) {
    font-size: 38px;
  } */
  @media screen and (min-width: 1100px) {
    font-size: 18px;
  }
`;
const Link = styled.a`
  margin-top: 15px;
  text-decoration: none;
`;
const ResumeButton = styled.button`
  background-image: linear-gradient(
    to bottom,
    rgb(117, 101, 236),
    rgb(122, 42, 196)
  ) !important;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 12px;

  :hover {
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
  }

  @media screen and (min-width: 900px) {
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
  }
`;

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Meisam Poorzand";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Intro>
      <Wrapper>
        <Header
          as={motion.h1}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          initial={{ scale: 0 }}
        >
          HI THERE, I'M MEISAM.
        </Header>
        <Copy
          as={motion.p}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
          initial={{ scale: 0 }}
        >
          Full-stack software engineer with a background in computer science. I
          am a motivated self-starter with a persistent drive to succeed. I am
          currently seeking new opportunities to learn and develop new skills in
          the field. My passion lies in utilizing development as a means of
          making positive social change by teaching others the value and
          potential of technology. With a focus on building intuitive,
          user-friendly applications, my ultimate goal is to improve the overall
          user experience.
          <span className="blinking">_</span>
        </Copy>
        <Link
          as={motion.a}
          href="./pdf/Meisam_Poorzand_Resume.pdf"
          download="Meisam_Poorzand_Resume.pdf"
          animate={{ scale: 1 }}
          transition={{ delay: 2.5 }}
          initial={{ scale: 0 }}
        >
          <ResumeButton>
            <i className="fas fa-download"></i>
            &nbsp;&nbsp; Download my resume
          </ResumeButton>
        </Link>
      </Wrapper>
      <motion.div
        className="svg-container"
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        initial={{ scale: 0 }}
      >
        <HomePageSvg />
      </motion.div>
    </Intro>
  );
};

export default HomePage;
