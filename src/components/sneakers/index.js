import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

//import {shoes} from "./data/data"

import { Header } from "../header/index";
import { ShoesList } from "../ShoesList";

const SneakersBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  background: #369;
`;
const Filter = styled.div`
  flex:1;
  background: coral;
  height: 100%;
`;

const Input = styled.input`
width: 300px;
`

export class Sneakers extends React.Component {
  render() {
    return (
      <SneakersBody>
        <Header />
        <Main>
          <Filter> Filter <Input /></Filter>
          <ShoesList />
        </Main>
      </SneakersBody>
    );
  }
}
