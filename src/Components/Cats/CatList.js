import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        <li>{ this.props.breed }</li>
        {/* {this.props.breeds.map(cat => <li>{cat}</li>)} */}
      </div>
    )
  }
}

  export default CatList;
