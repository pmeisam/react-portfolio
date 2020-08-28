import React from 'react';
import styled from 'styled-components';

const ProjectComponent = props => {

 
    const Project = styled.div`
        display: flex;
        width: 60%;
        flex-direction: row;
        & > img {
            width: 870px;
            height: 480px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            text-align: center;
            & > .techs {
                
                    & > p {
                        background-color: ${props.theme.fontColor};
                        color: ${props.theme.backgroundColor};
                        border-radius: 5px;
                    }
                
            }
            & > .links {
                & > a {
                    & > i {
                        color: #f04;
                    }
                }
            }
        }
       
        @media screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            height: 100%;
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
                }
                & > p {
                    font-size: 12px;
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
                        font-size: 40px;
                    }
                }
            }
        }
    `;

        
    return (
       
            props.project ? (
                <Project>
                    <img src={props.project.img} alt=""/>
            
                    <div>
                        <h1>{props.project.name}</h1>
                        <p>{props.project.description}</p>

                        <div className="techs">
                            {props.project.toolsUsed.map( t => <p>{t}</p>)}
                        </div>

                        <div className="links">
                            <a rel="noopener noreferrer" target="_blank" href={props.project.link}>
                                <i className="fas fa-link"></i>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href={props.project.gitHubLink}>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                    </div>
                </Project>)
            : 
            <p>loading...</p>  
    )
}

export default ProjectComponent;

