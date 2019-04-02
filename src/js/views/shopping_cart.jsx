import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class ShoppingCart extends React.Component {
	render() {
		return (
			<div>
				<div className="row d-flex flex-row-reverse bd-highlight align-items-center pt-5 mt-5 border-bottom pr-3">
					<Link to="/checkout">
						<button type="button" className="btn btn-primary ml-1">
							Buy Now
						</button>
					</Link>
					<button type="button" className="btn btn-secondary">
						Return to Shopping
					</button>
					<div className="pl-5 flex-grow-1 bd-highlight">
						<h2>Shopping Cart</h2>
					</div>
				</div>
				<div className="row d-flex justify-content-between align-items-center border-bottom">
					<span className="pl-5">Product</span>
					<span className="productDescription">
						<h6>Description</h6>
					</span>
					<span className="price pr-5">
						<h6>Price</h6>
					</span>
				</div>
				<div className="row d-flex justify-content-between align-items-center checkOut border-bottom">
					<span>
						<img
							className="productImage pl-3"
							src="http://via.placeholder.com/200x200"
						/>
					</span>
					<span className="productDescription">
						<h3>Copyright Pro Package</h3>
					</span>
					<span className="price pr-3">
						<p>$99.00</p>
					</span>
				</div>
				<div className="row d-flex flex-row-reverse bd-highlight align-items-center checkOut pt-2 mt-3">
					<span>
						<p className="price pl-3 pr-3">$99.00</p>
					</span>
					<p className="subtotal pr-3 border-right">Subtotal</p>
				</div>
			</div>
		);
	}
}
