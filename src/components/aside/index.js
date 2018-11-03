import React from 'react';
import styled from "styled-components"


const Container = styled.div`
width: 25%;
 display:flex;
 flex-direction:column;
 justify-content: space-between;
`
const Select = styled.select`
margin: 20px;
`

const Option = styled.option`
width:10%;
`

export const Aside = props => {


    return (
        <Container>
            <h2>FILTER</h2>
            <Select >
                }
                <Option value="Brand" selected>Brand</Option>
                <Option value="adidas" >Adidas</Option>
                <Option>Nike</Option>
            </Select>



            <Select value="Size"><Option value="Brand" ></Option></Select>
            <Select value="Price"><Option value="Brand" ></Option></Select>
        </Container>
    )
}