import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const searchOptions = {
		key: process.env.Movie_API_Key,
	};
	const [images, setImage] = useState([]);
	const [searchString, setSearchString] = useState('avengers');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getImages(searchString);
	}, [getImages, searchString]);
	console.log(searchOptions.key);

	function getImages(searchString) {
		const url = `http://www.omdbapi.com/?apikey=${searchOptions.key}$`;
		console.log(url);
	}
	return <div></div>;
}

export default App;
