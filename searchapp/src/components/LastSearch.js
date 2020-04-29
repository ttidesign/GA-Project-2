import React from 'react';

function LastSearch({ lastSearch }) {
	return (
		<header>
			<div className='last-search-div'>
				<p>
					<strong> Showing Search Results For : {lastSearch}</strong>
				</p>
			</div>
		</header>
	);
}
export default LastSearch;
