import { useEffect, useState } from 'react';
import { Card, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

const CountryDetails = () => {
	const [countryDetails, setCountryDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { id } = router.query;

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

	if (isLoading) return <p>'Loading.....'</p>;

	const { flag, name, population, region, capital } = countryDetails[0];
	return (
		<Card>
			<Image src={flag} />
			<h4>{name}</h4>
			<div>Population: {population}</div>
			<div>Region: {region}</div>
			<div>Capital: {capital}</div>
		</Card>
	);
};

export default CountryDetails;
