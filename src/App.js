import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
function App() {
  return (
    <BrowserRouter>
      <div className = "App">
          <Navbar />
          <Route exact path = "/" component = {Home}/>
          <Route path = "/About" component = {About}/>
          <Route path = "/Contact" component = {Contact}/>
          <Route path = "/:pathId" component = {Post}/>
      </div> 
    </BrowserRouter>

  );
}

export default App;
