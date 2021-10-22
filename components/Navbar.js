import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import img from '../public/images/logo_beneficioexclusivo.png';

const Navbar = () => {
	const [isActive, setisActive] = React.useState(false);

	return (
		<nav
			className="navbar primary"
			role="navigation"
			aria-label="main navigation"
			id="top"
		>
			<div className="wrapper">
				<div className="navbar-brand">
					<a href="#top" className="navbar-item">
						<Image src={img}></Image>
					</a>

					<a
						onClick={() => {
							setisActive(!isActive);
						}}
						role="button"
						className={`navbar-burger burger ${
							isActive ? 'is-active' : ''
						}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div
					id="navbar"
					className={`navbar-menu ${isActive ? 'is-active' : ''}`}
				>
					<div className="navbar-end">
						<a href="#top" className="navbar-item">
							Home
						</a>
						<a href="#sobre" className="navbar-item">
							Sobre
						</a>
						<a href="#precos" className="navbar-item">
							Preços
						</a>
						<a href="#contato" className="navbar-item">
							Contato
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
