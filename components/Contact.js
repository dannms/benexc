const Contact = () => {
	return (
		<section id="contato">
			<div className="wrapper">
				<div className="columns is-desktop">
					<div className="column is-full-touch is-half-desktop">
						<div className="contact-content">
							<h1 className="section-title">Contato</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Soluta temporibus minima
								nesciunt necessitatibus? Consectetur ad amet qui
								incidunt iure fugiat consequuntur pariatur
								eligendi debitis veritatis magni, fugit
								molestiae voluptas error!
							</p>
							<ul>
								<li className="contact-item">
									<div className="icon">
										<box-icon
											name="envelope"
											color="#7baf3f"
										></box-icon>
									</div>
									<div className="info">
										sac@beneficioexclusivo.com.br
									</div>
								</li>
								<li className="contact-item">
									<div className="icon">
										<box-icon
											name="phone"
											color="#7baf3f"
										></box-icon>
									</div>
									<div className="info">+55 21 1234 5678</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="column is-full-touch is-half-desktop">
						<div className="contact-form">
							<form
								action="/api/send_mail"
								method="POST"
								autoComplete="off"
							>
								<div className="field">
									<label className="label">
										Nome completo
									</label>
									<div className="control">
										<input
											className="input"
											placeholder="John Doe"
										></input>
									</div>
								</div>
								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input
											className="input"
											placeholder="email@email.com"
										></input>
									</div>
								</div>
								<div className="field">
									<label className="label">Assunto</label>
									<div className="control">
										<input
											className="input"
											placeholder="Quais são as vantagens?"
										></input>
									</div>
								</div>
								<div className="field">
									<label className="label">Mensagem</label>
									<div className="control">
										<textarea
											className="textarea"
											rows="10"
											placeholder="Digite aqui sua mensagem"
										></textarea>
									</div>
								</div>

								<div className="field">
									<div className="control">
										<button type="submit" role="link">
											Enviar
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
