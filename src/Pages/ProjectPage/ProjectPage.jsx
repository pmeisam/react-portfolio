import React, {Component} from 'react';
import Fade from 'react-reveal/Jello';
import styled from 'styled-components';
import Minesweeper from '../../Components/Minesweeper/Minesweeper';
import Memesagram from '../../Components/Memesagram/Memesagram';
import Triplaner from '../../Components/Triplaner/Triplaner';
import DevSpot from '../../Components/DevSpot/DevSpot';
import { FullPage, Slide } from 'react-full-page';


const Project = styled.div`
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;

class ProjectPage extends Component {
    
    render () {
        
        return (
            <FullPage>
            {/* <Wrapper> */}
                <Slide>
                <Project>
                    <Fade center><DevSpot theme={this.props.theme} /></Fade>
                </Project>
                </Slide>
                <Slide>
                <Project>
                    <Fade center><Triplaner theme={this.props.theme} /></Fade>
                </Project>
                </Slide>
                <Slide>
                <Project>
                    <Fade center><Memesagram theme={this.props.theme} /></Fade>
                </Project>
                </Slide>
                <Slide>
                <Project>
                    <Fade center><Minesweeper theme={this.props.theme} /></Fade>
                </Project>
                </Slide>
            {/* </Wrapper> */}
            </FullPage>
        )
    }
}

export default ProjectPage;