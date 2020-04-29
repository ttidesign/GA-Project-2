import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../Shared/MS-W.svg';
function Nav() {
	return (
		<div className='nav-container'>
			<nav>
				<Link to='/'>
					{' '}
					<img className='main-logo' src={logo} alt='movie database logo' />
				</Link>
				<ul>
					<li>Home |</li>
					<li>Watch Lists |</li>
					<li>Portfolio</li>
				</ul>
			</nav>
		</div>
	);
}
export default Nav;
