import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    render () {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </>
        )
    }
}

export default Navbar;