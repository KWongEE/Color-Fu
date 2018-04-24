import React, { Component } from 'react'
import PaletteTile from '../components/PaletteTile'

class PalettesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: []
    }

    // binds?
  }

  componentDidMount() {
    this.setState( {palettes: [{id: 1, title: "Marine", hexcode: "#00FFFF"}]})
    //this will be a fetch later
  }

  render() {
    let palettes = this.state.palettes.map(palette => {
      return(
        <PaletteTile
          key = {palette.id}
          id = {palette.id}
          title = {palette.title}
          description = {palette.description}
          hexcode = {palette.hexcode}
        />
      )
    })

    return(
      <div>
        {palettes}
      </div>
    )
  }
}

export default PalettesIndexContainer
