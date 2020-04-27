import React from 'react';

const SearchResults = ({ datas }) => {
	if (!datas.length) {
		return <h2>result not found</h2>;
	}
	return (
		<div>
			<h3> Movies</h3>
			<div className='main-gallery'>
				{datas.reverse().map((data) => (
					<div
						className='single-board'
						key={data.imdbID + Math.floor(Math.random() * 20)}>
						<img src={data.Poster} alt={data.Title}></img>
						<h3>{data.Title}</h3>
						<h4>Release-{data.Year}</h4>
					</div>
				))}
			</div>
		</div>
	);
};
export default SearchResults;
