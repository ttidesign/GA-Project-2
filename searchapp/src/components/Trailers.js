import React from 'react';
import YouTube from 'react-youtube';
import imageUrl from './imageUrl';

class Trailers extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const opts = {
			height: '200',
			width: '360',
			playerVars: {
				autoplay: 1,
			},
		};
		return (
			<div className='trailers-container'>
				<h4>LATEST TRAILERS</h4>
				<div className='clip'>
					<YouTube
						videoId={imageUrl[2].link}
						opts={opts}
						onReady={this._onReady}
					/>
					<YouTube
						videoId={imageUrl[3].link}
						opts={opts}
						onReady={this._onReady}
					/>
					<YouTube
						videoId={imageUrl[4].link}
						opts={opts}
						onReady={this._onReady}
					/>
				</div>
			</div>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.stopVideo();
	}
}

export default Trailers;
