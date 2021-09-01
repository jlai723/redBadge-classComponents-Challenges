import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        <li>{ this.props.breed }</li>
      </div>
    )
  }
}

  export default CatList;
