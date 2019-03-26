import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Checkout extends React.Component {
	render() {
		return (
			<div>
				<div className="row pt-5 mt-5 checkout">
					<h1 className="titleCheckOut">Almost Done!</h1>
				</div>
				<div className="row pt-5 mt-1 checkout">
					<h3 className="titleCheckOut text-muted">
						Final Price: $99.00
					</h3>
				</div>
				<div className="signUpRow row pt-5 mt-1 mb-5">
					<div className="col-10 loginForm border p-2">
						<form>
							<div className="text-center mt-3">
								<h1>Payment Information</h1>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputEmail4">
										First Name
									</label>
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
								<div className="form-group col-12">
									<label htmlFor="inputAddress">
										Your Email
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="Your Email Here"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-4">
									<label htmlFor="inputAddress">
										Your Credit Card Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234-5678-1234-5678"
									/>
								</div>
								<div className="form-group col-4">
									<label htmlFor="inputAddress">
										Expiration Date
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="01/2033"
									/>
								</div>
								<div className="form-group col-4">
									<label htmlFor="inputAddress">
										CVC Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="3 Digits on Back of Your Card"
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-12">
									<label htmlFor="inputAddress">
										Billing Address
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="123 ABC Way"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<button
									type="submit"
									className="btn btn-danger login col-3 p-2">
									<span>
										<i className="far fa-window-close border-right pr-1" />
									</span>
									<span className="pl-1">Go Back</span>
								</button>
								<button
									type="submit"
									className="btn btn-success login col-3">
									<span>
										<i className="fas fa-check-square border-right pr-1" />
									</span>
									<span className="pl-1">
										Complete Purchase!
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
