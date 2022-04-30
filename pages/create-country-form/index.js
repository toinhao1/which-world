import { useState } from 'react';
import { Image, Container, Row, Grid, Button, Input, Col, Card } from '@nextui-org/react';

import BackButton from '../../components/BackButton';

const CreateCountryForm = () => {
	const [countryName, setCountryName] = useState('');
	const [nativeName, setNativeName] = useState('');
	const [region, setRegion] = useState('');
	const [population, setPopulation] = useState();

	const handleChange = (e) => {
		const { value, name } = e.target;

		if (name === 'countryName') setCountryName(value);
		if (name === 'nativeName') setNativeName(value);
		if (name === 'region') setRegion(value);
		if (name === 'population') setPopulation(value);
	};

	return (
		<Container css={{ marginTop: 60 }}>
			<BackButton text={'Back'} />
			<Card css={{ width: 600, margin: 'auto' }}>
				<form>
					<Grid.Container gap={4} justify='center'>
						<Grid>
							<Input
								style={{
									width: 200,
									borderWidth: 0,
									padding: 15,
									borderRadius: 4,
									color: 'black',
								}}
								name='countryName'
								aria-label='field for country name'
								onChange={handleChange}
								value={countryName}
								placeholder='Country name'
							/>
						</Grid>
						<Grid>
							<Input
								style={{
									width: 200,
									borderWidth: 0,
									padding: 15,
									borderRadius: 4,
									color: 'black',
								}}
								aria-label='Field for natvie name'
								name='nativeName'
								value={nativeName}
								onChange={handleChange}
								placeholder='Native name'
							/>
						</Grid>
						<Grid>
							<Input
								style={{
									width: 200,
									borderWidth: 0,
									padding: 15,
									borderRadius: 4,
									color: 'black',
								}}
								aria-label='Field for region'
								name='region'
								value={region}
								onChange={handleChange}
								placeholder='Region'
							/>
						</Grid>
						<Grid>
							<Input
								style={{
									width: 200,
									borderWidth: 0,
									padding: 15,
									borderRadius: 4,
									color: 'black',
								}}
								aria-label='Field for population number'
								name='population'
								value={population}
								onChange={handleChange}
								placeholder='Population'
							/>
						</Grid>
					</Grid.Container>
				</form>
			</Card>
		</Container>
	);
};

export default CreateCountryForm;
