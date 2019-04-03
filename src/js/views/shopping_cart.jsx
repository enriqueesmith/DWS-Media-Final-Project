import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartRow } from "../component/shoppingCartRow.jsx";
import { Context } from "../store/appContext.jsx";

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
						<h6>Name</h6>
					</span>
					<span className="productDescription">
						<h6>Details</h6>
					</span>
					<span className="price pr-5">
						<h6>Price</h6>
					</span>
				</div>
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
