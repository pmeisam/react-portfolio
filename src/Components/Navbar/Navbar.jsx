import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Switch from "../Switch/Switch";
// import { isMobile } from "react-device-detect";

function Navbar() {
  const [home, setHome] = useState(null);
  const [skills, setSkills] = useState(null);
  const [projects, setProjects] = useState(null);
  const [contact, setContact] = useState(null);
  const [setting, setSetting] = useState(null);
  

  useEffect(() => {
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
  }, []);

  const NavWrapper = styled.nav`
    height: 100vh;
    z-index: 999;
    width: 160px;
    position: fixed;
    left: 0;

    & > div:before {
      content: "";
      height: 50%;
      width: 3px;
      background-color: rgb(244, 244, 244);
      position: fixed;
      top: 15.5vh;
      z-index: -1;
      left: 80px;
    }

    & > div {
      background-color: transparent;
      position: fixed;
      top: 17vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50%;
      align-items: center;
      z-index: 999;
      width: 160px;

      & > .settingContent {
        margin-top: -30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > .setting {
          display: none;
          color: rgb(48, 32, 66);
          text-decoration: none;
          background-color: rgb(244, 244, 244);
          border-radius: 100px;
          padding: 14px 0px;
          width: 46px;
          text-align: center;
        }
      }
      & > .divLinks {
        & > .link {
          color: rgb(48, 32, 66);
          text-decoration: none;
          background-color: rgb(244, 244, 244);
          border-radius: 100px;
          padding: 14px 1px;
          text-align: center;
          & > i {
            width: 45px;
            height: 45px;
            font-size: 15px;
          }
        }

        & > .link:hover {
          color: rgb(255, 255, 255);
          background-image: linear-gradient(
            to bottom,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
          box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
        }
        & > .isActive {
          color: rgb(255, 255, 255);
          background-image: linear-gradient(
            to bottom,
            rgb(117, 101, 236),
            rgb(122, 42, 196)
          ) !important;
          box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
          padding: 16px 3px;
          & > i {
            width: 45px;
            height: 45px;
            font-size: 19px;
          }
        }
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
        width: 80vw;
        background-color: rgb(244, 244, 244);
        position: fixed;
        top: 30px;
        left: 10vw;
        z-index: -1;
      }
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background-color: transparent;
        top: 7px;
        left: 10vw;
        height: 60px;
        width: 80vw;
        z-index: 999;
        & > .settingContent {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          & > .setting {
            display: block;
            color: rgb(48, 32, 66);
            text-decoration: none;
            background-color: rgb(244, 244, 244);
            border-radius: 100px;
            padding: 6px 0px;
            width: 29px;
            text-align: center;
          }
          & > .setting:after {
            content: "";
            width: 2px;
            height: 50px;
            // background-color: black;
            background-color: rgb(244, 244, 244);
            position: fixed;
            top: 30px;
            margin-left: -8px;
            z-index: -1;
          }
        }
        & > .divLinks {
          & > .link {
            padding: 3px 2px 7px 2px;

            & > i {
              width: 25px;
              height: 25px;
              font-size: 12px;
            }
          }
          & > .isActive {
            padding: 8px 6px 11px 6px;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      & > div:before {
        width: 75vw;
        background-color: rgb(244, 244, 244);
        position: fixed;
        top: 25px;
        left: 10vw;
        height: 1px;
        z-index: -1;
      }
      & > div {
        position: fixed;
        top: 0;
        left: 10vw;
        & > .settingContent {
          
          & > .setting:after {
            width: 1px;
            height: 25px;
          }
          & > .setting {
            margin-top: -20px;
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
        <div className="divLinks">
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
            {home}
          </NavLink>
        </div>
        <div className="divLinks">
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
            {skills}
          </NavLink>
        </div>

        <div className="divLinks">
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
            {projects}
          </NavLink>
        </div>
        <div className="divLinks">
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
            {contact}
          </NavLink>
        </div>
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
