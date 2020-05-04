import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Shared/MS-W.svg';
function Nav() {
	return (
		<nav>
			<Link to='/'>
				<img className='main-logo' src={logo} alt='movie database logo' />
			</Link>
			<ul>
				<Link to='/'>
					<li>Home |</li>
				</Link>
				<Link to='/watchlist'>
					<li>Watch List |</li>
				</Link>
				<Link to='/account'>
					<li>My Account</li>
				</Link>
			</ul>
		</nav>
	);
}
export default Nav;
