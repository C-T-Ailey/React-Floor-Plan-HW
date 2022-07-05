import React, {Component} from 'react'

export default class Bath extends Component {
  render() {
    return (
      <div className={(this.props.size).toLowerCase()}>{this.props.size} Bath</div>
    )
  }
}