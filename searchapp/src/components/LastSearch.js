import React from 'react';

function LastSearch({ lastSearch }) {
	return (
		<header>
			<div className='last-search-div'>
				<p>
					<strong>
						Showing Search Results For : <em>{lastSearch}</em>
					</strong>
				</p>
			</div>
		</header>
	);
}
export default LastSearch;
