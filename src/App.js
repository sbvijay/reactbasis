import React,{ Component } from 'react';
import User from "./User";

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      users: [],
      isLoaded: false,
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
                <User key={`user-details-${key}`} user={user} onChange={this.userClick.bind(this)}/>
              )
            }
            )}
        </div>
      );
    }
    
}
export default App;