import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Grid } from '@nextui-org/react';
import Dropdown from 'react-dropdown';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

import 'react-dropdown/style.css';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
	const [query, setQuery] = useState('');
	const [searchCountries, setSearchedCountries] = useState([]);
	const [regionToFilter, setRegionToFilter] = useState('');

	const handleSearchInput = (event) => {
		setQuery(event.target.value);
		if (!event.target.value) {
			setSearchedCountries([]);
		}
	};

	const handleRegionSelect = ({ value }) => {
		if (value === regionToFilter) {
			setRegionToFilter('');
		} else {
			setRegionToFilter(value);
		}
	};

	let countryRegions = [];
	countries.forEach(({ region }) => {
		if (!countryRegions.includes(region)) {
			countryRegions.push(region);
		}
	});

	useEffect(() => {
		const searchCountries = async () => {
			const data = await fetch(`https://restcountries.com/v2/name/${query}`);
			const result = await data.json();
			console.log(result);
			setSearchedCountries(result);
		};
		if (query) {
			searchCountries();
		}
	}, [query]);

	return (
		<div>
			<Head>
				<title>Which World...</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Container>
					<Grid.Container gap={2} css={{ paddingBottom: 40 }} justify='space-between'>
						<Grid css={{ paddingLeft: 0, paddingRight: 0 }} xs={12} md={4}>
							<SearchBar query={query} handleSearchInput={handleSearchInput} />
						</Grid>
						<Grid css={{ paddingLeft: 0, paddingRight: 0 }} xs={12} md={2}>
							<Dropdown
								className='dropDown'
								onChange={handleRegionSelect}
								options={countryRegions}
								value={regionToFilter}
								placeholder='Filter by region..'
							/>
						</Grid>
					</Grid.Container>

					<CountryList
						selectedRegion={regionToFilter}
						countries={countries}
						searchCountries={searchCountries}
					/>
				</Container>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	// Likely a better way to be doing this
	const data = await fetch('https://restcountries.com/v2/all');
	const countries = await data.json();
	return {
		props: {
			countries,
		},
	};
}
