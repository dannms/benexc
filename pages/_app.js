import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />

			<script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>
		</Layout>
	);
}

export default MyApp;
