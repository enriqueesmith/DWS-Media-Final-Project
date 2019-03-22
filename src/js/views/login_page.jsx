import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Login extends React.Component {
	render() {
		return (
			<div className="col-6 loginForm border p-2">
				<form>
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
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							<p>
								We will never share your email with anyone else.
							</p>
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
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
					<div className="socialMediaLogins d-flex justify-content-between">
						<button
							type="submit"
							className="btn btn-primary login col-3">
							Login
						</button>
						<button
							type="submit"
							className="btn btn-primary login col-3">
							<span>
								<i className="fab fa-google-plus border-right pr-1" />
							</span>
							<span className="pl-1">Log in with Google</span>
						</button>
						<button
							type="submit"
							className="btn btn-primary login col-3 p-1">
							<span>
								<i className="fab fa-facebook-square border-right pr-1" />
							</span>
							<span className="pl-1">Log in with Facebook</span>
						</button>
					</div>
				</form>
			</div>
		);
	}
}
