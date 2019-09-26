import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends Component {

    render () {
        const NavWrapper = styled.nav`
            width: 100%;
            height: 60px;
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
        `;
        return (
            <NavWrapper>
                <NavLink activeClassName="isActive" exact={true} className="link" to="/">Home</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/about">About</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/projects">Projects</NavLink>
                <NavLink activeClassName="isActive" className="link" to="/contact">Contact Me</NavLink>
                <button type="submit" onClick={ () => this.props.handleThemeChange("darkTheme")}>dark mode</button>
                <button type="submit" onClick={ () => this.props.handleThemeChange("lightTheme")}>light mode</button>
            </NavWrapper>
        )
    }
}

export default Navbar;