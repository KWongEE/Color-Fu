import React from 'react'
import { Link } from 'react-router'
import Color from './Color'

const PaletteTile = (props) => {
  let hexcodes = props.hexcode

  return(
    <div className="tile large-2 medium-3 small-4 columns end">
      <Link to={`/palettes/${props.id}`}>
      {hexcodes.map((hex, i) => <Color color={hex} key={i} />)}
        <p>{props.title}</p>
      </Link>
    </div>
  )
}

export default PaletteTile
