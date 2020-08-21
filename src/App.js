import React, { Component } from "react";
import "./StockList";
import StockList from "./StockList";

import "./api/player"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      player: { name: null, id: null },
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <p> Välkommen tillbaka {this.state.player.name} </p>
        <StockList stocks={this.state.stocks}></StockList>
      </div>
    );
  }
}

export default App;
