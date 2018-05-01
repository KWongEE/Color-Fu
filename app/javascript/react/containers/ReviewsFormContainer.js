import React, { Component } from 'react'
import TextField from '../components/TextField'

class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }

    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ body: '' })
  }

  handleSubmit(event) {
    event.preventDefault()

    let formPayload = {
      review: this.state.body
    }

    alert(formPayload)
  }

  render() {

    return(
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
    )
  }
}

export default ReviewsFormContainer
