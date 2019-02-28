import gql from 'graphql-tag'

export default gql`
    {
      category (id:"Y2F0ZWdvcnk6Mg==") {
        posts (first: 6) {
          nodes {
            id
                title
                excerpt
                featuredImage {
                  sourceUrl
                }
          }
        }
      }
    }
`