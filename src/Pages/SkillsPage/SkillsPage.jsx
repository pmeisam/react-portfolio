import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import './SkillsPage.scss';

class SkillsPage extends Component {
    
    
    render () {
      
        return (
            <React.Fragment>
                <div className="aboutDiv">
                    <Fade top>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque et atque odio quam numquam ipsum, facere similique impedit amet consequatur officia? Tenetur vitae minima ducimus ex assumenda! Unde, excepturi.</Fade>
                </div>
                <div className="aboutDiv">
                    <Fade center>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum vero natus quis eligendi architecto earum. Suscipit, modi! Ipsam asperiores temporibus commodi nisi voluptates, beatae eum, explicabo accusantium architecto iure quod!</Fade>
                </div>
                <div className="aboutDiv">
                    <Fade center>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga quos ab sint quae voluptates! Debitis repellendus ipsam itaque quis vero obcaecati laborum unde officia dolorem. Repellat aspernatur dignissimos sequi.</Fade>
                </div>
            </React.Fragment>
        )
    }
}

export default SkillsPage;