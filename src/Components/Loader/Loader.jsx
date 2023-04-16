import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderWrapper>
      <div className="loader">
        <div className="loader-bar">
          <div className="loader-left">&lt;</div>
          <div className="loader-slash">/</div>
          <div className="loader-right">&gt;</div>
        </div>
      </div>
    </LoaderWrapper>
  );
}

export default Loader;

const LoaderWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loader-bar {
    display: flex;
    align-items: center;
  }

  .loader-left {
    font-size: 150px;
    font-weight: bold;
    color: rgb(122, 42, 196);
    animation: loader-bar-left 3s infinite;
    margin-right: 10px;
  }

  .loader-right {
    font-size: 150px;
    font-weight: bold;
    color: rgb(117, 101, 236);
    animation: loader-bar-right 3s infinite;
    margin-left: 10px;
  }

  .loader-slash {
    font-size: 150px;
    font-weight: bold;
    color: rgb(119, 60, 208);
  }

  @keyframes loader-bar-left {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-250px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes loader-bar-right {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(250px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 700px) {
    .loader-left,
    .loader-right,
    .loader-slash {
      font-size: 75px;
    }
    @keyframes loader-bar-left {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-100px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes loader-bar-right {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(100px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
