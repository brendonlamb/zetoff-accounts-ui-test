import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';


export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  handleTouchTap = (e) => {
    this.setState({
      open: !this.state.open,
      anchorEl: e.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton label="Cool Beans" />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <FlatButton
            onTouchTap={(e) => this.handleTouchTap(e)}
            label="Click me"
          />
          <Popover 
              open={this.state.open}
              value={this.state.menuVal} 
              onRequestClose={() => this.handleRequestClose()}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal:"right",vertical:"bottom"}}
              targetOrigin={{horizontal:"right",vertical:"top"}}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}