import React, {Component} from 'react'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bath from './Bath'

export default class FloorPlan extends Component {
  render() {

    const bedNumbers = this.props.specs.bedNum.map(bedNum => (
        <Bedroom bedNum={bedNum} />
    ))

    const bathSizes = this.props.specs.size.map(size => (
        <Bath size={size} />
    ))

    return (
      <div className="floorPlan">
        <Kitchen />
        <LivingRoom />
        {bedNumbers}
        {bathSizes}
      </div>
    )
  }
}