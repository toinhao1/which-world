import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

const BackButton = ({ text }) => {
	const router = useRouter();
	const handleGoBack = () => {
		// assuming here we want to navigate back to the home page;
		router.push('/');
	};
	return (
		<>
			<Button
				size='sm'
				css={{
					backgroundColor: 'White',
					color: 'Black',
					boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
					borderRadius: 4,
				}}
				onClick={handleGoBack}>
				{text}
			</Button>
		</>
	);
};

export default BackButton;
