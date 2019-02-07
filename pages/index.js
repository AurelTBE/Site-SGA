/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FullWidthTabs from '../components/Tabs'

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
        <FullWidthTabs />
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
