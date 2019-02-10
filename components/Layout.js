import React, {Fragment} from 'react'

// Style
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

// Elements
import HeaderDrawer from './HeaderDrawer';

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#ff6659',
        main: '#d32f2f',
        dark: '#9a0007'
     },
     secondary: {
       main: '#ffd740',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Layout(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme = { theme }>
      <HeaderDrawer />
      <div className={classes.root}>
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);