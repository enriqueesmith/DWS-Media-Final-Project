import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartRow } from "../component/shoppingCartRow.jsx";
import { Context } from "../store/appContext.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class ShoppingCart extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row d-flex bd-highlight align-items-center pt-5 mt-5 border-bottom pr-3 pb-3">
					<div className="col-sm-12 col-lg-12">
						<div className="pl-5 flex-grow-1 bd-highlight col-lg-12 col-sm-12">
							<h2>Shopping Cart</h2>
						</div>
						<Link to="/checkout">
							<button
								type="button"
								className="btn btn-primary col-lg-2 col-sm-12 mb-1">
								Buy Now
							</button>
						</Link>
						<Link to="/">
							<button
								type="button"
								className="btn btn-secondary col-lg-2 col-sm-12 mb-1">
								Return to Shopping
							</button>
						</Link>
					</div>
				</div>
				<Context.Consumer>
					{({ store }) => {
						if (store.cart.length === 0) {
							return (
								<div className="row d-flex align-items-center border-bottom">
									<span className="pl-5">
										<p className="text-muted">
											Your cart is empty!
										</p>
									</span>
								</div>
							);
						} else {
							return (
								<div className="row d-none justify-content-between align-items-center border-bottom" />
							);
						}
					}}
				</Context.Consumer>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.cart.map((elem, index) => {
							return (
								<ShoppingCartRow
									key={index}
									image={elem.image}
									name={elem.name}
									price={elem.price}
									description={elem.description}
									id={elem.id}
								/>
							);
						});
					}}
				</Context.Consumer>
				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="row d-flex flex-row-reverse bd-highlight align-items-center checkOut pt-2 mt-3">
								<span>
									<p className="price pl-3 pr-3">
										$
										{store.cart.reduce((total, product) => {
											return total + product.price;
										}, 0.0)}
									</p>
								</span>
								<p className="subtotal pr-3 border-right">
									Subtotal
								</p>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
