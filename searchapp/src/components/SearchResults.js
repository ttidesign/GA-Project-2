import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imageUrl from './imageUrl';
const SearchResults = ({ datas, showMore, handleMoreItem }) => {
	//console.log(handleMoreItem);
	console.log('showMore', showMore);
	if (showMore === false) {
		datas.length = 10;
	} else if (showMore === true) {
		datas.length = 20;
	}
	return (
		<div className='gallery-container'>
			<button onClick={handleMoreItem}>SHOW MORE</button>
			<div className='main-gallery'>
				{datas.map((data) => (
					<div className='single-board' key={data.id}>
						<Link to={'/' + parseInt(data.id)}>
							<img
								className='thumbnails'
								src={
									imageUrl.smallImage + data.poster_path ||
									imageUrl.smallImage + data.profile_path
								}
								alt={data.original_title}></img>
							<h3>{data.original_title || data.name}</h3>
							<p className='year-info'>
								Release: {data.release_date || data.first_air_date}
							</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default SearchResults;
