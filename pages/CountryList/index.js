import { Grid, Card, Text } from '@nextui-org/react';
import CountryCard from '../CountryCard';

const CountryList = () => {
	return (
		<Grid.Container gap={2} justify='center'>
			<Grid xs={4}>
				<CountryCard />
			</Grid>
		</Grid.Container>
	);
};

export default CountryList;
