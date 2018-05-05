import React, {Component} from 'react'
import PaletteTile from "./PaletteTile"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: [],
      search: '',
      finalResults: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filteredPalettes = this.filteredPalettes.bind(this)
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
     .then(paletteObjs =>{
       this.setState( { palettes: paletteObjs.palettes } )
     })
     .catch(error => console.error(`${error.message}`))
  }

  handleChange(event) {
    this.setState({search: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      search: this.state.search
    }
    this.filteredPalettes(formPayload)
  }

  filteredPalettes(formPayload) {
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();
    this.state.palettes.forEach((palette) => {
      if (palette["title"].toLowerCase().includes(search)) {
       searchResults.push(palette)
     }
      this.setState({ finalResults: searchResults })
    })
  }

  render() {
    let finalResults = this.state.finalResults.map(palette => {
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
     <div id="index-container">
       <div id="searchbar">
         <input
           id="search"
           type='text'
           value={this.state.search}
           onChange={this.handleChange}
           placeholder="Enter search terms"
         />
         <input type = 'submit' value = 'Search' onClick = {this.handleSubmit}/>
       </div>
       <div className="row">
         {finalResults}
       </div>
     </div>
   )
  }
}

export default SearchBar
