/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Components
import Layout from '../components/Layout'
import PostList from '../components/PostList'


const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {

  render() {

    return (
      <Layout>
        <Typography variant="h4" gutterBottom>
          Mon blog
        </Typography>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js"/>
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
        </ul>
        <PostList />
      </Layout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
