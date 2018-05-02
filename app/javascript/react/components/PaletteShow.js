import React from 'react'
import Color from './Color'
import ShowTile from './ShowTile'

const PaletteShow = (props) => {
  let palette = props.palette
  let hexcodes = props.hexcodes

  if(props.hexcodes){
    return(
      <div>
      <ShowTile
        key = {palette.id}
        id = {palette.id}
        title = {palette.title}
        description = {palette.description}
        hexcodes = {palette.hexcodes}
      />
    </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default PaletteShow
