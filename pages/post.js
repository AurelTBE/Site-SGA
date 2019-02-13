import {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import PostQuery from '../queries/readPost'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const boLink = "http://localhost:1337"

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


const Content = withRouter((props) => (
  <PostQuery id={props.router.query.id}>
    {({ loading, error, post }) => {
      if (error) return <ErrorMessage message='Error loading posts.' />
      if (loading) return <div>Loading</div>
        return (
          <Fragment>
              <Grid item xs={12}>
                <Paper className={props.classes.paper}>
                  <Typography component="h2" variant="h2" gutterBottom>{post.titre}</Typography>
                  <Typography variant="body1" gutterBottom>{post.contenu}</Typography>
                  <img src={boLink + post.image.url} alt=""/>
                </Paper>
            </Grid>
          </Fragment>
        )
      }
    }
  </PostQuery>
))

function Page(props) {
  const { classes } = props;
    
  return (
      <Content classes={classes}/>
    )
}


Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page)