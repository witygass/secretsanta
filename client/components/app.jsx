// app.js
// will hold state - the search results and if the list should be displayed

import { Grid, Row, Col, Thumbnail, Button  }  from 'react-bootstrap';
import React from 'react';
import GroupBox from './GroupBox.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';


var App = observer(class App extends React.Component {

  constructor (props) {
    super (props);

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick () {
    console.log('nice you clicked the page')
  }

  render () {
      return (
        <div id='mainApp'>
          <GroupBox/>
          <div id='pendingAndWishList'>
            {this.props.children}
          </div>
        </div>
      );
    };
})


export default App;

