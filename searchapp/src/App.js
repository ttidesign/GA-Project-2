import React, { useState, useEffect } from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LastSearch from './components/LastSearch';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie';
import Footer from './components/Footer'
import TrendingsNow from './components/TrendingsNow';
import Trending from './components/Trending';
import Trailers from './components/Trailers'
import WatchList from './components/WatchList';
import MyAccount from './components/MyAccount' 
function App() {
	const searchOptions = {
		key: process.env.REACT_APP_MOVIE_API_KEY,
		language: '&language=en-US',
		query: '&query=',
		page: '&page=1',
		adult: '&include_adult=false',
	};
	//set initial data array using use-state
	const [datas, setDatas] = useState([]);
	//set initial search string to 'avenger' using set-state 
	const [searchString, setSearchString] = useState('Avengers');
	// set last search item to empty string
	const [lastSearch, setLastSearch] = useState('');
	//set initial data for different api call
	const [trendings, setTrendings] = useState([])
	// set more item from api call to false
	const [moreItem, setMoreItem] = useState(false)
	//const [favorite, setFavorite] = useState([])
	
	useEffect(() => {
		getDatas(searchString);
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		getTrendings();
		//eslint-disable-next-line
	}, []);
	
	//function that update more item and show on main page
	function getMoreItem() {
		setMoreItem(!moreItem);
	}

	//function with api call to get data from server - search feature
	function getDatas(searchString) {
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${searchOptions.key}${searchOptions.language}${searchOptions.query}${searchString}${searchOptions.page}${searchOptions.adult}`;
		//fetch data
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				//console.log(response.results)
				//set datas value and assign to datas array
				setDatas(response.results);
				// display last search item on page
				setLastSearch(searchString);
				// reset search box
				setSearchString('');
			})
			.catch(console.error);
	}
	//function that make an api call to get different data -trending
	function getTrendings() {
		const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${searchOptions.key}`;
		fetch(url)
		.then((response) => response.json())
		//return result
		.then((response) =>{setTrendings(response.results);
		//console.log(response)
		})
		.catch(console.error);
		}
	
	//get value from search box
	function handleChange(event) {
		setSearchString(event.target.value);
	}

	// update search data when submit
	function handleSubmit(event) {
		event.preventDefault();
		getDatas(searchString);
	}
	return (
		<div className='app-wrapper'>
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
			
			<Route
				exact
				path='/'
				render={(routerProps) => {
					return <TrendingsNow trendings={trendings} />;
				}}
			/>

			<Route
				exact
				path='/trending/:id'
				render={(routerProps) => {
					//console.log(routerProps);
					return (
						<Trending trendings={trendings} id={routerProps.match.params.id} />
					);
				}}
			/>
			<Route path='/' exact component={Trailers} />
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
					return (
						<SearchResults
							datas={datas}
							moreItem={moreItem}
							getMoreItem={getMoreItem}
						/>
					);
				}}
			/>

			<Route
				exact
				path='/search/:id'
				render={(routerProps) => {
					return <Movie datas={datas} id={routerProps.match.params.id} />;
				}}
			/>
			<Route path='/watchlist' exact component={WatchList} />
			<Route path='/account' exact component={MyAccount} />
			<Footer />
		</div>
	);
}

export default App;
