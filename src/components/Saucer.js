import React, {Component} from 'react';

export default class Saucer extends Component {
  render() {
    return(
      <div>
        <p>Saucer</p>
        <ul>
          <li>Size : {this.props.size}</li>
        </ul>
      </div>
    )
  }
}
