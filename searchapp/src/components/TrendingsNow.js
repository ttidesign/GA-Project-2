import React from 'react';
import imageUrl from './imageUrl';
const Trendings=({trendings})=> {
    console.log(trendings, imageUrl.smallImage)
    return (
        <>
			<p>Top 5 Trendings Now</p>
			<div className='trending-container'>
				{trendings.slice(0, 5).map((trending) => (
						<img
							className='trending'
							src={imageUrl.smallImage + trending.poster_path}
						/>
				))}
			</div>
            </>
		);
}
export default Trendings;