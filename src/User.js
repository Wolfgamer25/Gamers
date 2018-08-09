import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  	const {username, block} = props
	return(<li>
           	<div className = "username"> 
                <p>{username} </p> 
                <p style={block}> {props.games} </p>
			</div>
           </li>)
}
User.propTypes = {
 	username: PropTypes.string.isRequired,
  	games: PropTypes.number.isRequired
}
export default User;