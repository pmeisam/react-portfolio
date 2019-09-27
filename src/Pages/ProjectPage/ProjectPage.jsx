import React, {Component, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
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
                <Fade left><DevSpot /></Fade>
            </Project>
            <Project>
                <Fade right><Triplaner /></Fade>
            </Project>
            <Project>
                <Fade left><Memesagram /></Fade>
            </Project>
            <Project>
                <Fade right><Minesweeper /><img src="https://cdn-ds.com/media/dfmodels/2506/AdditionalImage-73096.jpg" alt=""/></Fade>
            </Project>
        </>
   
        )
    }
}

export default ProjectPage;