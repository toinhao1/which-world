import { Row, Text, Container } from '@nextui-org/react';

const NavBar = () => {
	return (
		<Container>
			<Row justify='space-between'>
				<Text>Which World Is This?</Text>
				<Text>Toggle theme</Text>
			</Row>
		</Container>
	);
};

export default NavBar;
