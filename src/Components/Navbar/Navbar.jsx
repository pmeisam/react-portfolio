import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Switch from '../Switch/Switch';


class Navbar extends Component {

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
            <NavWrapper>
                <NavLink activeClassName="isActive" exact={true} className="link" to="/">HOME</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/skills">SKILLS</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/projects">PROJECTS</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/contact">CONTACT ME</NavLink>
                <div className="themes">
                    <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                </div>              
            </NavWrapper>
        )
    }
}

export default Navbar;