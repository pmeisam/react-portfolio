import React, {Component} from 'react';
import Minesweeper from '../../Components/Minesweeper/Minesweeper';
import Memesagram from '../../Components/Memesagram/Memesagram';
import Triplaner from '../../Components/Triplaner/Triplaner';
import DevSpot from '../../Components/DevSpot/DevSpot';

class ProjectPage extends Component {
    
    render () {
        return (
            <>
                <h1>Projects</h1>
                <Minesweeper />
                <Memesagram />
                <Triplaner />
                <DevSpot />
            </>
        )
    }
}

export default ProjectPage;