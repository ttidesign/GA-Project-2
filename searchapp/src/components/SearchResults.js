import React from 'react';
import { Link } from 'react-router-dom';
import imageUrl from './imageUrl';
const SearchResults = ({ datas }) => {
	if (!datas.length) {
		return <h2>result not found</h2>;
	}
	return (
		<div className='gallery-container'>
			<h3> Movies</h3>
			<div className='main-gallery'>
				{datas.slice(0,10).map((data) => (
					<div className='single-board' key={data.id}>
						<Link to={'/' + parseInt(data.id)}>
							<img
								className='thumbnails'
								src={
									imageUrl.smallImage + data.poster_path || imageUrl.smallImage + data.profile_path
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
