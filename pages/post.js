import {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import PostQuery from '../queries/readPost'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});


const Content = withRouter((props) => (
  <PostQuery id={props.router.query.id}>
    {({ loading, error, post }) => {
      if (error) return <ErrorMessage message='Error loading posts.' />
      if (loading) return <div>Loading</div>
        return (
          <Fragment>
            <Typography variant="h4" gutterBottom>{post.titre}</Typography>
            <div>{post.contenu}</div>
          </Fragment>
        )
      }
    }
  </PostQuery>
))

class Page extends PureComponent {
  render() {
    return (
      <Content />
      )
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page)