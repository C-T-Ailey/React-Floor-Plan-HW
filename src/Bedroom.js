import React, {Component} from 'react'

export default class Bedroom extends Component {
  render() {
    return (
      <div className={`bedroom${this.props.bedNum}`}>Bedroom {this.props.bedNum}</div>
    )
  }
}