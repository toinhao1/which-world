import { Grid } from '@nextui-org/react';
import CountryCard from '../CountryCard';

const CountryList = ({ selectedRegion, countries, searchCountries }) => {
	const countrySetToUse = searchCountries.length > 0 ? searchCountries : countries;

	const filteredCountrySetToUse = selectedRegion
		? countrySetToUse.filter((singleCountry) => singleCountry.region === selectedRegion)
		: countrySetToUse;

	return (
		<Grid.Container css={{ padding: 0 }} gap={6} justify='center'>
			{countries &&
				filteredCountrySetToUse.map((country) => (
					<Grid xs={10} md={3} sm={3} key={country.numericCode}>
						<CountryCard country={country} />
					</Grid>
				))}
		</Grid.Container>
	);
};

export default CountryList;
