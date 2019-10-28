import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Switch from '../Switch/Switch';
// import './Navbar.scss';


class Navbar extends Component {

    handleClick = () => {
        const nav = document.getElementById("myNav");
        if (nav.className === "links") {
            nav.className += " responsive";
        } else {
            nav.className = "links";
        }
    }

    render () {
        const NavWrapper = styled.nav`
            position: fixed;
            z-index: 999;
            background-color: ${this.props.theme.backgroundColor};
            padding: 10px;
            width: 100%;
            height: 60px;
            top: 0;
            .navWrapper {
                display: none;
            }
            .links {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                & > .link {
                    color: ${this.props.theme.linkColor};
                    font-size: 25px;
                    text-decoration: none;
                    font-weight: 800;
                    padding: 0 20px 10px 20px;
                }
                & > .isActive {
                    border-bottom: 4px solid ${this.props.theme.borderColor};
                }
            }

            
          
           
            @media screen and (max-width: 600px) {
                .links {
                    & > .link {
                        display: none;
                    }
                    & > .themes {
                        display: none;
                    }
                }
                .navWrapper {
                    
                    max-width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    min-height: 50px;
                    justify-content: space-between;
                                         
                    & > .icon {
                        display: inline;
                        // margin-left: auto;
                        margin-top: 10px;
                        margin-right: 10px;
                        float: right;
                        & > .fa-bars {
                            font-size: 40px;
                        }
                    }
                    
                    & > .logo {
                        color: ${this.props.theme.linkColor};
                        font-size: 25px;
                        text-decoration: none;
                        font-weight: 800;
                    }
                }
                .responsive {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    margin: 20px;
                    & > .icon {
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    & > .link {
                        display: block;
                        text-align: left;
                        color: ${this.props.theme.linkColor};
                        font-size: 22px;
                        text-decoration: none;
                        font-weight: 800;
                    }
                    & > .themes {
                        display: block;
                    }
                    & > .isActive {
                        // border-bottom: 4px solid ${this.props.theme.linkColor};
                        background-color: ${this.props.theme.linkColor};
                        color: ${this.props.theme.backgroundColor};
                    }
                    
                }
            }
            
           

        `;
        
        
        return (
            <NavWrapper >
                <div className="navWrapper" >
                    <NavLink  exact={true} className="logo" to="/"> Meisam Poorzand</NavLink>
                    <div className="icon">
                        <i className="fas fa-bars" onClick={this.handleClick}></i>
                    </div> 
                </div>  
                <div className="links" id="myNav">
                    <NavLink activeClassName="isActive" className="link" to="/" exact={true}>HOME</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/skills">SKILLS</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/projects">PROJECTS</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/contact">CONTACT ME</NavLink>
                    <div className="themes">
                        <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

export default Navbar;