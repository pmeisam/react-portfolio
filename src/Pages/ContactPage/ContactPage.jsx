import React, {Component} from 'react';
import styled from 'styled-components';

class ContactPage extends Component {
    
    render () {
        const Contact = styled.div`
            margin-top: 90px;
        `;
        return (
            <Contact>
                <h1>MEISAM POORZAND</h1>
                <h4>info@meisam.org</h4>
                <i class="fab fa-github"></i>
                <i class="fas fa-envelope-open-text"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram"></i>
            </Contact>
        )
    }
}

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me