import React from 'react';
function Search(props) {
	const { searchString, handleChange, handleSubmit } = props;
	return (
		<div className='search-bar'>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Search for movies'
					type='test'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}></input>
				<button className='search-button' type='submit'>
					🔍 Search
				</button>
			</form>
		</div>
	);
}
export default Search;