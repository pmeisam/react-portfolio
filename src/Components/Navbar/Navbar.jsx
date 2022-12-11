import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Switch from "../Switch/Switch";
import { ThemeContext } from "../../Context/ThemeContext";
// import { isMobile } from "react-device-detect";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const [home, setHome] = useState(null);
  const [skills, setSkills] = useState(null);
  const [projects, setProjects] = useState(null);
  const [contact, setContact] = useState(null);
  const [setting, setSetting] = useState(null);
  const [text, setText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let home = <i className="fas fa-home"></i>;
    let skills = <i className="fas fa-code"></i>;
    let projects = <i className="fas fa-layer-group"></i>;
    // let profile = <i className="fas fa-user"></i>;
    let contact = <i className="fas fa-phone"></i>;
    let setting = <i className="fas fa-cog"></i>;

    setHome(home);
    setSkills(skills);
    setProjects(projects);
    // setProfile(profile);
    setContact(contact);
    setSetting(setting);
    console.log("pathname: " + pathname);

    if (pathname === "/") {
      setText("HOME");
    }
    if (pathname === "/skills") {
      setText("SKILLS");
    }
    if (pathname === "/projects") {
      setText("PROJECTS");
    }
    if (pathname === "/contact") {
      setText("CONTACT");
    }
  }, [location.pathname]);

  const NavWrapper = styled.nav`
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    height: 100vh;
    z-index: 999;
    width: 160px;
    position: fixed;
    left: 0;

    & > div:before {
      content: "";
      height: 46%;
      width: 3px;
      background-color: rgb(244, 244, 244);
      position: fixed;
      top: 19vh;
      z-index: -1;
      left: 52px;
    }

    & > div {
      background-color: transparent;
      position: fixed;
      top: 15vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 52%;
      align-items: baseline;
      z-index: 999;
      width: 160px;
      margin-left: 30px;

      & > .settingContent {
        margin-top: -30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: -17px;
        & > .setting {
          display: none;
        }
      }
      & > .link {
        flex-basis: 20%;
        display: flex;
        align-items: center;
        & > .divLinks {
          width: 45px;
          height: 45px;
          background-color: rgb(244, 244, 244);
          color: rgb(48, 32, 66);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        & > .divLinks:hover {
          color: rgb(255, 255, 255);
          background: linear-gradient(
            to bottom,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
        }
      }
      & > .isActive {
        // width: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        ::before {
          display: none;
          content: "";
          height: 3px;
          width: 21px;
          background-color: rgb(244, 244, 244);
          position: fixed;
          z-index: -1;
          left: 70px;
          border-radius: 10px;
          animation: fadeIn linear 4s;
          -webkit-animation: fadeIn linear 4s;
          -moz-animation: fadeIn linear 4s;
          -o-animation: fadeIn linear 4s;
          -ms-animation: fadeIn linear 4s;
          box-shadow: 1px 1px 4px rgb(244, 244, 244, 0.5);
        }
        ::after {
          content: "${text}";
          color: ${theme.fonColor};
          text-shadow: 0 0 10px ${theme.fonColor};
          margin-left: 15px;
          font-weight: 600;
          animation: fadeIn linear 4s;
          -webkit-animation: fadeIn linear 4s;
          -moz-animation: fadeIn linear 4s;
          -o-animation: fadeIn linear 4s;
          -ms-animation: fadeIn linear 4s;
        }
        & > .divLinks {
          color: rgb(255, 255, 255);
          background-image: linear-gradient(
            to bottom,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
          box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
        }
      }
      & > .divLinks:hover {
        color: rgb(255, 255, 255);
        background-color: linear-gradient(
          to bottom,
          rgb(117, 101, 236),
          rgb(122, 42, 196)
        ) !important;
        -webkit-transition: background-color 2s ease-out;
        -moz-transition: background-color 2s ease-out;
        -o-transition: background-color 2s ease-out;
        transition: background-color 2s ease-out;
      }
    }

    @media screen and (max-width: 900px) {
      height: 60px;
      z-index: 999;
      width: 100%;
      position: fixed;
      left: 0;
      & > div:before {
        content: "";
        height: 1px;
        width: 70vw;
        background-color: rgb(244, 244, 244);
        position: fixed;
        top: 30px;
        left: 18vw;
        z-index: -1;
      }
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        background-color: transparent;
        top: 0px;
        left: 10vw;
        height: 60px;
        width: 80vw;
        z-index: 999;
        margin-top: 10px;
        margin-left: unset;
        & > .settingContent {
          margin-top: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          margin-left: unset;
          & > .setting {
            display: flex;
            color: rgb(48, 32, 66);
            background-color: rgb(244, 244, 244);
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
          & > .setting:after {
            content: "";
            width: 2px;
            height: 50px;
            background-color: rgb(244, 244, 244);
            position: fixed;
            top: 30px;
            z-index: -1;
          }
        }
        & .link {
          flex-basis: 20%;
          justify-self: center;
          & .divLinks {
            width: 40px;
            height: 40px;
            font-size: 15px;
          }
        }
        & .isActive {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          ::before {
            z-index: -1;
            top: 50px;
            left: unset;
            width: 2px;
            height: 20px;
          }
          ::after {
            margin-left: unset;
            margin-top: 16px;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      & > div:before {
        width: 72vw;
        background-color: rgb(244, 244, 244);
        position: fixed;
        top: 28px;
        left: 17vw;
        height: 1px;
        z-index: -1;
      }
      & > div {
        position: fixed;
        top: 4px;
        left: 10vw;
        & .link {
          & .divLinks {
            width: 30px;
            height: 30px;
            font-size: 12px;
          }
        }
        & .isActive {
          ::before {
            top: 44px;
          }
          ::after {
            font-size: 9px;
            margin-top: 10px;
          }
        }
        & > .settingContent {
          margin-top: 0px;
          & > .setting:after {
            // width: 1px;
            height: 30px;
          }
          & > .setting {
            width: 30px;
            height: 30px;
          }
          & > div {
            margin-top: 10px;
          }
        }
      }
    }
  `;

  return (
    <NavWrapper>
      <div>
        <NavLink
          activeClassName="isActive"
          className="link"
          to="/"
          exact={true}
          // onMouseEnter={
          //   isMobile ? false : () => this.onMouseEnterHandler("home")
          // }
          // onMouseLeave={
          //   isMobile ? false : () => this.onMouseLeaveHandler("home")
          // }
        >
          <div className="divLinks">{home}</div>
        </NavLink>

        <NavLink
          activeClassName="isActive"
          className="link"
          to="/skills"
          exact={true}
          // onMouseEnter={
          //   isMobile ? false : () => this.onMouseEnterHandler("skills")
          // }
          // onMouseLeave={
          //   isMobile ? false : () => this.onMouseLeaveHandler("skills")
          // }
        >
          <div className="divLinks">{skills}</div>
        </NavLink>

        <NavLink
          activeClassName="isActive"
          className="link"
          to="/projects"
          exact={true}
          // onMouseEnter={
          //   isMobile ? false : () => this.onMouseEnterHandler("projects")
          // }
          // onMouseLeave={
          //   isMobile ? false : () => this.onMouseLeaveHandler("projects")
          // }
        >
          <div className="divLinks">{projects}</div>
        </NavLink>
        <NavLink
          activeClassName="isActive"
          className="link"
          to="/contact"
          exact={true}
          // onMouseEnter={
          //   isMobile ? false : () => this.onMouseEnterHandler("contact")
          // }
          // onMouseLeave={
          //   isMobile ? false : () => this.onMouseLeaveHandler("contact")
          // }
        >
          <div className="divLinks">{contact}</div>
        </NavLink>
        {/* <div className="divLinks">
          <NavLink
            activeClassName="isActive"
            className="link"
            to="/profile"
            exact={true}
          >
            {profile}
          </NavLink>
        </div> */}
        <div className="settingContent">
          <p className="setting">{setting}</p>
          <Switch className="themes" />
        </div>
      </div>
    </NavWrapper>
  );
}

export default Navbar;
