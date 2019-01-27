import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

export const postsQuery = gql`
    {
        posts {
            _id
            titre
            contenu
            datePublication
        }
    }
`


export default function PostList () {
  return (
    <Query query={postsQuery}>
      {({ loading, error, data: { posts }}) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <div>Loading</div>

        return (
          <section>
            <ul>
              {posts.map((post) => (
                <li key={post._id}>
                  <div>
                      <h4>{post.titre}</h4>
                      <p>{post.contenu}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
      }}
    </Query>
  )
}