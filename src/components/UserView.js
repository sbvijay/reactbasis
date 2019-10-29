import React, { Component } from "react";
import {FaPhone, FaSearch,FaBuilding,FaAddressBook} from "react-icons/fa";
import { MdLocationOn ,MdEmail,MdPerson ,MdPersonOutline,MdBookmarkBorder} from "react-icons/md";
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
    const address = this.state.users.address;
    const company = this.state.users.company;

    return (
      <div className="user-detail">
        <h3>User Details</h3>
        <ul className="list-unstyled">
          <li><MdBookmarkBorder/> ID: {this.state.users.id}</li>  
          <li><MdPersonOutline/> Name: {this.state.users.name}</li>
          <li><MdPerson/> User Name: {this.state.users.username}</li>
          <li><MdEmail/> Email: {this.state.users.email}</li>
          <li><FaPhone/> Phone: {this.state.users.phone}</li>
          <li><FaSearch/> Website: {this.state.users.website}</li>
          <li><MdLocationOn/> Address: {address ? address.street : ""}, {address ? address.suite : ""}, {address ? address.city : ""}, {address ? address.suite : ""} </li>
          <li><FaAddressBook/> Zipcode: {address ? address.zipcode : ""} </li>
          <li><FaBuilding/> Company: {company ? company.name : ""} </li>
        </ul>
      </div>
    );
  }
}

export default UserDetails;
