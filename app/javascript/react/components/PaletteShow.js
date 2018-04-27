import React from 'react'
import Color from './Color'
import PaletteTile from './PaletteTile'

const PaletteShow = (props) => {
  let palette = props.palette

  if(props.hexcode){
    return(
      <div>
      <PaletteTile
        key = {palette.id}
        id = {palette.id}
        title = {palette.title}
        description = {palette.description}
        hexcode = {palette.hexcode}
      />
      <h2>{props.title}</h2>
      <p>{props.hexcode}</p>
      <p className="description">
        {props.description}
      </p>
    </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default PaletteShow
