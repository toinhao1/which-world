import { NextUIProvider } from '@nextui-org/react';
import Layout from '../components/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	);
}

export default MyApp;
