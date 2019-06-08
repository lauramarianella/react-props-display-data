import React, { Component } from 'react';
import Location from './Location.jsx';
import Item from './Item.jsx';

class Seller extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.myName}</h1>
        <Location
          myCaption="Seller from: "
          myCity={this.props.myLocation.city}
          myCountry={this.props.myLocation.country}
        />
        {this.props.myItems.map((item) => (
          <Item myItem={item} />
        ))}
      </div>
    );
  }
}

export default Seller;
