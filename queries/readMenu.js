import gql from 'graphql-tag'

export default gql`
    {
      menu(id: "TWVudTo2") {
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
`