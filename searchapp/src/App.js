import React, { useState, useEffect } from 'react';
import{Link, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import LastSearch from './components/LastSearch'
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie'
function App() {
	const searchOptions = {
		key: process.env.REACT_APP_MOVIE_API_KEY,
		language: '&language=en-US',
		query: '&query=',
		page: '&page=1',
		adult: '&include_adult=false',
	};
	const [datas, setDatas] = useState([]);
	const [searchString, setSearchString] = useState('avengers');
	//const [imageUrl, setImageUrl] = useState('https://image.tmdb.org/t/p/w300/');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getDatas(searchString);
	}, []);

	async function getDatas(searchString) {
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${searchOptions.key}${searchOptions.language}${searchOptions.query}${searchString}${searchOptions.page}${searchOptions.adult}`;
		//const imageUrl= `${searchOptions.movieImageUrl}`
		console.log(url)
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
			<Route exact path='/' render={(routerProps)=> {
				return( <Search
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>)
			}} />
			<Route exact path='/' render={(routerProps)=> {
				return (<LastSearch lastSearch={lastSearch}/> )
			}} />
			<Route exact path='/' render={(routerProps)=>{
				return( <SearchResults datas={datas}/>)
			}} />
			<Route exact path='/:id' render={(routerProps)=> {
				console.log(routerProps)
				return (
					<Movie
						datas={datas}
						id={routerProps.match.params.id}
					/>
				);
			}}/> 
		</div>
	);
}

export default App;
