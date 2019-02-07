import {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import PostQuery from '../queries/readPost'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const boLink = "http://localhost:1337"

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
            <img src={boLink + post.image.url} alt=""/>
          </Fragment>
        )
      }
    }
  </PostQuery>
))

class Page extends PureComponent {
  render() {
    return (
      <Grid item xs={12}>
        <Content />
      </Grid>
      )
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page)