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
    //this is a fetch later
    this.setState({palette: {id: 1, title: "Marine", hexcode: "#00FFFF"}})
  }

  render() {
    return(
      <PaletteShow
        id={this.state.palette.id}
        title={this.state.palette.title}
        hexcode={this.state.palette.hexcode}
      />
    )
  }
}

export default PalettesShowContainer
