import React, { Component } from 'react';
import styled from 'styled-components';

const Project = styled.div`
    & > img {
        width: 870px;
        height: 480px;
    }
`;

class DevSpot extends Component {

    render () {
        return (
            <Project>
                <img src="images/devSpot1.png" alt=""/>
                <div>
                    <h2>DEVSPOT</h2>
                    <p>devSpot is a web app where developers can share their projects through iframes. In addition, users can chat with each other through the app. The posted projects are live, meaning users can interact with them as they would if they were to visit the project.</p>
                </div>
                <div>
                    React.js

                    Node.js

                    Express.js

                    MongoDB

                    Heroku

                    Socket.io

                    Mongoose

                    Token Based Auth

                    Material UI

                    Bootstrap cdn
                </div>
                <div>
                    link to github and project
                </div>
            </Project>
        )
    }
}

export default DevSpot;