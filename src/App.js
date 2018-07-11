import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import styled from "styled-components"

import {shoes} from "./data/data"

import {Sneakers} from "./components/sneakers/index"
import {Item} from "./components/item/index"



export class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
           <Switch>
            <Route  exact path= "/" component= {Sneakers} />
            <Route path= "/sneaker/:id" component= {Item} />
          </Switch>
        </BrowserRouter>
    )
  }
}
