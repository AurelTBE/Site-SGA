import gql from 'graphql-tag'

export default gql`
    {
      results{
        nodes{
          id
          title
          content
        }
      }
    }
`