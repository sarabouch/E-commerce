import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import styled from "styled-components"

import {shoes} from "./data/data"

import {Header} from "./components/header/index"



class App extends Component {
  render() {
    return (
      <div className="App" /* style= {{}}  */>
       <Header />
      </div>
    );
  }
}

export default App;
