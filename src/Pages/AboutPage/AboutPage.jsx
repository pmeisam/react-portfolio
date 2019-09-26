import React, {Component} from 'react';
import './AboutPage.scss';

class AboutPage extends Component {
    state = {
        intro: null, bio: null, theText: ""
    }

    componentWillMount () {
        let intro = "HI THERE, I'M MEISAM";
        let bio = "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";

        this.setState({intro});
        this.setState({bio});

        console.log(this.state.bio)
        // this.state.bio.forEach(element => {
        //     console.log(element)
        // });

    }

    componentDidMount () {
        console.log(this.state.bio.split(""));
        this.state.bio.split("").forEach( (letter, idx) => {
            setTimeout( () => {
                console.log(letter);
                this.setState(state => ({ theText: state.theText + letter}));
            }, 30 * idx);
        })
    }
    
    render () {
        return (
            // <>
            //     <h1>{this.state.intro}</h1>
            //     <h1>{this.state.bio}</h1>
            // </>
            <div className="aboutDiv">
                <h1>{this.state.intro}</h1>
                <h1>{this.state.theText}</h1>
            </div>
        )
    }
}

export default AboutPage;