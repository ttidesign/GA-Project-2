import React from 'react';
import logo from '../Shared/MS-W.svg';
function Nav() {
	return (
		<div className='nav-container'>
			<nav>
				<img className='main-logo' src={logo} alt='movie database logo' />
				<ul>
					<li>Home |</li>
					<li>Watch List |</li>
					<li>Portfolio</li>
				</ul>
			</nav>
		</div>
	);
}
export default Nav;
