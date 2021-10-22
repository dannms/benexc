import Head from 'next/head';
import Image from 'next/image';

import img from '../public/images/logo_beneficioexclusivo.png'

export default function Home() {
	return (
		<main className="main">
			<Head>
				<title>Benefício Exclusivo - Sucesso</title>
			</Head>
			<div className="success-page">
				<div className="wrapper">
					<div className="info-post">
                        <Image src={img} width={70} height={75}></Image>
						<small>Compra realizada com sucesso!</small>
						<box-icon name="check"></box-icon>
						<h1>Agradecemos pela compra!</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vivamus nisi ex, vestibulum eget diam
							accumsan, pellentesque posuere est. Aenean tristique
							luctus nibh vitae tempus. Phasellus ac pharetra
							tortor, non feugiat eros.
						</p>
                        <a href="/">Voltar para página principal</a>
					</div>
				</div>
			</div>
		</main>
	);
}
