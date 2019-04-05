import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class ShoppingCartRow extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row d-flex d-flex justify-content-between align-items-center border-bottom">
								<button
									className="btnStyle"
									onClick={() =>
										actions.removeFromCart(this.props.id)
									}>
									<i className="fas fa-minus text-danger" />
								</button>
								<span>
									<img src={this.props.image} />
								</span>
								<span className="productDescription mr-5">
									<h3>{this.props.name}</h3>
								</span>
								<span className="productDetails ml-5">
									<h4 className="ml-5">
										{this.props.description}
									</h4>
								</span>
								<span className="price pr-4">
									<p>${this.props.price}</p>
								</span>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

ShoppingCartRow.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	details: PropTypes.string,
	name: PropTypes.string,
	index: PropTypes.number,
	id: PropTypes.number
};
