import React from 'react';
function Search(props) {
	const { searchString, handleChange, handleSubmit } = props;
	return (
		<div className='search-container'>
			<div className='search-bar'>
				<form onSubmit={handleSubmit}>
					<input
						placeholder='Search for Movies, TV Shows'
						type='test'
						name='searchString'
						required
						onChange={handleChange}
						value={searchString}></input>
					<button className='search-button' type='submit'>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
export default Search;
