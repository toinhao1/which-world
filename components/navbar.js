import { Row, Text, Container } from '@nextui-org/react';

const NavBar = () => {
	return (
		<Container css={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)', maxWidth: '100%' }}>
			<Container>
				<Row css={{ paddingTop: 20, paddingBottom: 20 }} justify='space-between'>
					<Text css={{ fontWeight: 800 }}>Which World Is This?</Text>
					{/* <Text>Toggle theme</Text> */}
				</Row>
			</Container>
		</Container>
	);
};

export default NavBar;
