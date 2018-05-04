import React, { Component } from 'react'
import PaletteShow from '../components/PaletteShow'
import ReviewsIndexContainer from './ReviewsIndexContainer'
import TextField from '../components/TextField'
import Color from '../components/Color'

class PaletteShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palette: {},
      reviews: [],
      user: '',
      body: '',
      shown: false
    }

    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addReview = this.addReview.bind(this)
    this.show = this.show.bind(this)
  }

  show() {
		this.setState({
			shown: !this.state.shown
		});
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
        this.setState( {
          palette: palette.palette,
          reviews: palette.palette.reviews,
          user: palette.palette.user
        })
      })
      .catch(error => console.error(`${error.message}`))
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ body: '' })
  }

  addReview(submission) {
    let paletteId = this.state.palette.id
    fetch(`/api/v1/palettes/${paletteId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(submission)
    }).then(response => response.json())
      .then(reviews => {
        this.setState( {
          reviews: reviews,
          body: ''
        })
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    let formPayload = {
      review: {
        review: this.state.body,
        palette_id: this.state.palette.id
      }
    }
    this.addReview(formPayload)
  }

  render() {
    let shown = {display: this.state.shown ? "block" : "none"}
    let hidden = { display: this.state.shown ? "none" : "block"}
    let hexcodes = this.state.palette.hexcodes


    return(
      <div >
        <PaletteShow
          id={this.state.palette.id}
          palette={this.state.palette}
          title={this.state.palette.title}
          hexcodes={this.state.palette.hexcodes}
          description = {this.state.palette.description}
        />

      <p id= 'hexcodes' style={shown}> {hexcodes}</p>

      <button id="hexcode-button" className = 'button' onClick={this.show}>Show Codes</button>

        <div className = "review-form">
          <TextField
            content={this.state.body}
            label="Add A Review"
            name="Add A Review"
            handlerFunction={this.handleBodyChange}
          />

          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <button className="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>

        <ReviewsIndexContainer
          reviews={this.state.reviews}
          user={this.state.user}
        />
      </div>
    )
  }
}

export default PaletteShowContainer
