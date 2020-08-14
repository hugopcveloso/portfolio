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
						site/projecto de qualidade. <br /> A vantagem de trabalhar comigo é principalmente a comunicação directa e o
						entendimento transversal de design, desenvolvimento e marketing que resultam num trabalho mais coeso com os
						objectivos definidos pelo cliente. Há também a vantagem de que com uma equipa reduzida, os custos são também
						reduzidos.
						<br /> Se precisares de algum serviço contacta-me abaixo, mesmo que o projecto seja de grande dimensão ou
						necessidades diferentes tenho colegas nas mais diversas áreas com que já fiz parcerias (desde Direito
						Empresarial, Programação, Animação 3D, etc...).
					</p>
					<ul className="services">
						<li> Design e Desenvolvimento e manutenção de sites simples </li>
						<li> Web Development de plataformas mais complexas</li>
						<li>
							{' '}
							Todo o tipo de serviços que envolvam programação (scraping, automação de serviços digitais repetitivos,
							debugging do teu site, etc.){' '}
						</li>
						<li> Desenvolver uma estratégia de Marketing Digital para a tua empresa/marca</li>
						<li> Criar uma loja online </li>
						<li> Criação de conteúdo para Redes Sociais (Design e Vídeo) </li>
						<li> Digitalizar o teu negócio (loja online, serviço entregas, eventos, etc...)</li>
						<li>etc. </li>
					</ul>
				</div>

				<form className="form" onSubmit={this.submitForm} action="https://formspree.io/xyynoozj" method="POST">
					<label className="form-labels">Email:</label>
					<br />
					<input className="form-email" type="email" name="email" />
					<br />
					<label className="form-labels">Mensagem:</label>
					<br />
					<textarea className="form-message" type="text" name="message" rows="5" />
					<br />
					{status === 'SUCCESS' ? <p>Obrigado!</p> : <button className="form-button">Enviar</button>}
					{status === 'ERROR' && <p>Houve um erro na submissão, tenta dar refresh na página e tentar outra vez</p>}
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
