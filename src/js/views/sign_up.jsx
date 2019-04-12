import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ls from "local-storage";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			business_name: "",
			website_url: "",
			business_username: "",
			business_password: "",
			phone: ""
		};
	}

	onSignUpFunction = e => {
		e.preventDefault();

		let email = e.target.emailSignUp.value;
		if (email === "") {
			e.target.emailSignUp.style.background = "red";
		}

		let password = e.target.passwordSignUp.value;
		if (password === "") {
			e.target.passwordSignUp.style.background = "red";
		}

		let firstName = e.target.firstName.value;
		if (firstName === "") {
			e.target.firstName.style.background = "red";
		}

		let lastName = e.target.lastName.value;
		if (lastName === "") {
			e.target.lastName.style.background = "red";
		}

		let businessName = e.target.businessName.value;
		if (businessName === "") {
			e.target.businessName.style.background = "red";
		}

		let businessURL = e.target.businessURL.value;
		if (businessURL === "") {
			e.target.businessURL.style.background = "red";
		}

		let businessURLUsername = e.target.businessURLUsername.value;
		if (businessURLUsername === "") {
			e.target.businessURLUsername.style.background = "red";
		}

		let businessURLPassword = e.target.businessURLPassword.value;
		if (businessURLPassword === "") {
			e.target.businessURLPassword.style.background = "red";
		}

		let phone = e.target.phoneSignUp.value;
		if (phone === "") {
			e.target.phoneSignUp.style.background = "red";
		}

		if (e.target.style !== "red") {
			return true;
		}
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="signUpRow row pt-5 mt-5 mb-5">
							<div className="col-10 loginForm border p-2">
								<form
									onSubmit={e => {
										if (this.onSignUpFunction(e) === true) {
											actions.addUser(this.state);
											localStorage.setItem(
												"first_name",
												store.user.first_name
											);
											localStorage.setItem(
												"last_name",
												store.user.last_name
											);
											localStorage.setItem(
												"email",
												store.user.email
											);
											localStorage.setItem(
												"password",
												store.user.password
											);
											localStorage.setItem(
												"business_name",
												store.user.business_name
											);
											localStorage.setItem(
												"website_url",
												store.user.website_url
											);
											localStorage.setItem(
												"business_username",
												store.user.business_username
											);
											localStorage.setItem(
												"business_password",
												store.user.business_password
											);
											localStorage.setItem(
												"phone",
												store.user.phone
											);
											this.props.history.push("/login");
											//console.log(localStorage.phone);
										}
									}}>
									<div className="text-center mt-3">
										<h1>Sign Up With DWS Media</h1>
										<p className="text-muted">
											Copy on demand, on time, and on
											target.
										</p>
									</div>
									<div className="form-row">
										<div className="form-group col-md-6">
											<label htmlFor="inputName">
												First Name
											</label>
											<input
												type="text"
												className="form-control"
												id="firstName"
												placeholder="First Name"
												value={this.state.first_name}
												onChange={e =>
													this.setState({
														first_name:
															e.target.value
													})
												}
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputEmail5">
												Last Name
											</label>
											<input
												type="text"
												className="form-control"
												id="lastName"
												placeholder="Last Name"
												value={this.state.last_name}
												onChange={e =>
													this.setState({
														last_name:
															e.target.value
													})
												}
											/>
										</div>
									</div>
									<div className="form-row d-flex justify-content-between">
										<div className="form-group col-6">
											<label htmlFor="inputAddress">
												Your Email
											</label>
											<input
												type="text"
												className="form-control"
												id="emailSignUp"
												placeholder="Your Email Here"
												value={this.state.email}
												onChange={e =>
													this.setState({
														email: e.target.value
													})
												}
											/>
										</div>
										<div className="form-group col-6">
											<label htmlFor="inputPassword6">
												Create Password
											</label>
											<input
												type="password"
												className="form-control"
												id="passwordSignUp"
												placeholder="Create Password"
												value={this.state.password}
												onChange={e =>
													this.setState({
														password: e.target.value
													})
												}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputAddress2">
											Business Name
										</label>
										<input
											type="text"
											className="form-control"
											id="businessName"
											placeholder="Your Business Name Here"
											value={this.state.business_name}
											onChange={e =>
												this.setState({
													business_name:
														e.target.value
												})
											}
										/>
									</div>
									<div className="form-row">
										<div className="form-group col-md-4">
											<label htmlFor="inputCity">
												Business URL
											</label>
											<input
												type="text"
												className="form-control"
												id="businessURL"
												placeholder="Your URL/Domain Name for your Business"
												value={this.state.website_url}
												onChange={e =>
													this.setState({
														website_url:
															e.target.value
													})
												}
											/>
										</div>
										<div className="form-group col-md-4">
											<label htmlFor="inputZip">
												Business URL Username
											</label>
											<input
												type="text"
												className="form-control"
												id="businessURLUsername"
												placeholder="Your Username for your Website"
												value={
													this.state.business_username
												}
												onChange={e =>
													this.setState({
														business_username:
															e.target.value
													})
												}
											/>
										</div>
										<div className="form-group col-md-4">
											<label htmlFor="inputPassword4">
												Business URL Password
											</label>
											<input
												type="password"
												className="form-control"
												id="businessURLPassword"
												placeholder="Your Password"
												value={
													this.state.business_password
												}
												onChange={e =>
													this.setState({
														business_password:
															e.target.value
													})
												}
											/>
										</div>
									</div>
									<div className="form-group col-12">
										<label htmlFor="inputPhone4">
											Phone Number
										</label>
										<input
											type="text"
											className="form-control"
											id="phoneSignUp"
											placeholder="Phone Number"
											value={this.state.phone}
											onChange={e =>
												this.setState({
													phone: e.target.value
												})
											}
										/>
									</div>
									<div className="socialMediaLogins d-lg-flex justify-content-lg-between">
										<button
											type="submit"
											className="btn btn-primary login col-md-12 col-lg-3 col-sm-12 mb-1">
											Sign-up!
										</button>
										<button
											type="submit"
											className="btn btn-primary login col-md-12 col-lg-3 col-sm-12 mb-1">
											<span>
												<i className="fab fa-google-plus border-right pr-1" />
											</span>
											<span className="pl-1">
												Sign up with Google
											</span>
										</button>
										<button
											type="submit"
											className="btn btn-primary login col-lg-3 col-md-12 col-sm-12 p-1 mb-1">
											<span>
												<i className="fab fa-facebook-square border-right pr-1" />
											</span>
											<span className="pl-1">
												Sign up with Facebook
											</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SignUp.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
