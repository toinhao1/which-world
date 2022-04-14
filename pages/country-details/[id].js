import { useEffect, useState } from 'react';
import { Card, Image, Container, Row, Col, Grid, Button, Loading, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

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

	if (isLoading || !countryDetails[0]) return <Loading type='points' size='xl' />;

	const { flag, name, population, region, capital, nativeName, subregion, topLevelDomain } =
		countryDetails[0];
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
								<Grid xs={12} md={6}>
									<Col>
										<Text h4>{name}</Text>
										<div>Native Name: {nativeName}</div>
										<div>Population: {population}</div>
										<div>Region: {region}</div>
										<div>SubRegion: {subregion}</div>
										<div>Capital: {capital}</div>
									</Col>
								</Grid>
								<Grid xs={12} md={6}>
									<Col>
										<div>Top Level Domian: {topLevelDomain}</div>
										<div>Currencies: {region}</div>
										<div>Languages: {subregion}</div>
									</Col>
								</Grid>
							</Grid.Container>
						</Card>
					</Grid>
				</Grid.Container>
			</Row>
		</Container>
	);
};

export default CountryDetails;
