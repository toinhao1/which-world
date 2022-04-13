import { useState } from 'react';
import { Input } from '@nextui-org/react';

const SearchBar = () => {
	const [query, setQuery] = useState('');

	const handleSearchInput = (event) => {
		setQuery(event.target.value);
	};
	console.log(query);
	return (
		<Input
			aria-label='search input'
			value={query}
			onChange={handleSearchInput}
			placeholder='Search for a country...'
		/>
	);
};

export default SearchBar;
