import { Card, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

const CountryDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Card>
			{/* <Image src={flag} /> */}
			<h4>{id}</h4>
			{/* <div>Population: {population}</div>
			<div>Region: {region}</div>
			<div>Capital: {capital}</div> */}
		</Card>
	);
};

export default CountryDetails;
