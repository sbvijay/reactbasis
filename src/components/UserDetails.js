import React, { Component } from "react";
import { browserHistory } from "react-router";


class UserDetails extends Component {
  userOnClick(message) {
    // this.props.onChange(message);
    fetch("https://jsonplaceholder.typicode.com/users/" + message).then(res =>
      res.json()
    );
    // .then(json => {
    //   this.setState({
    //     users: json,
    //   })
    // });
    // .then(data=>console.log(data));
    browserHistory.push("/users/" + message);
  }

  render() {
    const user = this.props.user;
    return (
      
      <div className="user">
        <ul className="list-unstyled">
          <li>{user.username}</li>
          <button onClick={this.userOnClick.bind(this, user.id)}>View</button>
        </ul>
      </div>
    );
  }
}

export default UserDetails;
