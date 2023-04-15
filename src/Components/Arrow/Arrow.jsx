import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

export default function ({ upRef, downRef, down, up }) {
  const { theme } = useContext(ThemeContext);

  const EmptySpace = styled.div`
    height: 10vh;
    width: 100%;
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  const DownArrow = styled.div`
    height: 10vh;
    width: 30%;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    animation: 1s linear 0s infinite normal none running animate;
    cursor: pointer;

    @keyframes animate {
      0% {
        border-color: ${theme.fontColor};
        transform: translate(0, 0);
      }
      20% {
        border-color: ${theme.fontColor};
        transform: translate(0px, 10px);
      }
      20.1%,
      100% {
        border-color: #ffd64a;
      }
    }
    .arow_project_page {
      display: inline-block;
      border-bottom-style: solid;
      border-bottom-width: 3px;
      border-right-style: solid;
      border-right-width: 3px;
      width: 30px;
      height: 30px;
    }

    .arrow {
      transform: translateY(39px) rotate(45deg);
      border-color: ${theme.fontColor};
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  const UpArrow = styled.div`
    height: 10vh;
    width: 30%;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: 1s linear 0s infinite normal none running animate;
    cursor: pointer;

    @keyframes animate {
      0% {
        border-color: ${theme.fontColor};
        transform: translate(0, 0);
      }
      20% {
        border-color: ${theme.fontColor};
        transform: translate(0px, 10px);
      }
      20.1%,
      100% {
        border-color: #ffd64a;
      }
    }
    .arow_project_page {
      display: inline-block;
      border-top-style: solid;
      border-top-width: 3px;
      border-right-style: solid;
      border-right-width: 3px;
      width: 30px;
      height: 30px;
    }

    .arrow {
      transform: translateY(39px) rotate(315deg);
      border-color: ${theme.fontColor};
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  if (down) {
    return (
      <DownArrow
        onClick={() => {
          downRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* <span className="arow_project_page iahmp1"></span> */}
        {/* <span className="arow_project_page iahmp2"></span> */}
        <span className="arow_project_page arrow"></span>
        {/* <span className="arow_project_page iahmp4"></span> */}
      </DownArrow>
    );
  } else if (up) {
    return (
      <UpArrow
        onClick={() => {
          upRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* <span className="arow_project_page iahmp1"></span> */}
        {/* <span className="arow_project_page iahmp2"></span> */}
        <span className="arow_project_page arrow"></span>
        {/* <span className="arow_project_page iahmp4"></span> */}
      </UpArrow>
    );
  } else {
    return <EmptySpace />;
  }
}
