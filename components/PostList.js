import React from 'react';
import { Query } from 'react-apollo'
import readPostsQuery from '../queries/readPosts'
import ErrorMessage from './ErrorMessage'
import Link from "next/link";

// MUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PostLink = (props) => (
    <div>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <ListItemLink>
                <ListItemText primary={props.titre} />
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
    const { classes } = props;
    return (
        <Query query={readPostsQuery}>
        {({ loading, error, data: { posts }}) => {
            if (error) return <ErrorMessage message='Error loading posts.' />
            if (loading) return <div>Loading</div>

            return (
                <div className={classes.root}>
                    <List component="nav">
                    {posts.map((post) => (
                        <PostLink key={post._id} id={post._id} alias={post.alias} titre={post.titre} />
                    ))}
                    </List>
                </div>
            )
        }}
        </Query>
    )
}

PostList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(PostList);