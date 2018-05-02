import React, {Component} from 'react'
import PaletteTile from "./PaletteTile"

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: [],
      userInput: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this)
  }

  componentDidMount(){
    this.setState({
      search: PaletteTile.search
    })
  }

  handleUserInput(event) {
    let input = event.target.value

    this.setState({
      userInput: input
    })
  }

  render() {
  return(
    <div>
      <input
        value = {this.state.userInput}
        onChange={this.handleUserInput}
      />
    </div>
  )}
}

export default SearchBar
