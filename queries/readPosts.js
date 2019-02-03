import gql from 'graphql-tag'

export default gql`
    {
        posts {
            _id
            alias
            titre
            contenu
            datePublication
        }
    }
`