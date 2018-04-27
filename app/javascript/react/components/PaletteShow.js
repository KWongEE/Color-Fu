import React from 'react'

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
