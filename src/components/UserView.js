import React, { Component } from "react";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.props.params.id)
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      });
  }

  render() {
    return (
      <div className="user-detail">
         <h3>User Details</h3> 
        <ul className="list-unstyled">
            <li>
                ID:{this.state.users.id}
            </li>
            <li>
                User Name:{this.state.users.username}
            </li>
            <li>
                Name:{this.state.users.name}
            </li>
            <li>
                Email:{this.state.users.email}
            </li>
            <li>
                Phone:{this.state.users.phone}
            </li>
            <li>
                Website:{this.state.users.website}
            </li>
        </ul>
      </div>
    );
  }
}

export default UserDetails;
