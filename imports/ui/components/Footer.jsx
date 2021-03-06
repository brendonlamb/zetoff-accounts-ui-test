import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


export default class Footer extends Component {

  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  handleTouchTap = (index) => {
    this.setState({
      selectedIndex: index
    });
  };


  render() {
    return (
      <Paper zDepth={1}>
        
      </Paper>
    );
  }
}
