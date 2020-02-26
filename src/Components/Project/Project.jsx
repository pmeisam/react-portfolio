import React from 'react';
import styled from 'styled-components';
import slideOutDown from 'react-animations/lib/slide-out-down';


const ProjectComponent = props => {

 
    const Project = styled.div`
        display: flex;
        width: 60%;
        margin: 0 auto;
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
                display: grid;
                text-align: center;
                grid-template-columns: auto auto;

              
                    & > p {
                        background-color: ${props.theme.fontColor};
                        color: ${props.theme.backgroundColor};
                        padding: 5px 5px;
                        width: 180px;
                        margin 10px 10px 10px 0;
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
        i {
            font-size: 40px;
            padding: 30px;
        }
        @media screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            
            & > img {
                width: 90%;
                height: 200px;
                margin: 0 auto;
            }
            
            & > div {
                text-align: center;
                width: 80%;
                margin: 0 auto;

                & > .techs {
                    margin: 0 auto;
                    width: 90%;
                    & > div {
                        & > p {
                            width: 100px;
                            font-size: 11px;
                        }
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

