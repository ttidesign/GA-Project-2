import React from 'react';
import { Link, Route } from 'react-router-dom';
import imageUrl from './imageUrl';
import Lists from './Lists';
import { useEffect, useState } from 'react';
 import WatchList from './WatchList';

function Movie(props) {
	const [info, setInfo] = useState([]);
	useEffect(() => {
		for (let i = 0; i < props.datas.length; i++) {
			if (props.datas[i].id === parseInt(props.id)) {
				console.log(props, props.datas[0].overview);
				setInfo(props.datas[i]);
			}
		}
		//eslint-disable-next-line
	}, []);
	function addItem(event) {
		Lists.push(info);
		event.target.innerText = 'ADDED TO WATCH LIST';
	}
	if (info.length === 0) {
		return <div></div>;
	}
	console.log(info);
	return (
		<div style={{ height: '800px', backgroundColor: 'rgb(53, 53, 53)' }}>
			<div className='section-container'>
				<div className='movie-container'>
					<img
						src={imageUrl[1].largeImg + info.poster_path}
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
						<div style={{ display: 'flex' }}>
							<Link to='/'>
								<button className='home-button'>HOME</button>
							</Link>
							<button onClick={addItem} className='add-to-list'>
								{' '}
								ADD TO WATCH LIST
							</button>
						</div>
					</div>
				</div>
			</div>
			<Route path='/watch' component ={WatchList} />
		</div>
	);
}
export default Movie;
