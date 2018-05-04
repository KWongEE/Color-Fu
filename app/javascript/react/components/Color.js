import React from 'react'
import PaletteShowContainer from '../containers/PaletteShowContainer'

const Color = (props) => {
  return(
    <div className="color" style={{backgroundColor: props.color}}></div>
  )
}
export default Color
