import React from 'react'
import { Link } from 'react-router'

const PaletteTile = (props) => {
  return(
    <div className="color" style={{backgroundColor: props.hexcode[0]}}>
      <Link to={`/palettes/${props.id}`}>
        <p>{props.title}</p>
      </Link>

    </div>
  )
}





export default PaletteTile
