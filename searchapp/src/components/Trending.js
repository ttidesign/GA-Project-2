import React from 'react';
import { Link } from 'react-router-dom';
import imageUrl from './imageUrl';
function Trending(props) {
	console.log(props);
	let info;
	for (let i = 0; i < props.trendings.length; i++) {
		if (props.trendings[i].id === parseInt(props.id)) {
			console.log(props, props.trendings[0].overview);
			info = props.trendings[i];
		}
	}
	return (
		<div style={{ height: '800px', backgroundColor: 'rgb(53, 53, 53)' }}>
			<div className='section-container'>
				<div className='movie-container'>
					<img
						src={imageUrl.largeImg + info.poster_path}
						alt={info.title}></img>

					{/* <img className ='backdrop' src={imageUrl.backDrop + info.backdrop_path}></img> */}

					<div className='info-container'>
						<h2>{info.original_title} </h2>
						<h4>Release Date: {info.release_date || info.first_air_date}</h4>
						<h4>Rating: {info.vote_average}/10</h4>
						<h4>
							<strong> Overview </strong>
						</h4>
						<p> {info.overview}</p>
						<Link to='/'>
							<button className='home-button'>Home</button>
						</Link>
						<button className='add-to-list'>Add to Watch Lists</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Trending;
