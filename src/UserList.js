import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import User from './User.js';

class UserList extends Component{
    state ={
      show: true,
      block: {
        display: "block"
      }
    }
	 showOrHide = () => {
          if(this.state.show){
              this.setState(() => ({
                block: {
                  display:"none"
                },
               show: false
              }));
          }else if(!this.state.show){
               this.setState(() => ({
                block: {
                  display:"block"
                },
               show: true
              }));
	   	 }
    }

  render(){
      return(
        <ol>
        <a className="games" onClick={this.showOrHide}>{this.state.show ? ' hide ' : ' show '} the number of games played</a>
        {this.props.users.map(users =>(
            <User key={users.username} username={users.username} show={this.state.show} block={this.state.block}  games={users.gamesPlayed} />
        ))}
        </ol>
      )
	}
}
UserList.propTypes = {
 	users: PropTypes.array.isRequired,
}
export default UserList;