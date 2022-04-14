import { useEffect, useState } from 'react';
import { Grid } from '@nextui-org/react';
import CountryCard from '../countryCard';

const CountryList = ({ searchCountries }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getCountries = async () => {
			const data = await fetch('https://restcountries.com/v2/all');
			const result = await data.json();
			setCountries(result);
		};
		getCountries();
	}, []);

	const countrySetToUse = searchCountries.length > 0 ? searchCountries : countries;

	return (
		<Grid.Container gap={2} justify='center'>
			{countries &&
				countrySetToUse.map((country) => (
					<Grid key={country.numericCode} xs={3}>
						<CountryCard country={country} />
					</Grid>
				))}
		</Grid.Container>
	);
};

export default CountryList;
