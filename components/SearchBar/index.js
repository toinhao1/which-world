const SearchBar = ({ query, handleSearchInput }) => {
	return (
		<input
			style={{
				width: 400,
				borderWidth: 0,
				padding: 15,
				boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
				borderRadius: 4,
				color: 'black',
			}}
			aria-label='search input'
			value={query}
			onChange={handleSearchInput}
			placeholder='Search for a country...'
		/>
	);
};

export default SearchBar;
