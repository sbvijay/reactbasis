import React,{ Component } from 'react';
 
class UserDetails extends Component{
    componentDidMount() {
        const { match: { params } } = this.props;
      
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then(({ data: user }) => {
            console.log('user', user);
            this.setState({ user });
          });
      }
    render(){
        return(
            <div className="user-details"> 
            <ul className="list-unstyled">
              <li>
                UserDetails
              </li>
            </ul>
        </div>
        )
    }
}

export default UserDetails;