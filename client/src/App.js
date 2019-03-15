import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Header></Header>
          <SearchBar/>
          <SideBar></SideBar>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/posts/:category" component={MainContent}></Route>
          <Route exact path="/posts/:category/:post_id" component={MainContent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
