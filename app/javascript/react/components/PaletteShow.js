import React from 'react'
import { browserHistory, Link } from 'react-router'

const PaletteShow = (props) => {
  return(
    <div className="color" style={{backgroundColor: props.hexcode}}>
      <div>
      <h2>{props.title}</h2>
      <p>{props.hexcode}</p>
      </div>



    </div>
  )
}

export default PaletteShow
