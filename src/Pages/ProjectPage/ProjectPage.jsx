import React, {Component} from 'react';
import Fade from 'react-reveal/Zoom';
import styled from 'styled-components';
import Minesweeper from '../../Components/Minesweeper/Minesweeper';
import Memesagram from '../../Components/Memesagram/Memesagram';
import Triplaner from '../../Components/Triplaner/Triplaner';
import DevSpot from '../../Components/DevSpot/DevSpot';
const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
`;
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
            
        <Wrapper>
            <Project>
                <Fade center><DevSpot theme={this.props.theme} /></Fade>
            </Project>
            <Project>
                <Fade center><Triplaner theme={this.props.theme} /></Fade>
            </Project>
            <Project>
                <Fade center><Memesagram theme={this.props.theme} /></Fade>
            </Project>
            <Project>
                <Fade center><Minesweeper theme={this.props.theme} /></Fade>
            </Project>
        </Wrapper>
   
        )
    }
}

export default ProjectPage;