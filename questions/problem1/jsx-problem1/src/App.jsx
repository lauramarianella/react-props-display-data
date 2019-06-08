import React, { Component } from 'react';
import { sellers } from './Data.jsx';
import Seller from './Seller.jsx';

class App extends Component {
  render() {
    return (
      <div>
        {sellers.map((seller) => (
          <Seller
            myName={seller.name}
            myLocation={seller.location}
            myItems={seller.items}
          />
        ))}
      </div>
    );
  }
}

export default App;
