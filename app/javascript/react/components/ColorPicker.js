import React from 'react'
import { PhotoshopPicker } from 'react-color'
import ShowTile from './ShowTile'
import TextField from '../components/TextField'
import { browserHistory } from 'react-router'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '#fff',
      hexcodes: [],
      title: ''
    }

    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.handleColorSubmit = this.handleColorSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addPalette = this.addPalette.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChangeComplete = (color) => {
    this.setState({ current: color.hex });
  };

  handleColorSubmit = () => {
    let newState = this.state.hexcodes.concat(this.state.current)
    if(newState.length > 5) {
      alert("Don't Do That!")
    } else {
      this.setState({ hexcodes: newState })
    }
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  addPalette(submission) {
    fetch(`/api/v1/palettes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(submission)
    })
  }

  handleCancel = () => {
    let newState = this.state.hexcodes
    newState.pop()
    this.setState({ hexcodes: newState })
  }

  handleClearForm = () => {
    event.preventDefault()
    this.setState({ title: '', hexcodes: [] })
  }

  handleFormSubmit(event) {
    event.preventDefault();
      if(this.state.title.trim() != '' && this.state.hexcodes.length == 5) {
        let formPayload = {
          palette: {
            title: this.state.title,
            hexcodes: this.state.hexcodes
          }
        }
        this.addPalette(formPayload)
        browserHistory.push('/')
      } else {
        alert("Fill out the fields!")
      }
  }

  render() {
    return <div>
      <ShowTile
        hexcodes = {this.state.hexcodes}
      />
      <div className ="color-picker">
      <PhotoshopPicker
        color={ this.state.current}
        onChangeComplete={ this.handleChangeComplete }
        onAccept={ this.handleColorSubmit }
        onCancel={ this.handleCancel }
      />
      </div>
      <form className="new-palette-form callout">
        <TextField
          content={this.state.title}
          label="title"
          name="title"
          handlerFunction={this.handleTitleChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <button className="button"  onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  }
}

export default ColorPicker
