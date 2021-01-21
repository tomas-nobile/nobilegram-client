import {gql} from '@apollo/client';

export const ADD_COMMENT = gql`
mutation addComment($input: CommentInput){
  addComment(input: $input){
    idPublication
    comment
    createAt
  }
}
`
export const GET_COMMENTS=gql`
query getComments($idPublication:ID!){
  getComments(idPublication:$idPublication){
    comment
    idUser{
      name
      username
      avatar
    }
  }
}


`