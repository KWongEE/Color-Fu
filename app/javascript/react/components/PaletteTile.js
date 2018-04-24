import React from 'react'
import { Link } from 'react-router'

const PaletteTile = (props) => {
  return(
    <div>
      <Link to={`/palettes/${props.id}`}>
        <p>props.title</p>
      </Link>
      <hr/>
    </div>
  )
}





export default PaletteTile
