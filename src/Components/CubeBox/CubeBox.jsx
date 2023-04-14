import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import SkillIcon from "../../Components/SkillIcon/SkillIcon.jsx";

const CubeWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 19vh auto;
  perspective: 1000px;
`;

const Cube = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${(props) => `rotateX(${props.x}deg) rotateY(${props.y}deg)`};
`;

const CubeFace = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  /* Set the background color of each face */
  ${(props) => css`
    background-color: ${props.color};
  `}

  /* Rotate each face to its correct position */
  ${(props) => {
    switch (props.face) {
      case "front":
        return css`
          transform: translateZ(200px);
          z-index: 1;
        `;
      case "back":
        return css`
          transform: rotateY(180deg) translateZ(200px);
          z-index: 2;
        `;
      case "left":
        return css`
          transform: rotateY(-90deg) translateZ(200px);
          z-index: 3;
        `;
      case "right":
        return css`
          transform: rotateY(90deg) translateZ(200px);
          z-index: 4;
        `;
      case "top":
        return css`
          transform: rotateX(90deg) translateZ(200px);
          z-index: 5;
        `;
      case "bottom":
        return css`
          transform: rotateX(-90deg) translateZ(200px);
          z-index: 6;
        `;
      default:
        return null;
    }
  }}
`;

const CubeBox = () => {
  const [rotation, setRotation] = useState({ x: -20, y: 45 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const cubeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - startPosition.x;
        const deltaY = event.clientY - startPosition.y;

        setRotation({
          x: rotation.x - deltaY,
          y: rotation.y + deltaX,
        });

        setStartPosition({ x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startPosition, rotation]);

  const size = 100;

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
    setCurrentPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <CubeWrapper>
      <Cube
        x={rotation.x}
        y={rotation.y}
        rotation={rotation}
        ref={cubeRef}
        onMouseDown={handleMouseDown}
      >
        <CubeFace face="front" color="rgba(162,167,169, 1)">
          <SkillIcon
            name={"Angular.js"}
            icon={<i className="devicon-angularjs-plain-wordmark colored"></i>}
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
        </CubeFace>
        <CubeFace face="back" color="rgba(162,167,169, 1)">
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
        </CubeFace>
        <CubeFace face="left" color="rgba(142,148,151, 1)">
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
        </CubeFace>
        <CubeFace face="right" color="rgba(142,148,151, 1)">
          <SkillIcon
            name={"Bootstrap"}
            icon={<i class="devicon-bootstrap-plain"></i>}
          />
          <SkillIcon
            name={"Material UI"}
            icon={<i class="devicon-materialui-plain"></i>}
          />
          <SkillIcon
            name={"MongoDB"}
            icon={<i className="devicon-mongodb-plain-wordmark colored"></i>}
          />
          <SkillIcon
            name={"PostgreSQL"}
            icon={<i className="devicon-postgresql-plain-wordmark colored"></i>}
          />
          <SkillIcon
            name={"MySQL"}
            icon={<i className="devicon-mysql-plain-wordmark colored"></i>}
          />
        </CubeFace>
        <CubeFace face="top" color="rgba(203,205,206, 1)">
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
            icon={<i className="devicon-cplusplus-plain-wordmark colored"></i>}
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
        </CubeFace>
        <CubeFace face="bottom" color="rgba(203,205,206, 1)">
          <SkillIcon
            name={"jQuery"}
            icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
          />
          <SkillIcon
            name={"HTML"}
            icon={<i className="devicon-html5-plain-wordmark colored"></i>}
          />
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
        </CubeFace>
      </Cube>
    </CubeWrapper>
  );
};

export default CubeBox;
