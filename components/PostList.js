import React from 'react';
import { Query } from 'react-apollo'
import readPostsQuery from '../queries/readPosts'
import ErrorMessage from './ErrorMessage'

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from "./Cards"



const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});
  

function PostList () {
  return (
      <Query query={readPostsQuery}>
      {({ loading, error, data: { posts }}) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <div>Loading</div>

          return (
              <Grid container spacing={24}>
                  {posts.nodes.map((post) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={post.id}>
                      <RecipeReviewCard id={post.id} slug={post.slug} titre={post.title} exerpt={post.excerpt} img={post.featuredImage ? post.featuredImage.sourceUrl : null} content={post.content} />
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