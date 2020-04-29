import React from 'react';
import imageUrl from './imageUrl';
import { Link } from 'react-router-dom';

const TrendingsNow = ({ trendings }) => {
	console.log(trendings, imageUrl.smallImage);
	return (
		<div className=''>
			<h4 style={{ margin: '3rem 1rem 1rem' }}>TRENDING NOW</h4>
			<div className='trending-container'>
				{trendings.map((data) => (
					<div className='trending-image-container' key={data.id}>
						<Link to={'/' + parseInt(data.id)}>
							<img
								className='trending'
								src={
									imageUrl.smallImage + data.poster_path ||
									imageUrl.smallImage + data.profile_path
								}
								alt={data.original_title}></img>
							<p
								style={{
									fontSize: '13px',
									color: 'black',
									textAlign: 'center',
								}}>
								Release: {data.release_date || data.first_air_date}
							</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default TrendingsNow;