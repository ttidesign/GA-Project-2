import React, { useState, useEffect } from 'react';
import{Link, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie'
function App() {
	const searchOptions = {
		key: process.env.REACT_APP_MOVIE_API_KEY,
	};
	const [datas, setDatas] = useState([]);
	const [searchString, setSearchString] = useState('star wars');
	//const [searchId, setSearchId] = useState('tt3896198');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getDatas(searchString);
	}, []);
	function getDatas(searchString) {
		const url = `http://www.omdbapi.com/?s=${searchString}&t=&apikey=${searchOptions.key}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setDatas(response.Search);
				console.log(response, response.Search);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}
	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getDatas(searchString);
	}
	return (
		<div>
			<Nav />
			<Search
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchResults datas={datas} />
			<Route path='/' exact component={Movie}/> 
		</div>
	);
}

export default App;
