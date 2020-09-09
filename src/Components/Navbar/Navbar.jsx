import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Switch from "../Switch/Switch";
import { isMobile } from "react-device-detect";

class Navbar extends Component {
  state = { home: null, skills: null, projects: null, contact: null };

  onMouseEnterHandler = (icon) => {
    // switch (icon) {
    //   case "home":
    //     this.setState({ home: <h4>HOME</h4> });
    //     break;
    //   case "skills":
    //     this.setState({ skills: <h4>SKILLS</h4> });
    //     break;
    //   case "projects":
    //     this.setState({ projects: <h4>PROJECTS</h4> });
    //     break;
    //   case "contact":
    //     this.setState({ contact: <h4>CONTACT</h4> });
    //     break;
    //   default:
    //     break;
    // }
  };

  onMouseLeaveHandler = (text) => {
    switch (text) {
      case "home":
        this.setState({ home: <i className="fas fa-home"></i> });
        break;
      case "skills":
        this.setState({ skills: <i className="fas fa-code"></i> });
        break;
      case "projects":
        this.setState({ projects: <i className="fas fa-project-diagram"></i> });
        break;
      case "contact":
        this.setState({ contact: <i className="fas fa-user"></i> });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    let home = <i className="fas fa-home"></i>;
    let skills = <i className="fas fa-code"></i>;
    let projects = <i className="fas fa-layer-group"></i>;
    let contact = <i className="fas fa-user"></i>;
    this.setState({ home, skills, projects, contact });
  }

  render() {
    console.log(this.props.isDark);
    const NavWrapper = styled.nav`
      border: 1px solid red;
      height: 100vh;
      z-index: 999;
      width: 160px;
      position: fixed;
      left: 0;
      background-color: ${this.props.theme.backgroundColor};
      & > p {
        height: 50%;
        width: 2px;
        background-color: gray;
        position: fixed;
        top: 23.5vh;
        z-index: -1;
        left: 80px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      & > div {
        background-color: transparent;
        position: fixed;
        top: 25vh;
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;
        align-items: center;
        left: 30px;
        z-index: 999;
        width: 100px;

        & > .divLinks {
          & > .link {
            color: ${this.props.theme.linkColor};
            text-decoration: none;
            background-color: rgb(244, 244, 244);
            border-radius: 100px;
            width: 20px;
            height: 20px;
            padding: 15px;
            text-align: center;
            & > i {
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
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            & > i {
              // font-size: 25px;
              // margin-left: -6px;
              // margin-top: -3px;
            }
          }
          & > .isActive {
            color: rgb(255, 255, 255);
            // background-color: rgb(122,42,196);
            background-image: linear-gradient(
              to bottom,
              rgb(117, 101, 236),
              rgb(122, 42, 196)
            ) !important;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
        }
      }

      // @media screen and (max-width: 600px) {
      //   & > .links {
      //     position: fixed;
      //     display: flex;
      //     flex-direction: row;
      //     width: 100%;
      //     height: 50px;
      //     min-height: 50px;
      //     & > .divLinks {
      //       & > .link {
      //         & > i {
      //           font-size: 21px;
      //         }
      //       }
      //     }
      //     & > .themes {
      //       display: none;
      //     }
      //   }
      // }
    `;

    return (
      <NavWrapper>
        <p></p>
        <div>
          <div className="divLinks">
            <NavLink
              activeClassName="isActive"
              className="link"
              to="/"
              exact={true}
              onMouseEnter={
                isMobile ? false : () => this.onMouseEnterHandler("home")
              }
              onMouseLeave={
                isMobile ? false : () => this.onMouseLeaveHandler("home")
              }
            >
              {this.state.home}
            </NavLink>
          </div>
          <div className="divLinks">
            <NavLink
              activeClassName="isActive"
              className="link"
              to="/skills"
              exact={true}
              onMouseEnter={
                isMobile ? false : () => this.onMouseEnterHandler("skills")
              }
              onMouseLeave={
                isMobile ? false : () => this.onMouseLeaveHandler("skills")
              }
            >
              {this.state.skills}
            </NavLink>
          </div>
          <div className="divLinks">
            <NavLink
              activeClassName="isActive"
              className="link"
              to="/projects"
              exact={true}
              onMouseEnter={
                isMobile ? false : () => this.onMouseEnterHandler("projects")
              }
              onMouseLeave={
                isMobile ? false : () => this.onMouseLeaveHandler("projects")
              }
            >
              {this.state.projects}
            </NavLink>
          </div>
          <div className="divLinks">
            <NavLink
              activeClassName="isActive"
              className="link"
              to="/contact"
              exact={true}
              onMouseEnter={
                isMobile ? false : () => this.onMouseEnterHandler("contact")
              }
              onMouseLeave={
                isMobile ? false : () => this.onMouseLeaveHandler("contact")
              }
            >
              {this.state.contact}
            </NavLink>
          </div>
          <div clasName="divLinks">
            <p>{this.props.isDark ? "Dark" : "Light"}</p>
            <Switch
              className="themes"
              handleThemeChange={this.props.handleThemeChange}
              isDark={this.props.isDark}
            />
          </div>
        </div>
      </NavWrapper>
    );
  }
}

export default Navbar;
