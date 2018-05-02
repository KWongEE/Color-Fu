import React, { Component } from 'react'
import PaletteShow from '../components/PaletteShow'
import ReviewsIndexContainer from './ReviewsIndexContainer'
import ReviewsFormContainer from './ReviewsFormContainer'

class PaletteShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palette: {}
    }
  }

  componentDidMount() {
    let paletteId = this.props.params.id

    fetch(`/api/v1/palettes/${paletteId}`)
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
      <div>
        <PaletteShow
          id={this.state.palette.id}
          palette={this.state.palette}
          title={this.state.palette.title}
          hexcodes={this.state.palette.hexcodes}
          description = {this.state.palette.description}
        />

        <ReviewsFormContainer
          id={this.state.palette.id}
        />

        <ReviewsIndexContainer
          reviews={this.state.palette.reviews}
        />
      </div>
    )
  }
}

export default PaletteShowContainer
