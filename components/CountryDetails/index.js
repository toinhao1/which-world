import { Card, Grid, Col, Text } from '@nextui-org/react';

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
						<div>Native Name: {nativeName}</div>
						<div>Population: {Number(population).toLocaleString()}</div>
						<div>Region: {region}</div>
						<div>SubRegion: {subregion}</div>
						<div>Capital: {capital}</div>
					</Col>
				</Grid>
				<Grid xs={12} md={6}>
					<Col>
						<div>Top Level Domian: {topLevelDomain}</div>
						<div>Currencies: {currenciesToDisplay}</div>
						<div>Languages: {languagesToDisplay}</div>
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
