import React from 'react'
import { Link } from 'react-router'
import Color from './Color'

const PaletteTile = (props) => {
  let hexcodes = props.hexcodes.map((hex, i) => <Color color={hex} key={i} />)

  return(
    <div className="tile large-2 medium-3 small-4 columns end">
      <Link to={`/palettes/${props.id}`}>
      <div className="colorTile">
        {hexcodes}
      </div>
      <p>{props.title}</p>
      </Link>
    </div>
  )
}

export default PaletteTile
