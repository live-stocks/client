import React, { Component } from "react";

export default class StockList extends Component {
  getList() {
    const li = [];
    this.props.stocks.forEach((s) => {
      li.push(
        <li key={s.name}>
          {s.name} {s.sells[0].price}
        </li>
      );
    });

    return li;
  }

  render() {
    return <ul>{this.getList()}</ul>;
  }
}
