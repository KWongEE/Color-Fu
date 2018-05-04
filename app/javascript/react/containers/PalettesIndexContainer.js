import React, { Component } from 'react'
import PaletteTile from '../components/PaletteTile'

class PalettesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPalettes: [],
      palettes: [],
      search: '',
      finalResults: []
    }
    this.handleChange = this.handleChange.bind(this)
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
       this.setState({
         allPalettes: paletteObjs.palettes,
         palettes: paletteObjs.palettes
        })
     })
     .catch(error => console.error(`${error.message}`))
  }

  handleChange(event) {
    let formPayload = {search: event.target.value}
    let searchResults = []
    let search = formPayload.search.toLowerCase();

    this.state.allPalettes.forEach((palette) => {
      if (palette["title"].toLowerCase().includes(search)) {
       searchResults.push(palette)
     }
      this.setState({
        palettes: searchResults,
        search: event.target.value
      })
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
     <div className="index-container">
       <div className="columns large-12 small-12 medium-12">
        <div className="searchbar small-12 large-12">
           <input
             id="search"
             type='text'
             value={this.state.search}
             onChange={this.handleChange}
             placeholder="Discover Palettes"
           />
        </div>
       </div>

       <div className="row">
         {palettes}
       </div>
     </div>
   )
  }
}

export default PalettesIndexContainer
