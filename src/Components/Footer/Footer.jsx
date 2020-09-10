import React, { Component } from 'react';
import './Footer.scss';
import styled from 'styled-components';

class Footer extends Component {

    render () {
        const FooterWrapper = styled.div`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            background-color: ${this.props.theme.backgroundColor};
            color: rgb(206, 206, 206);

            @media screen and (max-width: 600px) {
                & > h4 {
                    font-size: 10px;
                }
            }
        `;
        return (
            <FooterWrapper>

                <p>Ⓒ2020 Meisam Poorzand. All Rights Reserved.</p>

            </FooterWrapper>
        )
    }
}

export default Footer;