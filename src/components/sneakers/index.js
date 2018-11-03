import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../header/index"
import { Aside } from "../aside/index"
import { Card } from "./card"

const Main = styled.div`
width: 75%;
display:flex;
justify-content:space-evenly;
`

export class Sneakers extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container" style={{ display: "flex" }} >
                    <Aside />
                    <Main>
                        {this.props.data.map(item => {
                            return <Link onClick={this.props.passingFunction(item.id)} to={`/sneaker/${item.id}`} key={item.id}>
                                <Card item={item}></Card>
                            </Link>
                        })}
                    </Main>
                </div>
            </div>
        )
    }
}
