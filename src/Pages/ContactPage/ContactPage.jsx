import React, {Component} from 'react';
import styled from 'styled-components';

class ContactPage extends Component {
    
    render () {
        const Contact = styled.div`
            width: 40%;
            margin: 300px auto;
            font-family: 'Saira Stencil One', cursive;
            .title {
                color: ${this.props.theme.fontColor};
                text-decoration: none;
                font-size: 50px;
                h1 {
                    margin: -75px 0;
                }
            }
            .email {
                color: ${this.props.theme.fontColor};
                text-decoration: none;
                font-size: 64px;
            }
            .icon {
                color: ${this.props.theme.fontColor};
                font-size: 40px;
                margin-right: 40px;
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

                <a _blank className="icon" href="https://www.linkedin.com/in/pmeisam"><i class="fab fa-linkedin"></i></a>

                <a _blank className="icon" href="https://www.facebook.com/pmeisam"><i class="fab fa-facebook-square"></i></a>

                <a _blank className="icon" href="https://www.twitter.com/pmeisam"><i class="fab fa-twitter-square"></i></a>

                <a _blank className="icon" href="https://www.instagram.com/me.i.sam/"><i class="fab fa-instagram"></i></a>

                <a _blank className="icon" href="https://www.github.com/pmeisam"><i class="fab fa-github"></i></a>
                
                <a _blank className="icon" href="mailto: info@meisam.org"><i class="fas fa-envelope-open-text"></i></a>
            </Contact>
        )
    }
}

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me