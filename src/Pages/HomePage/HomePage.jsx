import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { tada } from 'react-animations';
import './HomePage.scss';

class HomePage extends Component {
    state = {
        intro: null, bio: null, theText: ""
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
            }, 20 * idx);
        })
    }
    
    render () {
        const SlideIn = styled.div`
            animation: 3s ${keyframes`${tada}`} 1;
            & > h1 {
                font-family: 'Saira Stencil One', cursive;
                font-size: 4vw;
            }

        `;
        const Intro = styled.div`
            width: 80%;
            margin: 0 auto;
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            & > h1 {
                font-family: 'Saira Stencil One', cursive;
                font-size: 2vw;
            }
        }
        `;
        return (

            <Intro>
                <SlideIn>
                    <h1>{this.state.intro}</h1>
                </SlideIn>
                <h1>{this.state.theText}</h1>
            </Intro>
        )
    }
}

export default HomePage;