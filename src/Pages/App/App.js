import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

class App extends React.Component {

  state = {
    user: "Meisam Poorzand"
  }

  componentWillMount () {
    console.log ('1- Component Will Mount...');
    let user = "Kiana Kiaei";
    this.setState({user});
  }

  componentDidMount () {
    console.log ("3- Component Did Mount...");
    let user = "Tooraj Kiaei";
    this.setState({user});
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
      <>
        <Navbar />
        
        <Switch className="App">
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/about" render={ () => <AboutPage /> } />
          <Route exact path="/projects" render={ () => <ProjectPage /> } />
          <Route exact path="/contact" render={ () => <ContactPage /> } />
        </Switch>
        <Footer />
      </>
    );  
  }
  
}

export default App;
