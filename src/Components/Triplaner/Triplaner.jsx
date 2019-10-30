import React, { Component } from 'react';
import styled from 'styled-components';


class Triplaner extends Component {

    render () {
        const Project = styled.div`
            display: flex;
            width: 60%;
            margin: 0 auto;
            & > img {
                width: 870px;
                height: 480px;
            }
            & > div {
                
                width: 40%;
                
                & > .techs {
                    display: flex;
                    width: 50%;
                    // margin: 0 auto;
                    text-align: center;

                    & > div {
                        & > p {
                            background-color: ${this.props.theme.fontColor};
                            color: ${this.props.theme.backgroundColor};
                            padding: 5px 5px;
                            width: 140px;
                            margin 10px;
                            border-radius: 5px;
                        }
                    }
                }
            }
            i {
                font-size: 40px;
                padding: 30px;
            }
        `;
        return (
            <Project>
                <img src="images/triplaner.png" alt=""/>
                <div>
                    <h2>TRIPLANER</h2>
                    <p>A full-service travel planning app that matches you with flights and hotels based on your travel budget. Whethere you're planning a romantic getaway, a family vacation, or just need a weekend escape.</p>
                    <div className="techs">
                        <div>
                            <p>Python</p>
                            <p>django</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <p>IATA Codes API</p>
                            <p>Amadeus API</p>
                            <p>Bootstrap</p>
                        </div>
                        
                    </div>
                    <div>
                        <i class="fas fa-link"></i>
                        <i class="fab fa-github"></i>
                    </div>
                </div>
                
            </Project>
        )
    }

}

export default Triplaner;


