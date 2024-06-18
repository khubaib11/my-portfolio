import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects'; 
import Courses from './components/Courses';
import ProjectAllDetails from './components/ProjectAllDetails';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
        {/* <Projects/> */}
        {/* <Courses/> */}
        <ProjectAllDetails id={2}/>
      </div>
    );
  }
}

export default App;
