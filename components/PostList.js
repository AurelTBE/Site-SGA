import React from 'react';
import { Query } from 'react-apollo'
import readPostsQuery from '../queries/readPosts'
import ErrorMessage from './ErrorMessage'
import Link from "next/link";
import he from 'he'

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from "./Cards"

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
              <Grid container spacing={24}>
                  {posts.nodes.map((post) => (
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                      <RecipeReviewCard key={post.id} id={post.id} slug={post.slug} titre={post.title} exerpt={post.excerpt} img={post.featuredImage ? post.featuredImage.sourceUrl : null} content={post.content} />
                    </Grid>
                  ))}
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