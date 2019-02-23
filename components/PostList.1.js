import React from 'react';
import { Query } from 'react-apollo'
import readPostsQuery from '../queries/readPosts'
import ErrorMessage from './ErrorMessage'
import Link from "next/link";
import he from 'he'

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PostLink = (props) => (
    <div>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <ListItemLink>
                <ListItemText primary={he.decode(props.titre)} />
            </ListItemLink>
      </Link>
    </div>
  )

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});
  
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
  

function PostList (props) {
  return (
      <Query query={readPostsQuery}>
      {({ loading, error, data: { posts }}) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <div>Loading</div>

          return (
              <Grid item xs={12}>
                  <List component="nav">
                  {console.log(posts.nodes)}
                  {posts.nodes.map((post) => (
                      <PostLink key={post.id} id={post.id} slug={post.slug} titre={post.title} />
                  ))}
                  </List>
              </Grid>
          )
      }}
      </Query>
  )
}

PostList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(PostList);