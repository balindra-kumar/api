import {gql} from '@apollo/client'

export const USER_LOGIN = gql`
mutation LoginUser($user_email: String!, $user_password: String!){
loginUser(user_email: $user_email, user_password: $user_password){
  id
  name
  token
  
}
}
`

export const GET_USERS = gql`
query{
  getUsers{
    id
    name
    age
    
  }
}
`


