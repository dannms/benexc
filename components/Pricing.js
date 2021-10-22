import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Image from 'next/image';

import logoVerde from '../public/images/logo_verde.svg';
import logoGold from '../public/images/logo_dourado.svg';

const Pricing = () => {
	React.useEffect(() => {
		const query = new URLSearchParams(window.location.search);

		if (query.get('success')) {
			console.log('Order placed!');
		}
		if (query.get('canceled')) {
			console.log('Order canceled');
		}
	}, []);

	return (
		<section id="precos">
			<div className="wrapper">
				<div className="columns is-desktop">
					<div className="column is-full-touch is-half-tablet">
						<div className="pricing-content">
							<h1 className="section-title">
								Escolha seu <span>plano</span>
							</h1>
							<p>
								Faça a contratação e comece a aproveitar seu
								novo cartão!
							</p>
							<small>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In sollicitudin ullamcorper
								feugiat. Aenean in velit ac diam finibus
								sollicitudin. Pellentesque lacus nulla,
								consectetur at leo sed, pretium gravida lacus.
								Cras ullamcorper lectus sed dolor dictum
								vestibulum. Nulla non nibh finibus, commodo
								massa vel, efficitur leo.{' '}
							</small>
						</div>
					</div>
					<div className="column is-full-touch is-half-tablet">
						<div className="pricing-list">
							<div className="form-wrapper">
								<form
									action="/api/checkout_basico"
									method="POST"
								>
									<div className="table">
										<div className="image-column">
											<Image src={logoVerde}></Image>
										</div>
										<div className="content-column">
											<div className="content-title basico">
												Plano Básico
											</div>
											<div className="content-price">
												<h1>R$12,49 </h1>
												<small>/mês</small>
											</div>
											<div className="tax">
												(+ taxa de adesão: R$20,00)
											</div>
											<button type="submit" role="link">
												Assinar
											</button>
										</div>
									</div>
								</form>
								<form
									action="/api/checkout_exclusivo"
									method="POST"
								>
									<div className="table">
										<div className="image-column">
											<Image src={logoGold}></Image>
										</div>
										<div className="content-column">
											<div className="content-title exclusivo">
												Plano Exclusivo
											</div>
											<div className="content-price">
												<h1>R$8,00 </h1>
												<small>/mês</small>
											</div>
											<div className="tax">
												(sem taxa de adesão)
											</div>
											<button type="submit" role="link">
												Assinar
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
