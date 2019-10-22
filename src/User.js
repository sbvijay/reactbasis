import React,{ Component } from 'react';

class User extends Component{
    userOnClick(message){
        // this.props.onChange(message);
        fetch('https://jsonplaceholder.typicode.com/users/'+ message)
        .then(res => res.json())
        .then(json => {
          this.setState({
            users: json,
          })
        });
        // .then(data=>console.log(data))
      }
    render(){
        const user = this.props.user;
       
        return(
          <div className="user"> 
            <ul  className="list-unstyled">
              <li>
                
                {user.username}
              </li> 
              <button onClick={this.userOnClick.bind(this, user.id)}>
                    Click
              </button>
            </ul>
          </div>
          
        );
    }  
}

export default User;