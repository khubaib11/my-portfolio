import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects'; 
import Courses from './components/Courses';
import About from './components/About';
import ProjectAllDetails from './components/ProjectAllDetails';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
         {/* <About/> */}
        {/* <Projects/> */}
        <ProjectAllDetails id={2}/>
        {/* <Courses/> */}
      </div>
    );
  }
}

export default App;
