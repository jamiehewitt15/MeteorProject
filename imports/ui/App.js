import React, { Component } from 'react';

import Topnav from './components/topnav.js';
import Titlecard from './components/titlearea.js';
import './index.css';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#F2F3F4', paddingBottom: 40}}>
<Topnav />
<Titlecard />

</div>
    );
  }
}

export default App;
