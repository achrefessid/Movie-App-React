import React from "react";
import { BrowserRouter , Route } from 'react-router-dom'

import MovieApp from "./Components/MovieApp";
import Navbar from "./Components/Navbar";
import Favorite from "./Components/Favorite";
import "./index.css"

const App = () => (
  <div>
  <BrowserRouter>      
      <Navbar />
      <Route  path='/movieapp' component={MovieApp} />    
      <Route exact path='/favorite' component={Favorite} /> 
      </BrowserRouter>

  </div>
);

export default App