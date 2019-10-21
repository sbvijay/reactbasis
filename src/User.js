import React,{ Component } from 'react';

class User extends Component{
    userOnClick(message){
        this.props.onChange(message);
        }
    render(){
        const user = this.props.user;
        return(
          <div> 
            <ul>
              <li>
                {user.username} ---- {user.email}
              </li> 
              <button onClick={this.userOnClick.bind(this, "Console Log!")}>
                    Click
              </button>
            </ul>
          </div>
          
        );
    }  
}

export default User;