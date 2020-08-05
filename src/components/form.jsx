import React from 'react';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className="form-container">
				<div className="form-description">
					<p className=" form-description">
						{' '}
						Estou actualmente aberto a trabalhar em novos projectos, sempre procurei ser versátil no desenvolvimento de
						projectos, pois acredito que na maioria das vezes não é necessário uma grande equipa para a criação de um
						site/projecto de qualidade contacta-me abaixo com o que necessitas e eu quando puder envio-te o orçamento
						que ficaria muito mais barato quando comparando com uma consultora. Caso o projecto seja de grande dimensão
						tenho também colegas nas mais diversas áreas que faço parcerias (desde Direito Empresarial, a Ilustração e
						Moda)
					</p>
					<ul className="services">
						<li> Desenvolvimento e manutenção de Landing Pages</li>
						<li> Web Development de ideias complexas como um fórum</li>
						<li>
							{' '}
							Todo o tipo de serviços de programação (scraping, automação de certos serviços, debugging, etc...){' '}
						</li>
						<li> Desenvolver uma estratégia de Marketing Digital para a tua marca</li>
						<li> Digitalizar uma loja física (de landing page a ecommerce) </li>
						<li> Design para Redes Sociais </li>
					</ul>
				</div>

				<form className="form" onSubmit={this.submitForm} action="https://formspree.io/xyynoozj" method="POST">
					<label className="form-labels">Email:</label>
					<br />
					<input className="form-email" type="email" name="email" />
					<br />
					<label className="form-labels">Messagem:</label>
					<br />
					<textarea className="form-message" type="text" name="message" rows="5" />
					<br />
					{status === 'SUCCESS' ? <p>Thanks!</p> : <button className="form-button">Submit</button>}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
