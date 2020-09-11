import React, { useContext, useEffect } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
// import slideInUp from 'react-animations/lib/slide-in-up';

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Meisam Poorzand | Contact";
  })

  const Contact = styled.div`
    font-family: "Saira Stencil One", cursive;
    animation: 2s ${keyframes`${slideInUp}`} 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    & > .title {
      color: ${theme.fontColor};
      text-decoration: none;
      font-size: 50px;
      & > h1 {
        margin: -75px 0;
      }
    }
    & > .email {
      color: ${theme.fontColor};
      text-decoration: none;
      font-size: 64px;
    }
    & > .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
      & > .icon {
        color: ${theme.fontColor};
        font-size: 40px;
      }
    }

    @media screen and (max-width: 900px) {
      & > .icons {
        display: flex;
        justify-content: space-around;
        width: 70%;
        color: ${theme.fontColor};
        font-size: 45px;
      }
    }

    @media screen and (max-width: 600px) {
      & > .title {
        font-size: 25px;
        & > h1 {
          margin: -30px 0;
        }
      }

      & > .email {
        font-size: 32px;
      }

      & > .icons {
        color: ${theme.fontColor};
        font-size: 45px;
        display: flex;
        justify-content: space-around;
        width: 90%;
      }
    }
  `;
  
  return (
    <Contact>
      <a className="title" href="https://www.meisam.org">
        <h1>MEISAM</h1>
        <h1>POORZAND</h1>
      </a>
      <a className="email" href="mailto: info@meisam.org">
        <h4>info@meisam.org</h4>
      </a>
      <div className="icons">
        <a _blank className="icon" href="https://www.linkedin.com/in/pmeisam">
          <i className="fab fa-linkedin"></i>
        </a>

        <a _blank className="icon" href="https://www.facebook.com/pmeisam">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a _blank className="icon" href="https://www.twitter.com/pmeisam">
          <i className="fab fa-twitter-square"></i>
        </a>

        <a _blank className="icon" href="https://www.instagram.com/me.i.sam/">
          <i className="fab fa-instagram"></i>
        </a>

        <a _blank className="icon" href="https://www.github.com/pmeisam">
          <i className="fab fa-github"></i>
        </a>

        <a _blank className="icon" href="mailto: info@meisam.org">
          <i className="fas fa-envelope-open-text"></i>
        </a>
      </div>
    </Contact>
  );
};

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me
