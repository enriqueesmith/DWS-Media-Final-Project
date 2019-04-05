import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [
				{
					email: "",
					password: ""
				}
			]
			// initialize your state
		};
	}

	onSubmitFunction = e => {
		e.preventDefault();

		let email = e.target.emailInput.value;
		if (email === "") {
			e.target.emailInput.style.background = "red";
		}

		let password = e.target.passwordInput.value;
		if (password === "") {
			e.target.passwordInput.style.background = "red";
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row mt-5" />
				<div className="col-lg-7 col-md-10 col-sm-12 loginForm border p-2 mt-5">
					<form
						id="formLife"
						onSubmit={e => {
							this.onSubmitFunction(e);
						}}>
						<div className="text-center mt-3">
							<h1>Welcome to DWS Media</h1>
							<p className="text-muted">
								Copy on demand, on time, and on target.
							</p>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="emailInput"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small
								id="emailHelp"
								className="form-text text-muted">
								<p>
									We will never share your email with anyone
									else.
								</p>
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="passwordInput"
								placeholder="Password"
							/>
						</div>
						<div className="form-group form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
						</div>
						<div className="socialMediaLogins d-lg-flex justify-content-lg-between">
							<button
								type="submit"
								className="btn btn-primary login col-md-12 col-lg-3 col-sm-12 mb-1">
								Login
							</button>
							<button
								type="submit"
								className="btn btn-primary login col-md-12 col-lg-3 col-sm-12 mb-1">
								<span>
									<i className="fab fa-google-plus border-right pr-1" />
								</span>
								<span className="pl-1">Use Google</span>
							</button>
							<button
								type="submit"
								className="btn btn-primary login col-lg-3 col-md-12 col-sm-12 p-1 mb-1">
								<span>
									<i className="fab fa-facebook-square border-right pr-1" />
								</span>
								<span className="pl-1">Use Facebook</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
