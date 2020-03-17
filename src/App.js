import  { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

// import logo from './logo.svg';
import Applicant from './applicant';
import Experience from './experience';
import './App.css';

class App extends Component{
  state = {
    applicant:{
      picture:"image_30.png",
      name:"Richard Smith",
      percentage:'70',
      location:"Los Angeles, CA",
      description:"I’m an experienced editor and I bring talent and a good attitude to the edit."
    },
    'experiences':[
      {role:'Line Producer',show:"Big Brother", season :8,year:2019,genre:"TV Reality/Doc", companionShows:"CBS - Our House Productions",id:0},
      {role:'Line Producer',show:"Big Brother", season :8,year:2019,genre:"TV Reality/Doc", companionShows:"CBS - Our House Productions",id:1},
      {role:'Line Producer',show:"Big Brother", season :8,year:2019,genre:"TV Reality/Doc", companionShows:"CBS - Our House Productions",id:2},
    ]
  };
  render(){
    // const color = "white";
  //   css={
  //     css`
  //   padding: 32px;
  //   background-color: hotpink;
  //   font-size: 24px;
  //   border-radius: 4px;
  //   &:hover {
  //     color: ${color};
  //   }
  // `
  //   }
    return (
      <div  className="App">
      
          <div className="content-wrapper">
            <Applicant applicant={this.state.applicant}></Applicant>
            <Experience experiences={this.state.experiences}></Experience>
          </div>
      </div>
    );
  }
}

export default App;
/* 
 <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload. cosas que no
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/