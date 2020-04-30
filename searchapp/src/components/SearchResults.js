import React from 'react';
import { Link } from 'react-router-dom';
import imageUrl from './imageUrl';
function SearchResults(props) {
	const { datas, moreItem, getMoreItem } = props;
	//console.log(datas);
	let itemToReturn;
	// return data from api call and display only first 10 items
	if (moreItem === false) {
		itemToReturn = (
			<div className='main-gallery'>
				{datas.slice(0, 10).map((data) => {
					if (data.poster_path === undefined) {
						data.poster_path = data.profile_path;
					}
					return (
						<div className='single-board' key={data.id}>
							<Link to={'/search/' + parseInt(data.id)}>
								<img
									className='thumbnails'
									src={imageUrl[0].smallImage + data.poster_path}
									alt={data.original_title}></img>
								<h3>{data.original_title || data.name}</h3>
								<p className='year-info'>
									Release: {data.release_date || data.first_air_date}
								</p>
							</Link>
						</div>
					);
				})}
			</div>
		);
		// if user click on show more items, the data from api call will set to all items return from the call
	} else if (moreItem === true) {
		itemToReturn = (
			<div className='main-gallery'>
				{datas.map((data) => {
					if (data.poster_path === undefined) {
						data.poster_path = data.profile_path;
					}
					return (
						<div className='single-board' key={data.id}>
							<Link to={'/' + parseInt(data.id)}>
								<img
									className='thumbnails'
									src={imageUrl[0].smallImage + data.poster_path}
									alt={data.original_title}></img>
								<h3>{data.original_title || data.name}</h3>
								<p className='year-info'>
									Release: {data.release_date || data.first_air_date}
								</p>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
	return (
		<div className='gallery-container'>
			{itemToReturn}
			<button className='show-more-button' onClick={getMoreItem}>
				SHOW MORE
			</button>
		</div>
	);
}
export default SearchResults;
