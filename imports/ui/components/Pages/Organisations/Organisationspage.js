import React, { Component } from 'react';


import SortTable from './Table.js';
import Searcharea from './search/searcharea.js';


class Opportunities extends Component {
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

export default Opportunities;
