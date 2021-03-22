import React from "react";
import techList from "../data/stack-data";
import Socials from "./Socials";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<React.Fragment>
				<div className="contacts-container">
					<div className="form-container">
						<div className="form-wrapper">
							<form
								className="form"
								onSubmit={this.submitForm}
								action="https://formspree.io/xyynoozj"
								method="POST"
							>
								<h4 className="form-title"> Contact </h4>
								<label className="form-labels">Email:</label>
								<br />
								<input className="form-email" type="email" name="email" />
								<br />
								<label className="form-labels">Message:</label>
								<br />
								<textarea
									className="form-message"
									type="text"
									name="message"
									rows="5"
								/>
								<br />
								{status === "SUCCESS" ? (
									<p>Thanks for the message!</p>
								) : (
									<button className="form-button">Send</button>
								)}
								{status === "ERROR" && (
									<p>There was an issue, please try again later.</p>
								)}
							</form>
						</div>
					</div>
					<Socials />
				</div>
			</React.Fragment>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
