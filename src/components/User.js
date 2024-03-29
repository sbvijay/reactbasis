import React, { Component } from "react";
import UserDetails from "./UserDetails";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      });
  }

  render() {
    var { users } = this.state;
  
    return (
    
      <div className="App container">
        <h2>USERS LIST</h2>
        {users.map((user, key) => {
          return <UserDetails key={`user-details-${key}`} user={user} />;
        })}
      </div>
      
    );
    
  }
}

export default User;
