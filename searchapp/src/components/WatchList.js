import React from 'react';
import Lists from './Lists';
import imageUrl from './imageUrl';

function WatchList() {
	let listItem;
	if (Lists.length === 0) {
		listItem = <h3>WATCH LIST IS EMPTY</h3>;
	} else if (Lists.length > 0) {
		listItem = (
			<>
				<h3>CURRENT WATCH LIST</h3>
				{Lists.map((data) => {
					if (data.poster_path === undefined) {
						data.poster_path = data.profile_path;
					}
					return (
						<div className='watch-list-board' key={Lists.id}>
							<div>
								<img
									className='small-img'
									src={imageUrl[0].smallImage + data.poster_path}
									alt='movie image'></img>
							</div>
							<div className='watch-list-info'>
								<h4>{data.original_title || data.name}</h4>
								<h4>Release: {data.release_date || data.first_air_date}</h4>
								<p>{data.overview}</p>
							</div>
						</div>
					);
				})}
			</>
		);
	}

	return listItem;
}

export default WatchList;
