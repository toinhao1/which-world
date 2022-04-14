import { Container, Loading } from '@nextui-org/react';

const LoadingData = () => {
	return (
		<Container
			css={{
				width: 50,
				paddingTop: 80,
				paddingLeft: 0,
				paddingRight: 0,
				top: '100%',
				left: '45%',
				position: 'absolute',
			}}
			justify='center'>
			<Loading type='points' size='xl' />
		</Container>
	);
};

export default LoadingData;
