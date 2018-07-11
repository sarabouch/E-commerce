import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
//import styled from "styled-components"

//import {shoes} from "./data/data"

import {Header} from "../header/index"


export class Item extends React.Component{
    render(){
        return (
            <div>
            <Header />
            <h1>Items</h1>
        </div>
        )
    }
}