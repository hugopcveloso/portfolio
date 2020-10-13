import React from 'react';
import techList from '../data/stack-data';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
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
			<div className="contacts-container">
				<h2 className="form-title"> Contactos </h2>
				<div className="form-container">
					<div className="form-wrapper">
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
				</div>
				<div className="social-container">
					<a href="https://www.linkedin.com/in/hugo-veloso" className="social-link" id="linkedin-link" target="_blank">
						<FontAwesomeIcon className="social-icons" id="linkedin-icon" icon={[ 'fab', 'linkedin' ]} size="lg" />
						Linkedin
					</a>{' '}
					<br />
					<br />
					<a href="https://github.com/hugopcveloso" className="social-link" id="github-link" target="_blank">
						<FontAwesomeIcon className="social-icons" id="github-icon" icon={[ 'fab', 'github' ]} size="lg" />
						Github
					</a>
				</div>
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
