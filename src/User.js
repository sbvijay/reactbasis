import React,{ Component } from 'react';

class User extends Component{
    userOnClick(message){
        this.props.onChange(message);
        }
    render(){
        const user = this.props.user;
        return(
          <div className="user"> 
            <ul  className="list-unstyled">
              <li>
                {user.username} ---- {user.email}
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