import { Card, Image, Link } from '@nextui-org/react';

const CountryCard = ({ country: { flag, name, population, region, capital } }) => {
	return (
		<Link href={`/country-details/${encodeURIComponent(name)}`}>
			<Card>
				<Image src={flag} />
				<h4>{name}</h4>
				<div>Population: {Number(population).toLocaleString()}</div>
				<div>Region: {region}</div>
				<div>Capital: {capital}</div>
			</Card>
		</Link>
	);
};

export default CountryCard;
