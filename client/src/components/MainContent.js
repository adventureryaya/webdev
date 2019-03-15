import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
class MainContent extends Component {
  componentDidMount(){
    document.querySelector('#post').classList.add('fade-in');
  }
  componentWillUnmount(){
    document.querySelector('#post').classList.remove('fade-in');
  }
  render() {
    const test = "abc";
    return (
      <div id="MainContent">
        <NavLink to={`/posts/${this.props.match.params.category}/${test}`}>
          <div id="post" class="fadeopacity">
            <div id="title">Title</div>
            <div id="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
          </div>
        </NavLink>

        
        
      </div>
    );
  }
}

export default MainContent;

/*
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
    console.log("aaa");
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    console.log("bbb");
  }

<ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
</ReactModal>
*/