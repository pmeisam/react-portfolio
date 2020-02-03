import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { slideInRight } from 'react-animations';
// import Tada from 'react-reveal/Tada';
import './HomePage.scss';
// import slideInLeft from 'react-animations/lib/slide-in-left';

class HomePage extends Component {
    state = {
        intro: null, bio: null, theText: "", cursor: null
    }

    componentWillMount () {
        let intro = "HI THERE, I'M MEISAM.";
        let bio = "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
        bio = bio.toUpperCase();
        intro = intro.toUpperCase();
        this.setState({intro});
        this.setState({bio});
    }

    componentDidMount () {
        this.state.bio.split("").forEach( (letter, idx) => {
            setTimeout( () => {
                this.setState(state => ({ theText: state.theText + letter}));
            }, 50 * idx);
        });
        setInterval(() => {
            if (this.state.cursor) {
                this.setState({cursor: false});
            } else {
                this.setState({cursor: true});
            }
        },300);
    }

    render () {
        const SlideIn = styled.div`
            // animation: 3s ${keyframes`${slideInRight}`} 1;
            margin-top: 150px;
            & > h1 {
                font-family: 'Saira Stencil One', cursive;
                font-size: 4vw;
            }
            @media screen and (max-width: 600px) {
                & > h1 {
                    font-size: 26px;
                }
            }

        `;
        const Intro = styled.div`
            width: 80%;
            margin: 0 auto;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            & > h1 {
                font-family: 'Saira Stencil One', cursive;
                font-size: 2vw;
            }
            @media screen and (max-width: 600px) {
                & > h1 {
                    font-size: 17px;
                }
            }

        }
        `;
        return (

            <Intro>
                <SlideIn>
                {/* <Tada> */}
                    <h1>{this.state.intro}</h1>
                {/* </Tada> */}
                </SlideIn>
                <h1>
                    {this.state.theText}
                    {this.state.cursor ? <span>__</span> : <p></p>}
                </h1>
                
            </Intro>
        )
    }
}

export default HomePage;