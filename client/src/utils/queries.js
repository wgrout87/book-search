import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query getSingleUser($username: String, $id: ID) {
    user (username: $username, _id: $id) {
      username
      email
      _id
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;