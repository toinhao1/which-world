import { useEffect, useState } from 'react';
import { Image, Container, Row, Grid, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

import LoadingData from '../../components/loading';
import CountryDetailsCard from '../../components/CountryDetails';

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

	const { flag } = countryDetails[0];

	return (
		<Container>
			<Row css={{ paddingLeft: 20, paddingTop: 50, paddingBottom: 50 }}>
				<Grid.Container css={{ padding: 0 }} gap={2} justify='flex-start'>
					<Grid xs={12} md={6}>
						<Button
							size='sm'
							css={{
								backgroundColor: 'White',
								color: 'Black',
								boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
								borderRadius: 4,
							}}
							onClick={handleGoBack}>
							Back
						</Button>
					</Grid>
				</Grid.Container>
			</Row>
			<Row>
				<Grid.Container gap={4} justify='space-between'>
					<Grid xs={12} md={6}>
						<Image src={flag} />
					</Grid>
					<Grid xs={12} md={6}>
						<CountryDetailsCard countryDetails={countryDetails[0]} />
					</Grid>
				</Grid.Container>
			</Row>
		</Container>
	);
};

export default CountryDetails;
