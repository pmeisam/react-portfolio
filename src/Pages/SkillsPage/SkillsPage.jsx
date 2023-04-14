import React, { useEffect, useState } from "react";
import SkillIcon from "../../Components/SkillIcon/SkillIcon";
import styled from "styled-components";

const ProgressCube = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);
  }, []);

  return (
    <SkillsWrapper>
      <div className="progress"></div>
      <div className="cube-wrap">
        <div
          className="cube"
          style={{
            transform: `rotateX(${
              scrollPosition / 5
            }deg) rotateZ(45deg) rotateY(-45deg)`,
          }}
        >
          <div className="side top">
            <SkillIcon
              name={"Node.js"}
              icon={<i className="devicon-nodejs-plain colored"></i>}
            />
            <SkillIcon
              name={"Express"}
              icon={<i className="devicon-express-original"></i>}
            />
            <SkillIcon
              name={"Python"}
              icon={<i className="devicon-python-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Django"}
              icon={<i className="devicon-django-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Java"}
              icon={<i className="devicon-java-plain-wordmark colored"></i>}
            />
          </div>
          <div className="side bottom">
            <SkillIcon
              name={"Angular.js"}
              icon={
                <i className="devicon-angularjs-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"React.js"}
              icon={<i className="devicon-react-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Vue.js"}
              icon={<i className="devicon-vuejs-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"TypeScript"}
              icon={<i className="devicon-typescript-plain colored"></i>}
            />
            <SkillIcon
              name={"JavaScript"}
              icon={<i className="devicon-javascript-plain colored"></i>}
            />
          </div>
          <div className="side front">
            <SkillIcon
              name={"jQuery"}
              icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"HTML"}
              icon={<i className="devicon-html5-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"MongoDB"}
              icon={<i className="devicon-mongodb-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"PostgreSQL"}
              icon={
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"MySQL"}
              icon={<i className="devicon-mysql-plain-wordmark colored"></i>}
            />
          </div>
          <div className="side back">
            <SkillIcon
              name={"GitHub"}
              icon={<i className="devicon-github-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Git"}
              icon={<i className="devicon-git-plain colored"></i>}
            />

            <SkillIcon
              name={"Heroku"}
              icon={<i className="devicon-heroku-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"Jenkins"}
              icon={<i className="devicon-jenkins-plain colored"></i>}
            />

            <SkillIcon
              name={"nginx"}
              icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
            />
          </div>
          <div className="side left">
            <SkillIcon
              name={"Spring"}
              icon={<i class="devicon-spring-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"C"}
              icon={<i className="devicon-c-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"C++"}
              icon={
                <i className="devicon-cplusplus-plain-wordmark colored"></i>
              }
            />
            <SkillIcon
              name={"Firebase"}
              icon={<i className="devicon-firebase-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"AWS"}
              icon={
                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
              }
            />
          </div>
          <div className="side right">
            <SkillIcon
              name={"CSS"}
              icon={<i className="devicon-css3-plain-wordmark colored"></i>}
            />
            <SkillIcon
              name={"SASS"}
              icon={<i className="devicon-sass-original colored"></i>}
            />
            <SkillIcon
              name={"wordpress"}
              icon={<i className="devicon-wordpress-plain-wordmark"></i>}
            />
            <SkillIcon
              name={"Bootstrap"}
              icon={<i class="devicon-bootstrap-plain"></i>}
            />
            <SkillIcon
              name={"Material UI"}
              icon={<i class="devicon-materialui-plain"></i>}
            />
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
};

export default ProgressCube;

const SkillsWrapper = styled.section`
  padding: 0;
  margin: 0;
  min-height: 500vh;

  .progress {
    height: 3px;
    width: 0%;
    background-color: #fff;
    position: fixed;
    top: 200;
    left: 0;
    animation: progress 1s linear;
  }

  @keyframes progress {
    to {
      background-color: rgb(20, 255, 226);
      width: 100%;
    }
  }

  .cube-wrap {
    --size: 38vmin;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    perspective: 100vmin;
    // transform-style: preserve-3d;
    // transform: translateZ(-100px) rotateX(40deg) rotateZ(45deg) rotateY(-45deg);
    // transition: transform 0.5s ease-in-out;
  }

  .cube {
    // width: var(--size);
    // height: var(--size);
    transform-style: preserve-3d;
    // transform: rotateX(0deg) rotateZ(45deg) rotateY(-45deg);
    animation: cube 1s linear;
  }

  @keyframes cube {
    to {
      transform: rotateX(360deg) rotateZ(45deg) rotateY(-45deg);
    }
  }

  .side {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: #eee;
    backface-visibility: visible;
    top: calc(var(--size) * -0.5);
    left: calc(var(--size) * -0.5);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .top {
    background-color: #aaa;
    transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
  }

  .bottom {
    background-color: #999;
    transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
  }

  .left {
    background-color: #ccc;
    transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
  }

  .right {
    background-color: #ddd;
    transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
  }

  .front {
    background-color: #aaa;
    transform: translateZ(calc(var(--size) * 0.5));
  }

  .back {
    background-color: #bbb;
    transform: translateZ(calc(var(--size) * -0.5));
  }

  :root {
    --scroll: 0;
  }

  :root * {
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
`;
