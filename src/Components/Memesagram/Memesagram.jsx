import React, { Component } from 'react';
import styled from 'styled-components';

const Project = styled.div`
    & > img {
        width: 870px;
        height: 480px;
    }
`;
class Memesagram extends Component {

    render () {
        return (
            <Project>
                <img src="images/memesagram.png" alt=""/>
                <div>
                    <h2>MEMESAGRAM</h2>
                    <p>Memesagram is a social media platform where users can login with their Google account and upload photos, especially memes. Users can also comment, like, and update their profiles with photos and custom usernames. In addition, users can edit or delete their comments and captions.</p>
                </div>
                <div>
                    Node.js

                    Express.js

                    MongoDB

                    Mongoose

                    Google oAuth

                    Bootstrap cdn


                </div>
                <div>
                    link to github and project
                </div>
            </Project>
        )
    }
}

export default Memesagram;