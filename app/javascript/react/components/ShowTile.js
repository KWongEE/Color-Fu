import React from 'react'
import Color from './Color'

const ShowTile = (props) => {
  let hexcodes = props.hexcodes.map((hex, i) => <Color color={hex} key={i} />)

  return(
    <div className="show">
      <p>{props.title}</p>
      <div className="colorShow">
        {hexcodes}
      </div>
    </div>
  )
}

export default ShowTile
