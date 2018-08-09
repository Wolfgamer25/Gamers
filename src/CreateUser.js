import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class CreateUser extends Component {
  	static propTypes = {
      addNewUser: PropTypes.func.isRequired,
      users: PropTypes.array.isRequired
    }
  	state={
      	firstName: '',
      	lastName: '',
    	username:'',
        gamesPlayed: ''
    }
	handleInputChange= (event) =>{
      	const { name , value } = event.target;
     	this.setState(() =>({
        	[name]: value
        })) 
    }
	newUser = (event) => {
      	const name = this.nameChecker();
      	event.preventDefault();
      console.log(name)
        if(name === false){
		alert('please use a different username')
        }else{
          this.props.addNewUser(this.state)
        }
  	}
	nameChecker = () =>{
      	const {users} = this.props
     	for(const user of users){
          if(this.state.username ===user.username){
            return false;
          }
        };
      
    }
	buttonDisabled = () =>{
      const { firstName,lastName,username,gamesPlayed } = this.state;
      return firstName === '' || lastName === '' || username === '' || gamesPlayed === '' 
    }
 	render(){
      return(
          <div className="create-user">
              <form onSubmit={this.newUser}>
					<div>
      					<input
      						type="text"
      						name="firstName"
      						placeholder="please enter Firstname"
      						onChange={(event) => this.handleInputChange(event)} 	
							value={this.state.firstName}
						/>
						<input
							placeholder="please enter Lastname"
      						type="text"
      						name="lastName"
      						onChange={(event) => this.handleInputChange(event)} 	
							value={this.state.lastName}
						/>
                     	<input 
						  placeholder="please enter username"
						  name="username"
                          onChange={(event) => this.handleInputChange(event)} 
                          value={this.state.username}
						  type="text"
						/>
                      	<input 
						  placeholder="number of games played"
						  name="gamesPlayed"
                          type="number" 
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.gamesPlayed}
						/>
  					</div>
        			<button disabled={this.buttonDisabled()}>Submit</button>
              </form>
          </div>
      ) 
    }
}

export default CreateUser;