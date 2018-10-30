import React, {Component} from 'react';

export default class Coffee extends Component {
  render() {
    const {bean, type} = this.props;
    return (
      <div>
        <p>Coffee</p>
        <ul>
          <li>Bean : {bean}</li>
          <li>Type : {type}</li>
          <li>Water Volume : {this.props.waterVolume}</li>
        </ul>
      </div>
    )
  }
}
