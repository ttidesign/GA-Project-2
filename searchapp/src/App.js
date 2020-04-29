import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LastSearch from './components/LastSearch';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie';
import Footer from './components/Footer'
import TrendingsNow from './components/TrendingsNow';
function App() {
	const searchOptions = {
		key: process.env.REACT_APP_MOVIE_API_KEY,
		language: '&language=en-US',
		query: '&query=',
		page: '&page=1',
		adult: '&include_adult=false',
	};
	const [datas, setDatas] = useState([]);
	const [searchString, setSearchString] = useState('Avengers');
	const [lastSearch, setLastSearch] = useState('');
	const [trendings, setTrendings] = useState([])

	useEffect(() => {
		getDatas(searchString);
	}, []);
	useEffect(() => {
		getTrendings();
	}, []);
	function getDatas(searchString) {
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${searchOptions.key}${searchOptions.language}${searchOptions.query}${searchString}${searchOptions.page}${searchOptions.adult}`;
		
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setDatas(response.results);
				console.log(response);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}
	function getTrendings() {
		const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${searchOptions.key}`;
		console.log(url);
		fetch(url)
		.then((response) => response.json())
		.then((response) =>{setTrendings(response.results);
			console.log(response)}).catch(console.error);
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
			<Route
				exact
				path='/'
				render={(routerProps) => {
					return (
						<Search
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							searchString={searchString}
						/>
					);
				}}
			/>
			<TrendingsNow trendings={trendings}/>
			<Route
				exact
				path='/'
				render={(routerProps) => {
					return <LastSearch lastSearch={lastSearch} />;
				}}
			/>
			<Route
				exact
				path='/'
				render={(routerProps) => {
					return <SearchResults datas={datas} />;
				}}
			/>
			<Route
				exact
				path='/:id'
				render={(routerProps) => {
					console.log(routerProps);
					return <Movie datas={datas} id={routerProps.match.params.id} />;
				}}
			/>
			<Footer />
		</div>
	);
}

export default App;
