import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

class App extends React.Component {

  state = {
    theme: null
  }

  handleThemeChange = (theme) => {
    let newTheme = {};
    if (theme === "darkTheme") {
      newTheme = {
        backgroundColor: "#191A1C",
        fontColor: "#E2E2E2",
        borderColor: "#7A7979",
        linkColor: "#E2E2E2"
      };
    }
    if (theme === "lightTheme") {
      newTheme = {
        backgroundColor: "#E2E2E2",
        fontColor: "#191A1C",
        borderColor: "#B4B4BC",
        linkColor: "#191A1C"
      };
    }

    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = newTheme.backgroundColor;
    document.body.style.color = newTheme.fontColor;
    this.setState({theme : newTheme})
  }


  componentWillMount () {
    console.log ('1- Component Will Mount...');
    this.setState({theme: {
      backgroundColor: "#191A1C",
      fontColor: "#E2E2E2",
      borderColor: "#7A7979",
      linkColor: "#E2E2E2"
    }})
  }

  componentDidMount () {
    console.log ("3- Component Did Mount...");

    let theme = localStorage.getItem("theme");
    let savedTheme;
    if (theme) {
      if (theme.charAt(0) === '"' && theme.charAt(theme.length -1) === '"')
        theme = theme.substr(1,theme.length -2);
      if (theme === "darkTheme")
        savedTheme = {
          backgroundColor: "#191A1C",
          fontColor: "#E2E2E2",
          borderColor: "#7A7979",
          linkColor: "#E2E2E2"
        };
      if (theme === "lightTheme") 
        savedTheme = {
          backgroundColor: "#E2E2E2",
          fontColor: "#191A1C",
          borderColor: "#B4B4BC",
          linkColor: "#191A1C"
        };
    } else {
      savedTheme = {
        backgroundColor: "#191A1C",
        fontColor: "#E2E2E2",
        borderColor: "#7A7979"
      };
    }
    this.setState({theme: savedTheme});
    document.body.style.backgroundColor = savedTheme.backgroundColor;
    document.body.style.color = savedTheme.fontColor;
  }

  componentDidCatch () {
    console.log("Component Did Catch...");
  }

  componentDidUpdate () {
    console.log ("Component Did Update...");
  }


  componentWillUpdate () {
    console.log ("Component Will Update...");
    
  }

  componentWillUnmount () {
    console.log("Component Will Unmount...");
  }

  render () {
    console.log ("2- Render...")
    return (
      <div className="app">
        <Navbar theme={this.state.theme} handleThemeChange={this.handleThemeChange} />
        <Switch className="App">
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/about" render={ () => <AboutPage /> } />
          <Route exact path="/projects" render={ () => <ProjectPage /> } />
          <Route exact path="/contact" render={ () => <ContactPage /> } />
        </Switch>
        <Footer theme={this.state.theme} />
      </div>
    );  
  }
  
}

export default App;
