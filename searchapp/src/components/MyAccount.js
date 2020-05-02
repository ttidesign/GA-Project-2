import React from 'react';
function MyAccount() {
	function signUp(event) {
		event.preventDefault();
		event.target.innerText = 'Account Created';
		event.target.style = 'color: lightsalmon; font-weight:600';
	}
	return (
		<div className='sign-up'>
			<h3>Please Sign Up For An Account</h3>
			<form>
				<input
					className='email'
					placeholder='Enter Your Email'
					type='text'
					name='searchString'
					required></input>
				<input
					className='password'
					placeholder='Enter Your Password'
					type='text'
					name='searchString'
					required></input>
				<input
					className='confirm-password'
					placeholder='Confirm Your Password'
					type='text'
					name='searchString'
					required></input>
				<button onClick={signUp} className='signup-button' type='submit'>
					Sign Up
				</button>
			</form>
		</div>
	);
}
export default MyAccount;
