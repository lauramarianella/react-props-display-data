import React, { Component } from 'react';
import Location from './Location.jsx';

class Item extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.myItem.description}</h3>
        <div>Id: {this.props.myItem.itemid}</div>
        <div>Price: {this.props.myItem.price}</div>
        <Location
          myCaption={'Shipped from: '}
          myCity={this.props.myItem.shipsFrom.city}
          myCountry={this.props.myItem.shipsFrom.country}
        />
      </div>
    );
  }
}

export default Item;
