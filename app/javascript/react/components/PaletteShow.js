import React from 'react'

const PaletteShow = (props) => {

  if(props.hexcode){
    return(
      <div className="color" style={{backgroundColor: props.hexcode[0]}}>
        <div>
        <h2>{props.title}</h2> <br />
        <p>{props.hexcode[0]}</p>
      </div>

      <div >
        <p className="description">
          {props.description}
        </p>
      </div>


      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default PaletteShow
