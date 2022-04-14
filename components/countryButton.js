import { useEffect, useState } from 'react';
import { Link } from '@nextui-org/react';

const CountryButton = ({ countryCode }) => {
	const [countryName, setCountryName] = useState('');

	useEffect(() => {
		const getCountryNameWithCode = async () => {
			console.log(countryCode);
			const data = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
			const result = await data.json();
			console.log(result);
			setCountryName(result.name);
		};
		if (countryCode) {
			getCountryNameWithCode();
		}
	}, [countryCode]);

	return (
		<Link href={`/country-details/${encodeURIComponent(countryName)}`}>
			<button>{countryName}</button>
		</Link>
	);
};

export default CountryButton;
