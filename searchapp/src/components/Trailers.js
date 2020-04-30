import React from 'react';
import YouTube from 'react-youtube';
import imageUrl from './imageUrl';

class Trailers extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		function rotateClip() {}
		const opts = {
			height: '200',
			width: '360',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1,
			},
		};
		return (
			<div>
				<h4>LATEST TRAILERS</h4>
				<YouTube videoId='A4du3_6QGm8' opts={opts} onReady={this._onReady} />
			</div>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.stopVideo();
	}
}

export default Trailers;
