import { useEffect, useState } from 'react';
import { Link } from '@nextui-org/react';

const CountryButton = ({ countryCode }) => {
	const [countryName, setCountryName] = useState('');

	useEffect(() => {
		const getCountryNameWithCode = async () => {
			const data = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
			const result = await data.json();
			setCountryName(result.name);
		};
		if (countryCode) {
			getCountryNameWithCode();
		}
	}, [countryCode]);

	return (
		<Link css={{ cursor: 'default' }} href={`/country-details/${encodeURIComponent(countryName)}`}>
			<button id='countryButton'>{countryName}</button>
		</Link>
	);
};

export default CountryButton;
