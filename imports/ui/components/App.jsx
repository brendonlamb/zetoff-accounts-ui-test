import React from 'react';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// Our Components
import Header from '/imports/ui/components/Header';
import Footer from '/imports/ui/components/Footer';


// MUI Theming
// https://github.com/callemall/material-ui/tree/master/src/styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from 'material-ui/styles/getMuiTheme';


import {
  cyan700,
  grey600,
  pinkA100, 
  pinkA200, 
  pinkA400,
  fullWhite } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const theme = MuiTheme({
  // spacing: spacing,
  // fontFamily: 'Roboto, sans-serif',
  // palette: {
  //   primary1Color: cyan700,
  //   primary2Color: cyan700,
  //   primary3Color: grey600,
  //   accent1Color: pinkA200,
  //   accent2Color: pinkA400,
  //   accent3Color: pinkA100,
  //   textColor: fullWhite,
  //   secondaryTextColor: fade(fullWhite, 0.7),
  //   alternateTextColor: '#333',
  //   canvasColor: '#303030',
  //   borderColor: fade(fullWhite, 0.3),
  //   disabledColor: fade(fullWhite, 0.3),
  //   pickerHeaderColor: fade(fullWhite, 0.12),
  //   clockCircleColor: fade(fullWhite, 0.12),
  // },
});

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={MuiTheme(theme)}>
        <div>
        	<Header />
          	{this.props.content}
        	<Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
