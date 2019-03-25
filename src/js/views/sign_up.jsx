import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class SignUp extends React.Component {
	render() {
		return (
			<div className="signUpRow row pt-5 mt-5">
				<div className="col-10 loginForm border p-2">
					<form>
						<div className="text-center mt-3">
							<h1>Sign Up With DWS Media</h1>
							<p className="text-muted">
								Copy on demand, on time, and on target.
							</p>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">First Name</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="First Name"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">
									Last Name
								</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
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
									id="inputAddress"
									placeholder="Your Email Here"
								/>
							</div>
							<div className="form-group col-6">
								<label htmlFor="inputAddress">
									Create Password
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Create Password"
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress2">Business Name</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress2"
								placeholder="Your Business Name Here"
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">Business URL</label>
								<input
									type="text"
									className="form-control"
									id="inputCity"
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
									id="inputZip"
									placeholder="Your Username for your Website"
								/>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">
									Business URL Password
								</label>
								<input
									type="text"
									className="form-control"
									id="inputZip"
									placeholder="Your Password"
								/>
							</div>
						</div>
						<div className="form-group col-12">
							<label htmlFor="inputEmail4">Phone Number</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail4"
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
