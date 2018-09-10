import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
 
import { JOBSDATA } from './data/jobs-data.js';
 
const KEYS_TO_FILTERS = ['title']
 
class SearchApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredData = JOBSDATA.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredData.map(JOBSDATA => {
          return (
            <div className="title" key={JOBSDATA.title}>
              
            </div>
          )
        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default SearchApp;