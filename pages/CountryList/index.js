import { Grid } from '@nextui-org/react';
import CountryCard from '../CountryCard';

const CountryList = ({ countries }) => {
	return (
		<Grid.Container gap={2} justify='center'>
			{countries &&
				countries.map((country) => (
					<Grid xs={3}>
						<CountryCard country={country} key={country.numericCode} />
					</Grid>
				))}
		</Grid.Container>
	);
};

export default CountryList;
