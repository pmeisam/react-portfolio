import React, {Component} from 'react';
import Fade from 'react-reveal/Zoom';
import styled from 'styled-components';
import Minesweeper from '../../Components/Minesweeper/Minesweeper';
import Memesagram from '../../Components/Memesagram/Memesagram';
import Triplaner from '../../Components/Triplaner/Triplaner';
import DevSpot from '../../Components/DevSpot/DevSpot';

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
            
        <>
            <Project>
                <Fade center><DevSpot /></Fade>
            </Project>
            <Project>
                <Fade center><Triplaner /></Fade>
            </Project>
            <Project>
                <Fade center><Memesagram /></Fade>
            </Project>
            <Project>
                <Fade center><Minesweeper /></Fade>
            </Project>
        </>
   
        )
    }
}

export default ProjectPage;