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
                    this.setState({home: <h4>HOME</h4>});
                    break;
            case "skills":
                    this.setState({skills: <h4>SKILLS</h4>})
                    break;
            case "projects":
                    this.setState({projects: <h4>PROJECTS</h4>});
                    break;
            case "contact":
                    this.setState({contact: <h4>CONTACT ME</h4>});
                    break;
            default:
                break;
        }
    }

    onMouseLeaveHandler = (text) => {
        switch(text) {
            case "home":
                    this.setState({home: <i className="fas fa-home"></i>});
                    break;
            case "skills":
                    this.setState({skills: <i className="fas fa-code"></i>})
                    break;
            case "projects":
                    this.setState({projects: <i className="fas fa-project-diagram"></i>});
                    break;
            case "contact":
                    this.setState({contact: <i className="fas fa-user"></i>});
                    break;
            default: 
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
        let home = <i className="fas fa-home"></i>;
        let skills = <i className="fas fa-code"></i>;
        let projects = <i className="fas fa-project-diagram"></i>;
        let contact = <i className="fas fa-user"></i>;
        this.setState({home, skills, projects, contact});
    }

    render () {
        const NavWrapper = styled.nav`
            
            i {
                font-size: 30px;
            }
            
            .navWrapper {
                display: none;
            }
            .links {
                text-align: center;
                background-color: red;
                width: 90px;
                min-height: 100vh;
                position: fixed;
                background-color: ${this.props.theme.backgroundColor};
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 80vh;
                // margin: auto 0;
                &> .divLinks {

                    display: flex;
                    flex-direction: columnt;
                    align-items: center;
                    justify-content: center;

                    & > .link {
                        color: ${this.props.theme.linkColor};
                        font-size: 15px;
                        text-decoration: none;
                        position: absolute;
                       
                    }
                    & > .link:hover {
                        color: #f04;
                    }
                    & > .isActive {
                        color: #f04;
                        // border-bottom: 4px solid ${this.props.theme.borderColor};
                    }
                }
               
            }

            
          
           
            @media screen and (max-width: 600px) {
                
                .links {
                    display: none;
                }
                .navWrapper {
                    max-height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;            
                    & > .icon {
                        display: inline;
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
                    align-items: flex-start;
                    justify-content: space-around;
                    margin-top: 45px;
                    // position: relative;
                    height: 40px;
                    width: 100vw;
                    // margin: 0;
                    // & > .icon {
                    //     position: absolute;
                    //     right: 0;
                    //     top: 0;
                    // }
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
                        margin-top: -16px;
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
                    <div className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/" exact={true} onMouseEnter={() => this.onMouseEnterHandler("home")} onMouseLeave={() => this.onMouseLeaveHandler("home")} >{this.state.home}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/skills" onMouseEnter={() => this.onMouseEnterHandler("skills")} onMouseLeave={() => this.onMouseLeaveHandler("skills")} >{this.state.skills}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/projects" onMouseEnter={() => this.onMouseEnterHandler("projects")} onMouseLeave={() => this.onMouseLeaveHandler("projects")} >{this.state.projects}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/contact" onMouseEnter={() => this.onMouseEnterHandler("contact")} onMouseLeave={() => this.onMouseLeaveHandler("contact")} >{this.state.contact}</NavLink>
                    </div>
                    <div className="themes">
                        <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

export default Navbar;