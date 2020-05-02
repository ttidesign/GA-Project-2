import React from 'react';

function LastSearch({ lastSearch }) {
	return (
		<header>
			<div className='last-search-div'>
				<p>
					<strong>
						SHOWING SEARCH RESULTS FOR : <em>{lastSearch}</em>
					</strong>
				</p>
			</div>
		</header>
	);
}
export default LastSearch;
