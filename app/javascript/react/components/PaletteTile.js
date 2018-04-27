import React from 'react'
import { Link } from 'react-router'
import Color from './Color'

const PaletteTile = (props) => {
  let hexcodes = props.hexcode

  return(
    <div className="tile large-2 medium-3 small-4 columns">
      {hexcodes.map((hex, i) => <Color something={hex} key={i} />)}
    </div>
  )
}

export default PaletteTile
