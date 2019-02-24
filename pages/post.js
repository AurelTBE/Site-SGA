import {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import PostQuery from '../queries/readPost'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import he from 'he'

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
  media: {
    maxWidth: "100%",
  },
  content: {
    textAlign: 'left',
    '& figure': {
      textAlign: 'center',
    },
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
                <img src={post.featuredImage.sourceUrl} alt={he.decode(post.title)} className={props.classes.media} />
                <Paper className={props.classes.paper}>
                  <Typography component="h2" variant="h2" gutterBottom>
                    {he.decode(post.title)}
                  </Typography>
                  <Typography 
                    variant="body1"
                    component="div" 
                    gutterBottom
                    className={props.classes.content}
                    dangerouslySetInnerHTML={ {
                      __html: post.content
                    } } />
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