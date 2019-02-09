import React, {Fragment} from 'react'

// Style
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Elements
import Header from './HeaderDrawer'
import HeaderDrawer from './HeaderDrawer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Layout(props) {
  const { classes } = props;

  return (
    <Fragment>
      <HeaderDrawer />
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);