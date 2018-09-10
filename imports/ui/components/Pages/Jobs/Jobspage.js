import React, { Component } from 'react';


import SortTable from './table.js';
import Searcharea from './search/searcharea.js';


class Jobs extends Component {
  render() {
    return (
      <div >
		
		<div style={{margin: 50}}>

			<SortTable />

		</div>
	</div>
    );
  }
}

export default Jobs;
