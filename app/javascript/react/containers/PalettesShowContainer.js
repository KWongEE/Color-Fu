import React, { Component } from 'react'
import PaletteShow from '../components/PaletteShow'

class PalettesShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palette: {}
    }
  }

  componentDidMount() {
    let paletteId = this.props.params.id

    fetch(`http://localhost:3000/api/v1/palettes/${paletteId}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
        }
      })
      .then(response => response.json())
      .then(palette => {
        this.setState( { palette: palette.palette } )
      })
      .catch(error => console.error(`${error.message}`))
  }

  render() {
    return(
      <PaletteShow
        id={this.state.palette.id}
        palette={this.state.palette}
        title={this.state.palette.title}
        hexcode={this.state.palette.hexcode}
        description = {this.state.palette.description}
      />
    )
  }
}

export default PalettesShowContainer
