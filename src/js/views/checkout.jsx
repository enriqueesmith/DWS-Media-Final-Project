import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";

export class Checkout extends React.Component {
	onPaymentFunction = e => {
		e.preventDefault();

		let email = e.target.inputEmailPayment.value;
		if (email === "") {
			e.target.inputEmailPayment.style.background = "red";
		}

		let firstName = e.target.inputNamePayment.value;
		if (firstName === "") {
			e.target.inputNamePayment.style.background = "red";
		}

		let lastName = e.target.inputLastNamePayment.value;
		if (lastName === "") {
			e.target.inputLastNamePayment.style.background = "red";
		}

		let ccNumber = e.target.inputCC.value;
		if (ccNumber === "") {
			e.target.inputCC.style.background = "red";
		}

		let cvc = e.target.inputCVC.value;
		if (cvc === "") {
			e.target.inputCVC.style.background = "red";
		}

		let expDate = e.target.inputExpDate.value;
		if (expDate === "") {
			e.target.inputExpDate.style.background = "red";
		}

		let billingAddress = e.target.inputBillingAddress.value;
		if (billingAddress === "") {
			e.target.inputBillingAddress.style.background = "red";
		}
	};

	render() {
		return (
			<div>
				<div className="row pt-5 mt-5 checkout">
					<h1 className="titleCheckOut">Almost Done!</h1>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="row pt-5 mt-1 checkout">
								<h3 className="titleCheckOut text-muted">
									Final Price: $
									{store.cart.reduce((total, product) => {
										return total + product.price;
									}, 0.0)}
								</h3>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="signUpRow row pt-5 mt-1 mb-5">
					<div className="col-10 loginForm border p-2">
						<form
							onSubmit={e => {
								this.onPaymentFunction(e);
							}}>
							<div className="text-center mt-3">
								<h1>Payment Information</h1>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputAddress4">
										First Name
									</label>
									<input
										type="text"
										className="form-control"
										id="inputNamePayment"
										placeholder="First Name"
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputPassword4">
										Last Name
									</label>
									<input
										type="text"
										className="form-control"
										id="inputLastNamePayment"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-12">
									<label htmlFor="inputEmail4">
										Your Email
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmailPayment"
										placeholder="Your Email Here"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										Your Credit Card Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCC"
										placeholder="1234-5678-1234-5678"
									/>
								</div>
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										Expiration Date
									</label>
									<input
										type="text"
										className="form-control"
										id="inputExpDate"
										placeholder="01/2033"
									/>
								</div>
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										CVC Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCVC"
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
										id="inputBillingAddress"
										placeholder="123 ABC Way"
									/>
								</div>
							</div>
							<div className="d-lg-flex justify-content-between">
								<button
									type="submit"
									className="btn btn-danger login col-md-12 col-lg-3 p-2 mb-1">
									<span>
										<i className="far fa-window-close border-right pr-1" />
									</span>
									<span className="pl-1">Go Back</span>
								</button>
								<button
									type="submit"
									className="btn btn-success login col-md-12 col-lg-3 mb-1">
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
