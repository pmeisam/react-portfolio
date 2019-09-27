import React, { Component } from 'react';
import styled from 'styled-components';

const Project = styled.div`
    & > img {
        width: 870px;
        height: 480px;
    }
`;
class Minesweeper extends Component {

    render () {
        return (
            <Project>
                <img src="images/minesweeper.png" alt=""/>
                <div>
                    <h2>MINESWEEPER</h2>
                    <p>The game is about finding the hidden mines. Each box you click on will either show a number of mines around each box or a mine. If there is no number it means that there is no mine around it. You can put a flag by right-clicking anywhere you think there is a mine. If you click all the boxes without clicking a mine, you will win.</p>
                </div>
                <div>
                    JavaScript

                    jQuery

                    HTML

                    CSS
                </div>
                <div>
                    link to github and project
                </div>
            </Project>
        )
    }
}

export default Minesweeper;