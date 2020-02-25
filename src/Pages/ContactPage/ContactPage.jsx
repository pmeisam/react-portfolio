import React, {Component} from 'react';
import { rollIn } from 'react-animations';
import styled, {keyframes} from 'styled-components';

class ContactPage extends Component {
    
    render () {
        const Contact = styled.div`
            animation: 2s ${keyframes`${rollIn}`} 1;
            width: 40%;
            margin: 300px auto;
            font-family: 'Saira Stencil One', cursive;
            & > .title {
                color: ${this.props.theme.fontColor};
                text-decoration: none;
                font-size: 50px;
                & > h1 {
                    margin: -75px 0;
                }
            }
            & > .email {
                color: ${this.props.theme.fontColor};
                text-decoration: none;
                font-size: 64px;
            }
            .icon {
                color: ${this.props.theme.fontColor};
                font-size: 40px;
                margin-right: 40px;
            }
            
            @media screen and (max-width: 600px) {
                margin: 180px auto 0 auto;
                width: 75%;
                & > .title {
                    font-size: 25px;
                    & > h1 {
                        margin: -30px 0;
                    }
                }

                & > .email {
                    font-size: 32px;
                }

                & > .icon {
                    
                }
            }
        `;
        return (
            <Contact>
                    <a className="title" href="https://www.meisam.org">
                        <h1>MEISAM</h1>
                        <h1>POORZAND</h1>
                    </a>
                    
                    <a className="email" href="mailto: info@meisam.org">
                        <h4>info@meisam.org</h4>
                    </a>

                    <a _blank className="icon" href="https://www.linkedin.com/in/pmeisam"><i className="fab fa-linkedin"></i></a>

                    <a _blank className="icon" href="https://www.facebook.com/pmeisam"><i className="fab fa-facebook-square"></i></a>

                    <a _blank className="icon" href="https://www.twitter.com/pmeisam"><i className="fab fa-twitter-square"></i></a>

                    <a _blank className="icon" href="https://www.instagram.com/me.i.sam/"><i className="fab fa-instagram"></i></a>

                    <a _blank className="icon" href="https://www.github.com/pmeisam"><i className="fab fa-github"></i></a>
                    
                    <a _blank className="icon" href="mailto: info@meisam.org"><i className="fas fa-envelope-open-text"></i></a>
                
            </Contact>
        )
    }
}

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me