import React from 'react'
import { browserHistory, Link } from 'react-router'

const PaletteShow = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.hexcode}</p>
    </div>
  )
}

export default PaletteShow
