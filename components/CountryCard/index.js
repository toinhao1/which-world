import { Card, Image, Link } from '@nextui-org/react';

const CountryCard = ({ country: { flags, name, population, region, capital } }) => {
	return (
		<Link css={{ color: 'Black' }} href={`/country-details/${encodeURIComponent(name)}`}>
			<Card css={{ height: 400 }}>
				<Image height={200} width={284} objectFit='fill' alt={`${name}'s flag`} src={flags.png} />
				<h4>{name}</h4>
				<div>Population: {Number(population).toLocaleString()}</div>
				<div>Region: {region}</div>
				<div>Capital: {capital}</div>
			</Card>
		</Link>
	);
};

export default CountryCard;
