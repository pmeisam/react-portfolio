import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
// import Tada from 'react-reveal/Tada';
import "./HomePage.scss";
// import slideInLeft from 'react-animations/lib/slide-in-left';

class HomePage extends Component {
  state = {
    intro: null,
    bio: null,
    theText: "",
    cursor: null
  };

  componentWillMount() {
    let intro = "HI THERE, I'M MEISAM";
    let bio =
      "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    bio = bio.toUpperCase();
    intro = intro.toUpperCase();
    this.setState({ intro });
    this.setState({ bio });
  }

  componentDidMount() {
    this.state.bio.split("").forEach((letter, idx) => {
      setTimeout(() => {
        this.setState(state => ({ theText: state.theText + letter }));
      }, 30 * idx);
    });
    // setInterval(() => {
    //     if (this.state.cursor) {
    //         this.setState({cursor: false});
    //     } else {
    //         this.setState({cursor: true});
    //     }
    // },300);
  }

  render() {
    const Tada = styled.div`
      animation: 3s ${keyframes`${tada}`} 1;
      animation-delay: 0.5s;
      margin-top: 150px;
      & > h1 {
        font-family: "Saira Stencil One", cursive;
        font-size: 4vw;
      }
      @media screen and (max-width: 600px) {
        margin-top: 20%;
        & > h1 {
          font-size: 21px;
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
            & > p {
                font-family: 'Roboto', sans-serif;
                font-size: 13px;
                .blinking{
                    animation:blinkingText 0.8s infinite;
                }
                @keyframes blinkingText{
                    0%{		color: ${this.props.theme.fontColor};	}
                    49%{	color: transparent;	}
                    50%{	color: transparent;	}
                    99%{	color:transparent;	}
                    100%{	color: ${this.props.theme.fontColor};	}
                }
            }
            @media screen and (max-width: 600px) {
                & > p {
                    font-size: 14px;
                    letter-spacing: 0.5px;
                }
            }

        }
        `;
    return (
      <Intro>
        <Tada>
          <h1>{this.state.intro}</h1>
        </Tada>
        <p>
          {this.state.theText}
          <span className="blinking">|</span>
        </p>
      </Intro>
    );
  }
}

export default HomePage;
