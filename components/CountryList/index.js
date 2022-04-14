import { Grid } from '@nextui-org/react';
import CountryCard from '../CountryCard';

const CountryList = ({ countries, searchCountries }) => {
	const countrySetToUse = searchCountries.length > 0 ? searchCountries : countries;

	return (
		<Grid.Container css={{ padding: 0 }} gap={2} justify='center'>
			{countries &&
				countrySetToUse.map((country) => (
					<Grid xs={10} md={3} sm={3} key={country.numericCode}>
						<CountryCard country={country} />
					</Grid>
				))}
		</Grid.Container>
	);
};

export default CountryList;
