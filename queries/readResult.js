import {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const QUERY = gql`
query ReadResult($id: ID!){
        result(id: $id){
          title
          slug
          content
          featuredImage{
            sourceUrl
          }
        }
    }
`

class PostQuery extends Component {
  render() {
    return this.props.children(this.props.data);
  }
}

export default graphql(QUERY, {
  options: ({ id }) => ({ variables: { id } }),
})(PostQuery);