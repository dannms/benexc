import Image from 'next/image';

import img from '../public/images/hero.png';

const Hero = () => {
	return (
		<section id="hero">
			<div className="wrapper">
				<div className="columns is-desktop">
					<div className="column is-full-touch is-half-tablet">
						<div className="content-wrapper">
							<div className="hero-content">
								<h1 className="hero-title">
									O cuidado com a <span>saúde</span> cabe no
									seu bolso!
								</h1>
								<p className="paragraph">
									Tenha acesso aos serviços de saúde de
									qualidade por preços mais acessíveis!
								</p>
								<div className="cta">
									<a href="#" className="button secondary">
										Conheça nossa rede
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="column is-full-touch is-half-tablet">
						<div className="image-wrapper">
							<div className="hero-image">
								<Image src={img}></Image>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
