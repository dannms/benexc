import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
    <main className="main">
        <Head>
            <title>Benefício Exclusivo</title>
        </Head>
        <Navbar />
        <Hero />
        <About />
        <Pricing />
        <Contact />
    </main>
	);
}
