import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"


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