import { Card, Image } from '@nextui-org/react';

const CountryCard = ({ country: { flag, name, population, region, capital } }) => {
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

export default CountryCard;
