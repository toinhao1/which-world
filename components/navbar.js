import { Row, Text, Container, Link, Button } from '@nextui-org/react';

const NavBar = () => {
	return (
		<Container
			css={{
				zIndex: 0,
				position: 'relative',
				boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
				maxWidth: '100%',
			}}>
			<Container>
				<Row css={{ paddingTop: 20, paddingBottom: 20 }} justify='space-between'>
					<Text css={{ fontWeight: 800 }}>Which World Is This?</Text>
					<Link href='/create-country-form'>
						<Button
							css={{
								backgroundColor: 'White',
								color: 'Black',
								boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
								borderRadius: 4,
							}}>
							Create A Country
						</Button>
					</Link>
					{/* <Text>Toggle theme</Text> */}
				</Row>
			</Container>
		</Container>
	);
};

export default NavBar;
