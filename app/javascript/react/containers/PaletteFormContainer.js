import React, { Component } from 'react'
import TextField from '../components/TextField'

class PaletteFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      hexcode: '',
      errors: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleHexcodeChange = this.handleHexcodeChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateTitle = this.validateTitle.bind(this)
    // this.validateDescription = this.validateDescription.bind(this)
    this.validateHexcode = this.validateHexcode.bind(this)
    this.addPalette = this.addPalette.bind(this)
  }

  validateHexcode(shmugana) {
    // This is not good enough validation but we'll come back to it
    if(shmugana.trim() === '') {
      let newError = { body: 'You must enter text in the hexcode field.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.body
      this.setState({ errors: errorState })
      return true
    }
  }


  validateTitle(bugana) {
    if(bugana.trim() === '') {
      let newError = { title: 'You must enter something in the title field.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if(bugana.includes('Donald Trump')) {
      let newError = { title: 'Please do not submit any more palettes about Donald Trump.'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.title
      this.setState({ errors: errorState })
      return true
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ title: "", description: "", hexcode: "", errors: {}})
  }

  handleTitleChange(event) {
    this.validateTitle(event.target.value)
    this.setState({ title: event.target.value })
  }

  handleHexcodeChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ hexcode: event.target.value })
  }

  addPalette(submission) {
    fetch('http://localhost:3000/api/v1/palettes', {
      method: 'POST',
      body: JSON.stringify(submission)
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if(this.validateTitle(this.state.title) &&
       this.validateHexcode(this.state.hexcode) ) {

      let formPayload = {
        title: this.state.title,
        hexcode: this.state.hexcode,
        description: this.state.description
      }

      this.addPalette(formPayload)
      this.handleClearForm(event);
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="new-palette-form callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.title}
          label="title"
          name="title"
          handlerFunction={this.handleTitleChange}
        />
        <TextField
          content={this.state.hexcode}
          label="hexcode"
          name="hexcode"
          handlerFunction={this.handleHexcodeChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default PaletteFormContainer;
