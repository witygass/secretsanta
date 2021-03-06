import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import { Link } from 'react-router';

var GroupItem = observer(class GroupItem extends React.Component {
  constructor (props) {
    super (props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('want this to redirect later');
    //redirect to the group page, or render the group page
  }

  render () {
    return (
      <div>
        <Link to={"groups/"+ this.props.group.name}>
          <ListGroupItem header={this.props.group.name} onClick={this.handleClick}>
          <img className="GroupAvatar" src={this.props.group.imageUrl} />
          <div className="GroupDescription">{this.props.group.summary} </div>
          </ListGroupItem>
        </Link>
      </div>
      );
  }

})



export default GroupItem;