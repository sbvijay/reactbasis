import React,{ Component } from 'react';
import UserDetails from './UserDetails';

class User extends Component{
  constructor(props){
    super(props);
    this.state= {
      users: [],
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json,
        })
      });
  }
  userClick(message){
    console.log(message)
}  
render() {
  var {  users } = this.state; 
    return (
      <div className="App">
          {users.map((user, key) => {
            return(
              <UserDetails key={`user-details-${key}`} user={user} onChange={this.userClick.bind(this)}/>
            )
          }
          )}
      </div>
    );
  }
}

export default User;