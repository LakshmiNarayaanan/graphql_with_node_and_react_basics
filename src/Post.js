import React from 'react';
import { Query,graphql } from 'react-apollo';
import client from './apollo.js'
import axios from 'axios'

import get_users from './queries/getusers.js'


/*client.query({
  query:gql`
  {
    user(user_name:"sathya awesome kanna") {
      user_name
      user_id
    }
  }
  `
}).then(response =>console.log(response,"hurray"))*/
/*

export default () => (
  <Query query={GET_USERS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
         
        </thead>
        <tbody>
          {data.user.user_name}
        </tbody>
      </Table>
    )}
  </Query>
);*/

class Post extends React.Component{

  async fetchdata() {
    var response  = await axios.post('http://localhost:4000/graphql', { query: `query { user(user_name:"gandhakannazagi") {user_name}}` })
     
     console.log(response.data,"finally")
      }

   /* componentDidMount() {
      this.fetchdata();
    }*/

  render() {
    console.log(this.props)
    if(this.props.data.loading) {return <div>loading</div> }
    return(
      <div>
        {this.props.data.user.user_name}
      </div>
      )
  }
}

export default graphql(get_users)(Post)