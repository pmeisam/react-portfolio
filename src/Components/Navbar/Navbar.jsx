import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Switch from '../Switch/Switch';
import './Navbar.scss';


class Navbar extends Component {

    handleClick = () => {
        const nav = document.getElementById("myNav");
        if (nav.className === "navWrapper") {
            nav.className += " responsive";
        } else {
            nav.className = "navWrapper";
        }
    }

    render () {
        const NavWrapper = styled.nav`
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            // border-bottom: 1px solid ${this.props.theme.borderColor};
            & > .link {
                color: ${this.props.theme.linkColor};
                font-size: 25px;
                text-decoration: none;
                font-weight: 800;
                margin: 40px;
                padding: 20px;
            }
            & > .isActive {
                border-bottom: 4px solid ${this.props.theme.linkColor};
            }
            & > .themes {
                background-color: transparent;
                padding: 10px;
                margin-left: auto;
                min-height: 50px;
                & > .darkMode {
                    // background-color: #191A1C;
                    background-color: black;
                    width: 50px;
                    height: 50px;
                    border-bottom-left-radius: 10px;
                    border: none;
                }
                & > .lightMode {
                    // background-color: #E2E2E2;
                    background-color: white;
                    width: 50px;
                    height: 50px;
                    border-bottom-left-radius: 10px;
                    border: none;
                }
                & > .darkMode:hover {
                    // width: 50px;
                    height: 70px;
                    content: "Dark Mode";
                }
                & > .lightMode:hover {
                    // width: 50px;
                    height: 70px;
                    content: "Light Mode";
                }
            }
           
        `;
        return (
            <NavWrapper className="navWrapper" id="myNav">
                <NavLink  exact={true} className="link" to="/"> Meisam Poorzand</NavLink>
                <NavLink activeClassName="isActive" exact={true} className="link response" to="/">HOME</NavLink>
                <NavLink activeClassName="isActive" className="link response" to="/skills">SKILLS</NavLink>
                <NavLink activeClassName="isActive" className="link response" to="/projects">PROJECTS</NavLink>
                <NavLink activeClassName="isActive" className="link response" to="/contact">CONTACT ME</NavLink>
                <div className="themes response">
                    <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                </div>
                <div className="icon">
                    <i className="fas fa-bars" onClick={this.handleClick}></i>
                </div>              
            </NavWrapper>
        )
    }
}

export default Navbar;