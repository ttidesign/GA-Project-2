import React from 'react';
import logo from '../Shared/tmdb.svg';
function Footer() {
	return (
		<footer>
			<nav>
				<div className='ttid'>
					<p>Designed by TTIDESIGN</p>
				</div>
				<div>
					<a href='https://www.themoviedb.org/'>
						<img className='brand' src={logo} alt='movie database logo' />
					</a>
					<p className='brand-info'>Powered by The Movie Database</p>
				</div>
			</nav>
		</footer>
	);
}
export default Footer;
