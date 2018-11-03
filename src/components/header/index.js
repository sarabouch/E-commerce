import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
 display:felx;
 justify-content: space-between;
`
const Menu = styled.div`
color:white;
background-color: black;
width:90px;
height:100px;
text-align: cente
padding:10px;
border-radius: 20px 0 0 0;
font-size:40px;
`
const Cart = styled.div`
color:white;
background-color: black;
width:90px;
height:100px;
text-align: cente
padding:10px;
border-radius: 0 20px 0 0;
`
const Logo = styled.h1`
 font-size:20px;
 font-weight:900;
 margin-right:70%;
`

export const Header = props => {
    return (
        <Container>
            <Menu> &#926; </Menu>
            <Logo>Shoes</Logo>
            <Cart> {} IN BAG </Cart>
        </Container>
    )
}