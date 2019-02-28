import gql from 'graphql-tag'

export default gql`
    {
      category (id:"Y2F0ZWdvcnk6Mw==") {
        posts{
          nodes{
            id
            title
          }
        }
      }
    }
`