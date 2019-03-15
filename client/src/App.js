import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Header></Header>
          <SideBar></SideBar>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/posts/" component={MainContent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
