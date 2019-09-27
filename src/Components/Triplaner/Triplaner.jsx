import React, { Component } from 'react';
import styled from 'styled-components';

const Project = styled.div`
    & > img {
        width: 870px;
        height: 480px;
    }
`;
class Triplaner extends Component {

    render () {
        return (
            <Project>
                <img src="images/triplaner.png" alt=""/>
                <div>
                    <h2>TRIPLANER</h2>
                    <p>A full-service travel planning app that matches you with flights and hotels based on your travel budget. Whethere you're planning a romantic getaway, a family vacation, or just need a weekend escape.</p>
                </div>
                <div>
                    Python

                    django

                    PostgreSQL

                    IATA Codes API

                    Amadeus API

                    Bootstrap cdn
                </div>
                <div>
                    link to github and project
                </div>
            </Project>
        )
    }
}

export default Triplaner;