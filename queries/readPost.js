import {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const QUERY = gql`
query ReadPost($id: ID!){
        post(id: $id){
            _id
            alias
            titre
            contenu
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