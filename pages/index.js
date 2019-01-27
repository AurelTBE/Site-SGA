/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Components
import PostList from '../components/PostList'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {

  render() {

    return (
      <Fragment>
        <Typography variant="h4" gutterBottom>
          Mon blog
        </Typography>
        <PostList />
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
