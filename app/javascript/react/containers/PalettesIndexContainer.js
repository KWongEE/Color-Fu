import React, { Component } from 'react'
import PaletteTile from '../components/PaletteTile'
import SearchBar from '../components/SearchBar'

class PalettesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: []
    }
  }

  componentDidMount() {
    fetch('api/v1/palettes')
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
        }
      })
      .then(response => response.json())
      .then(paletteObjs => {
        this.setState( { palettes: paletteObjs.palettes } )
      })
      .catch(error => console.error(`${error.message}`))
  }

  render() {

    return(
      <div>
        <SearchBar />
      </div>
    )

    let palettes = this.state.palettes.map(palette => {
      return(
        <PaletteTile
          key = {palette.id}
          id = {palette.id}
          title = {palette.title}
          description = {palette.description}
          hexcodes = {palette.hexcodes}
        />
      )
    })

    return(
      <div className="row">
        {palettes}
      </div>
    )
  }
}

export default PalettesIndexContainer
