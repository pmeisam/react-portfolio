import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
import Arrow from "../../Components/Arrow/Arrow.jsx";
import LinkSvg from "../SvgIcons/LinkSvg.jsx";
import { motion } from "framer-motion/dist/framer-motion";

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
          font-size: 16px;
          margin-bottom: 4px;
          color: rgb(138, 138, 138);
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
            --c: ${theme.hoverColor};
            --h: 1.2em;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            line-height: var(--h);
            background: linear-gradient(var(--c) 0 0) no-repeat
              calc(200% - var(--_p, 0%)) 100%/200% var(--_p, 0.08em);
            color: ${theme.linkColor};
            overflow: hidden;
            text-shadow: 0 calc(-1 * var(--_t, 0em)) var(--c),
              0 calc(var(1.3em) - var(--_t, 0em)) #fff;
            transition: 0.3s var(--_s, 0s),
              background-position 0.3s calc(0.3s - var(--_s, 0s));
            svg {
              margin-right: 10px;
            }
          }
          & > a:hover {
            --_t: var(--h);
            --_p: 100%;
            --_s: 0.3s;
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
            }
            & > a:hover {
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
            font-size: 22px;
          }
          & > p {
            font-size: 16px;
          }

          & > .links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
          }
        }
      }
    }
  `;

  return props.project ? (
    <Project>
      <Arrow upRef={props.upRef} up={props.up} />
      <motion.div className="project-container">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src={props.project.img}
          alt=""
        />

        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {props.project.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {props.project.description}
          </motion.p>
          {!!props.project.link && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="links"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://` + props.project.link}
              >
                {/* <i className="fas fa-globe-americas"></i> */}
                <LinkSvg width={18} height={18} fill={theme.linkColor} />
                {props.project.link}
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
      <Arrow downRef={props.downRef} down={props.down} />
    </Project>
  ) : (
    <p>loading...</p>
  );
};

export default ProjectComponent;
