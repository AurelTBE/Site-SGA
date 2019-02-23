import gql from 'graphql-tag'

export default gql`
    {
        posts {
            nodes {
              id
              title
              slug
              excerpt
              featuredImage{
                sourceUrl
              }
            }
          }
    }
`