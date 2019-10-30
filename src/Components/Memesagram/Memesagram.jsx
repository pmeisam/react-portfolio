import React, { Component } from 'react';
import styled from 'styled-components';


class Memesagram extends Component {

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
                            width: 180px;
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
                <img src="images/memesagram.png" alt=""/>
                <div>
                    <h2>MEMESAGRAM</h2>
                    <p>Memesagram is a social media platform where users can login with their Google account and upload photos, especially memes. Users can also comment, like, and update their profiles with photos and custom usernames. In addition, users can edit or delete their comments and captions.</p>
                    <div className="techs">
                        <div>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>Heroku</p>
                        </div>
                        <div>
                            <p>Cloudinary</p>
                            <p>Mongoose</p>
                            <p>Passport Authentication</p>
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

export default Memesagram;

