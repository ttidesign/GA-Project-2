import React from 'react';
import { Link } from 'react-router-dom';
import imageUrl from './imageUrl';
const SearchResults = ({ datas }) => {
	// const imageUrl = 'https://image.tmdb.org/t/p/w300/'
	if (!datas.length) {
		return <h2>result not found</h2>;
	}
	return (
		<div>
			<h3> Movies</h3>
			<div className='main-gallery'>
				{datas.map((data) => (
					<div className='single-board' key={data.id}>
						<Link to={'/' + parseInt(data.id)}>
							{' '}
							<img
								className='thumbnails'
								src={
									imageUrl + data.poster_path || imageUrl + data.profile_path
								}
								alt={data.original_title}></img>
							<h3>{data.original_title || data.name}</h3>
							<p className='year-info'>
								Release: {data.release_date || data.first_air_date}
							</p>{' '}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default SearchResults;
