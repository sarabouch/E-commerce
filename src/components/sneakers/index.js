import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import styled from "styled-components"

//import {shoes} from "./data/data"

import {Header} from "../header/index"


export class Sneakers extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <h1>sneakers</h1>
            </div>
        )
    }
}