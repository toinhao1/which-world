import { useEffect, useState } from 'react';
import { Card, Image, Container, Row, Col, Grid, Button, Loading, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

import LoadingData from '../../components/loading';
import CountryButton from '../../components/countryButton';

const CountryDetails = () => {
	const [countryDetails, setCountryDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { id } = router.query;

	const handleGoBack = () => {
		router.back();
	};

	useEffect(() => {
		setIsLoading(true);
		const getCountryDetails = async () => {
			const data = await fetch(`https://restcountries.com/v2/name/${id}?fullText=true`);
			const result = await data.json();
			setCountryDetails(result);
			setIsLoading(false);
		};
		if (id) {
			getCountryDetails();
		}
	}, [id]);

	if (isLoading || !countryDetails[0]) return <LoadingData />;

	const {
		flag,
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
	} = countryDetails[0];

	const currenciesToDisplay = currencies.map((sinlgeCurrency) => sinlgeCurrency.name).join(', ');
	const languagesToDisplay = languages.map((singleLanguage) => singleLanguage.name).join(', ');
	return (
		<Container>
			<Row>
				<Button onClick={handleGoBack}>Back</Button>
			</Row>
			<Row>
				<Grid.Container gap={2} justify='center'>
					<Grid xs={12} md={6}>
						<Image src={flag} />
					</Grid>
					<Grid xs={12} md={6}>
						<Card>
							<Grid.Container gap={2} justify='center'>
								<Row>
									<Text h3>{name}</Text>
								</Row>
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
								<Row>
									Border Countries:{'  '}
									{borders ? (
										borders.map((countryCode) => (
											<CountryButton key={countryCode} countryCode={countryCode} />
										))
									) : (
										<Text> No Borders Provided</Text>
									)}
								</Row>
							</Grid.Container>
						</Card>
					</Grid>
				</Grid.Container>
			</Row>
		</Container>
	);
};

export default CountryDetails;
