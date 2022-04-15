import { Card, Grid, Col, Text, Row } from '@nextui-org/react';

import CountryButton from '../countryButton';

const CountryDetailsCard = ({ countryDetails }) => {
	const {
		name,
		population,
		region,
		capital,
		nativeName,
		subregion,
		topLevelDomain,
		currencies,
		languages,
		borders,
	} = countryDetails;

	const currenciesToDisplay = currencies.map((sinlgeCurrency) => sinlgeCurrency.name).join(', ');
	const languagesToDisplay = languages.map((singleLanguage) => singleLanguage.name).join(', ');

	return (
		<Card>
			<Grid.Container gap={2} justify='space-between'>
				<Grid md={12}>
					<Text h3>{name}</Text>
				</Grid>
				<Grid xs={12} md={6}>
					<Col>
						<Row>
							<div className='labelDeatilName'>Native Name:</div>
							<div>{nativeName}</div>
						</Row>
						<Row>
							<div className='labelDeatilName'>Population: </div>{' '}
							<div>{Number(population).toLocaleString()}</div>
						</Row>
						<Row>
							<div className='labelDeatilName'>Region:</div>
							<div>{region}</div>
						</Row>

						<Row>
							{' '}
							<div className='labelDeatilName'>SubRegion:</div>
							<div>{subregion}</div>
						</Row>
						<Row>
							{' '}
							<div className='labelDeatilName'>Capital:</div>
							<div>{capital}</div>
						</Row>
					</Col>
				</Grid>
				<Grid xs={12} md={6}>
					<Col>
						<Row>
							<div className='labelDeatilName'>Top Level Domian:</div>
							<div>{topLevelDomain}</div>
						</Row>
						<Row>
							<div className='labelDeatilName'>Currencies:</div>
							<div>{currenciesToDisplay}</div>
						</Row>
						<Row>
							<div className='labelDeatilName'>Languages:</div>
							<div>{languagesToDisplay}</div>
						</Row>
					</Col>
				</Grid>
				<Grid md={12}>
					Border Countries:{'  '}
					{borders ? (
						borders.map((countryCode) => (
							<CountryButton key={countryCode} countryCode={countryCode} />
						))
					) : (
						<Text> No Borders Provided</Text>
					)}
				</Grid>
			</Grid.Container>
		</Card>
	);
};

export default CountryDetailsCard;
