import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Designs from './components/pages/Designs/Designs';
import About from './components/pages/About/About';
import Signup from './components/pages/Signup/Signup';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import './App.css';
dotenvExpand(dotenv.config());

class App extends Component {
  constructor() {
    super();
    this.state = {
      signup: false
    };
  }

  componentDidUpdate() {
    this.setState({
      signup: !window.location.href.includes('signup')
    });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            { this.state.signup ? <Redirect from='*' to='/signup' /> : '' }
            <Route path='/' exact component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/designs' component={Designs} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={Signup} />
          </Switch>
          { this.state.signup ? '' : <Footer />  }
        </Router>
      </>
    );
  }
}

export default App;