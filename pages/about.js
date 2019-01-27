/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function About(props) {

  return (
    <Fragment>
      <Typography variant="h4" gutterBottom>
        A propos
      </Typography>
    </Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
