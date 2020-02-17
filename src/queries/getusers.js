import gql from 'graphql-tag';

var get_users = gql`
  query user {
    user(user_id:"456",user_name:"sathya you new data done it") {
     user_id
     user_name
    }
  }
`;

export default get_users

