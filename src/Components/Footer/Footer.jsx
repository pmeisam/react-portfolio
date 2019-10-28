import React, { Component } from 'react';
import './Footer.scss';
import styled from 'styled-components';

class Footer extends Component {

    render () {
        const FooterWrapper = styled.div`
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            text-align: center;
            border-top: 1px solid ${this.props.theme.borderColor};
            background-color: ${this.props.theme.backgroundColor};
        `;
        return (
            <FooterWrapper>

                <h4>Ⓒ2019 Meisam Poorzand. All rights reserved.</h4>

            </FooterWrapper>
        )
    }
}

export default Footer;