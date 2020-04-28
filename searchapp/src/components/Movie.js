import React from 'react';
import imageUrl from './imageUrl';
function Movie(props) {
	let info;
	for (let i = 0; i < props.datas.length; i++) {
		if (props.datas[i].id === parseInt(props.id)) {
			console.log(props, props.datas[0].poster_path);
			info = props.datas[i];
		}
	}
	return (
		<div>
			<img src={imageUrl + info.poster_path}></img>
			<h2>{info.original_title} </h2>;
		</div>
	);
}
export default Movie;
