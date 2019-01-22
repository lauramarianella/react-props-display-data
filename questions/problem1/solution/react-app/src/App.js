import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

let sellers = [
  {
    name: "bob",
    location: {
      city: "Montreal",
      country: "Canada"
    },
    items: [
      {
        itemid: 0,
        price: 30,
        description: "a very nice hat",
        shipsFrom: {
          city: "Quebec",
          country: "Canada"
        }
      },
      {
        itemid: 1,
        price: 300,
        description: "a fast bicycle",
        shipsFrom: {
          city: "Quebec",
          country: "Canada"
        }
      }
    ]
  },
  {
    name: "sue",
    location: {
      city: "Toronto",
      country: "Canada"
    },
    items: [
      {
        itemid: 5,
        price: 60,
        description: "A warm peacoat",
        shipsFrom: {
          city: "Vancouver",
          country: "Canada"
        }
      },
      {
        price: 30000,
        description: "A nice boat",
        itemid: 1,
        shipsFrom: {
          city: "Seoul",
          country: "Korea"
        }
      }
    ]
  }
]

// location has properties city and country
class ShippingLocation extends Component {
  render() {
    return (
      <div>
        {"ships from " +
          this.props.location.city +
          "," +
          this.props.location.country}
      </div>
    )
  }
}
// item has properties price, description, itemid and shipsFrom
class Item extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.it.description}</h3>,
        {"price: " + this.props.it.price + " $"}
        <div> {"item id: " + this.props.it.itemid} </div>
        <ShippingLocation location={this.props.it.shipsFrom} />
      </div>
    )
  }
}
// location has properties city and country
class SellerLocation extends Component {
  render() {
    return (
      <div>
        seller location:
        {this.props.location.city} ,{this.props.location.country}
      </div>
    )
  }
}

class Seller extends Component {
  render() {
    return (
      <div>
        <h1> name: {this.props.info.name} </h1>
        <SellerLocation location={this.props.info.location} />
        {this.props.info.items.map(function(i) {
          return <Item it={i} />
        })}
      </div>
    )
  }
}

class App extends Component {
  render() {
    let data = sellers.map(function(s) {
      return <Seller info={s} />
    })
    return <div>{data}</div>
  }
}

export default App
