import React from 'react';
import Lists from './Lists';
import imageUrl from './imageUrl';

function WatchList() {
	console.log(Lists);
	let listItem;
	if (Lists.length === 0) {
		listItem = <h3>Watch List Is Empty</h3>;
	} else if (Lists.length > 0) {
		listItem = (
			<div className='watch-list-board'>
				{Lists.map((data) => {
					if (data.poster_path === undefined) {
						data.poster_path = data.profile_path;
					}
					return (
						<div className='' key={Lists.id}>
							<img
								className=''
								src={imageUrl[0].smallImage + data.poster_path}
								alt='movie image'></img>
							<h3>{data.original_title || data.name}</h3>
							<h3>Release: {data.release_date || data.first_air_date}</h3>
							<h3>{data.overview}</h3>
						</div>
					);
				})}
			</div>
		);
	}

	return listItem;
}

export default WatchList;
