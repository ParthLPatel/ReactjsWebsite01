import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';
//import bootstrap:
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NavBar from './NavBar';
import Footer from './Footer';

import HomePage from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import ServicePage from './Service';

const App = ()=>{
  return(
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/service" component={ServicePage} />
        <Redirect to="/"/>
      </Switch>
      <br />
      <br />
      <br />
      <br />

  {/*<Footer />*/}
    </React.Fragment>
  );
}

export default App; 
