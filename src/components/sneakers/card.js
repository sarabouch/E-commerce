import React from 'react';
import styled from "styled-components"



export class Card extends React.Component {
    render() {
        const myData = this.props.item;

        return (
            <div>
                <h3>{myData.brand}</h3>
                <img src={myData.img} alt="" />
                <h5>{myData.price}</h5>
            </div>
        )
    }
}