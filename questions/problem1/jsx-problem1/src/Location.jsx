import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div>
        {this.props.myCaption} {this.props.myCity}, {this.props.myCountry}
      </div>
    );
  }
}

export default Location;
