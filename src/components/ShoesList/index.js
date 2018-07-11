import React from "react";

import styled from "styled-components";

import { shoes } from "../../data/data";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
  background: #fff;
  flex:3;
`;

const Brand = styled.h1`
  color: black;
  font-size: 1.5em;
`;
const Description = styled.p`
  color: gray;
  font-size: 0.9em;
`;
const Img = styled.img`
width:100%
height:300px;
object-fit: cover;
`;
const Price = styled.h2`
  color: black;
  font-size: 1.5em;
`;

export class ShoesList extends React.Component {
  render() {
    return (
      <List>
        {shoes.slice(0, 6).map(shoe => {
          return (
            <Card>
              <Brand>{shoe.brand}</Brand>
              <Description>{shoe.description}</Description>
              <Img src={shoe.img} />
              <Description>{shoe.Designer}</Description>
              <Price>{shoe.price} $</Price>
            </Card>
          );
        })}
      </List>
    );
  }
}
