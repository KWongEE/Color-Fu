import React from 'react'

const PaletteShow = (props) => {
  return(
    <div className="color" style={{backgroundColor: props.hexcode}}>
      <div>
      <h2>{props.title}</h2> <br />
      <p>{props.hexcode}</p>
    </div>

    <div >
      <p className="description">
        {props.description}
      </p>
    </div>


    </div>
  )
}

export default PaletteShow
