import React from 'react';
import imageUrl from './imageUrl';

function WatchList() {
	let listItem;
	let watchList;
	const currentWatchList = localStorage.getItem('watchlist');
	if (currentWatchList) {
		watchList = JSON.parse(currentWatchList);
	}
	function clearList() {
		localStorage.clear('watchlist');
		window.location.reload();
	}
	React.useState(watchList);
	if (!watchList) {
		listItem = <h3>WATCH LIST IS EMPTY</h3>;
	} else if (watchList.length > 0) {
		listItem = (
			<>
				<h3>CURRENT WATCH LIST</h3>
				{watchList.map((data) => {
					if (data.poster_path === undefined) {
						data.poster_path = data.profile_path;
					}
					return (
						<div className='watch-list-board' key={watchList.id}>
							<div>
								<img
									className='small-img'
									src={imageUrl[0].smallImage + data.poster_path}
									alt='movie poster'></img>
							</div>
							<div className='watch-list-info'>
								<h4>{data.original_title || data.name}</h4>
								<h4>Release: {data.release_date || data.first_air_date}</h4>
								<p>{data.overview}</p>
							</div>
						</div>
					);
				})}
				<button className='clear-list' onClick={clearList}>
					Clear List
				</button>
			</>
		);
	}

	return listItem;
}

export default WatchList;
