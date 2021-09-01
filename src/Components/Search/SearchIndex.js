import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      results: []
    }
    this.searchFunction = this.searchFunction.bind(this)
  }

  componentDidMount() {
    this.searchFunction();
  }
  
  searchFunction() {
    let searchInput = document.getElementById('input').value.toLowerCase()
    console.log(searchInput)
    if (searchInput === "") {
      this.setState({
        results: this.state.things
      })
    } else {
      let searchTerm = this.state.things.filter((things) => {
        if(things.includes(searchInput)) {
          return things
        }
      })
      this.setState({
        results: searchTerm
      })
    }
    console.log(this.state.things)
  }

  render() {
    return (
      <div>
        <Input id='input' placeholder='Search Here' onChange={this.searchFunction} />
        <h3>Results:</h3>
        { this.state.results.length > 0 
        ? this.state.results.map((r) => <li>{r}</li>) 
        : this.state.things.map((t) => <li>{t}</li>) 
        }
      </div>
    );
  }
}

export default SearchIndex;
