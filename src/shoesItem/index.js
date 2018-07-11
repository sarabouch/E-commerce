import React from 'react';

import styled from 'styled-components';

import { shoes } from '../data/data';

const Warpper = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Card = styled.div`
  width: 10%;
  height: auto;
  background: #fff;
`;

const Brand = styled.h1`
color:black;
font-size:1.5em;

`
const Description = styled.p`
color:gray;
font-size:0.9em;

`
const Img = styled.img`
width:100%
height:300px;
object-fit: cover;
`

export class ShoesItem extends React.Component {

    render() {
      return (
        
        <div className={"bookCard"}>
        {shoes.map(shoe => {
            return (
            <Warpper>
                <Card>
                        <Brand>{shoe.brand}</Brand>
                        <Description>{shoe.description}</Description>
                        <Img />
                </Card>
            </Warpper>
            )
        })}
        </div>
      )
    }
  }