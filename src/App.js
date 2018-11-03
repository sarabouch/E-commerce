import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import data from "./MOCK_DATA.json"

import { Sneakers } from "./components/sneakers/index"
import { Item } from "./components/item/index"



export class App extends React.Component {
  state = {
    data : data
  }
  passingDataToNextRoute = (id) => {
    console.log(id);
    
    /* const data = this.state.data;
    data.filter(item => {
      if(item.id === id){
        return item;
      }
    })

 */
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Sneakers data={data} passingFunction={this.passingDataToNextRoute}></Sneakers>
          </Route>
          <Route path="/sneaker/:id" component={Item} />
        </Switch>
      </BrowserRouter>
    )
  }
}
