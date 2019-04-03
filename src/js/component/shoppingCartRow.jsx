import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PropTypes from "prop-types";

export class ShoppingCartRow extends React.Component {
	render() {
		return (
			<div className="row d-flex justify-content-between align-items-center checkOut border-bottom">
				<span>
					<img className="productImage pl-3" src={this.props.image} />
				</span>
				<span className="productDescription">
					<h3>{this.props.description}</h3>
				</span>
				<span className="price pr-3">
					<p>${this.props.price}</p>
				</span>
			</div>
		);
	}
}
ShoppingCartRow.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number
};
