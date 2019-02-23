import gql from 'graphql-tag'

export default gql`
    {
        posts (first: 6) {
            nodes {
              id
              title
              slug
              excerpt
              content
              featuredImage{
                sourceUrl
              }
            }
          }
    }
`