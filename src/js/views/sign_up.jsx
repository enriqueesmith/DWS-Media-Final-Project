import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [
				{
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					businessName: "",
					businessURL: "",
					businessURLUsername: "",
					businessURLPassword: "",
					phone: ""
				}
			]
			// initialize your state
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
	};

	render() {
		return (
			<div className="signUpRow row pt-5 mt-5 mb-5">
				<div className="col-10 loginForm border p-2">
					<form
						onSubmit={e => {
							this.onSignUpFunction(e);
						}}>
						<div className="text-center mt-3">
							<h1>Sign Up With DWS Media</h1>
							<p className="text-muted">
								Copy on demand, on time, and on target.
							</p>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputName">First Name</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									placeholder="First Name"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail5">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									placeholder="Last Name"
								/>
							</div>
						</div>
						<div className="form-row d-flex justify-content-between">
							<div className="form-group col-6">
								<label htmlFor="inputAddress">Your Email</label>
								<input
									type="text"
									className="form-control"
									id="emailSignUp"
									placeholder="Your Email Here"
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
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress2">Business Name</label>
							<input
								type="text"
								className="form-control"
								id="businessName"
								placeholder="Your Business Name Here"
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">Business URL</label>
								<input
									type="text"
									className="form-control"
									id="businessURL"
									placeholder="Your URL/Domain Name for your Business"
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
								/>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputPassword4">
									Business URL Password
								</label>
								<input
									type="password"
									className="form-control"
									id="businessURLPassword"
									placeholder="Your Password"
								/>
							</div>
						</div>
						<div className="form-group col-12">
							<label htmlFor="inputPhone4">Phone Number</label>
							<input
								type="text"
								className="form-control"
								id="phoneSignUp"
								placeholder="Phone Number"
							/>
						</div>
						<div className="socialMediaLogins d-flex justify-content-between">
							<button
								type="submit"
								className="btn btn-primary login col-3">
								Sign-up!
							</button>
							<button
								type="submit"
								className="btn btn-primary login col-3 p-2">
								<span>
									<i className="fab fa-google-plus border-right pr-1" />
								</span>
								<span className="pl-1">
									Sign up with Google
								</span>
							</button>
							<button
								type="submit"
								className="btn btn-primary login col-3 p-1">
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
	}
}
