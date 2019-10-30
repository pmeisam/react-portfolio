import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Switch from '../Switch/Switch';
// import './Navbar.scss';


class Navbar extends Component {

    state = {home: null, skills: null, projects: null, contact: null};

    onMouseEnterHandler = (icon) => {
        switch(icon) {
            case "home":
                    this.setState({home: "HOME"});
                    break;
            case "skills":
                    this.setState({skills: "SKILLS"})
                    break;
            case "projects":
                    this.setState({projects: "PROJECTS"});
                    break;
            case "contact":
                    this.setState({contact: "CONTACT ME"});
                    break;
        }
    }

    onMouseLeaveHandler = (text) => {
        switch(text) {
            case "home":
                    this.setState({home: <i class="fas fa-building"></i>});
                    break;
            case "skills":
                    this.setState({skills: <i class="fas fa-code"></i>})
                    break;
            case "projects":
                    this.setState({projects: <i class="fas fa-project-diagram"></i>});
                    break;
            case "contact":
                    this.setState({contact: <i class="fas fa-user"></i>});
                    break;
        }
    }

    handleClick = () => {
        const nav = document.getElementById("myNav");
        if (nav.className === "links") {
            nav.className += " responsive";
        } else {
            nav.className = "links";
        }
    }

    componentDidMount() {
        let home = <i class="far fa-building"></i>;
        let skills = <i class="fas fa-code"></i>;
        let projects = <i class="fas fa-project-diagram"></i>;
        let contact = <i class="far fa-user"></i>;
        this.setState({home, skills, projects, contact});
    }

    render () {
        const NavWrapper = styled.nav`
            i {
                font-size: 30px;
            }
            display: flex;
            flex-direction: column;
            height: 100vh;
            position: fixed;
            z-index: 999;
            background-color: ${this.props.theme.backgroundColor};
            padding: 10px;
            width: 80px;
            // height: 60px;
            top: 0;
            .navWrapper {
                display: none;
            }
            .links {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 80vh;
                margin: auto 0;
                & > .link {
                    color: ${this.props.theme.linkColor};
                    font-size: 15px;
                    text-decoration: none;
                    // font-weight: 800;
                    // padding: 0 20px 10px 20px;
                }
                & > .link:hover {
                    color: #f04;
                }
                & > .isActive {
                    color: #f04;
                    // border-bottom: 4px solid ${this.props.theme.borderColor};
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
                    width: 100vw;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    min-height: 50px;
                    justify-content: space-around;            
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
                    flex-direction: row;
                    position: relative;
                    height: 40px;
                    width: 100vw;
                    margin: 0;
                    & > .icon {
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    & > .link {
                        display: inline;
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
                        color: #f04;
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
                    <NavLink activeClassName="isActive" className="link" to="/" exact={true} onMouseEnter={() => this.onMouseEnterHandler("home")} onMouseLeave={() => this.onMouseLeaveHandler("home")} >{this.state.home}</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/skills" onMouseEnter={() => this.onMouseEnterHandler("skills")} onMouseLeave={() => this.onMouseLeaveHandler("skills")} >{this.state.skills}</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/projects" onMouseEnter={() => this.onMouseEnterHandler("projects")} onMouseLeave={() => this.onMouseLeaveHandler("projects")} >{this.state.projects}</NavLink>
                    <NavLink activeClassName="isActive" className="link" to="/contact" onMouseEnter={() => this.onMouseEnterHandler("contact")} onMouseLeave={() => this.onMouseLeaveHandler("contact")} >{this.state.contact}</NavLink>
                    <div className="themes">
                        <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

export default Navbar;