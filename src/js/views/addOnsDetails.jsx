import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Addons extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var addon = store.addons.find(item => {
						return item.id == this.props.match.params.theid;
					});
					return (
						<div className="container-fluid text-center mt-5">
							<div className="row justify-content">
								<div className="col-6">
									<img src="https:///via.placeholder.com/640x480" />
								</div>
								<div className="col-6">
									<h3>{addon.name}</h3>
									<p>{addon.description}</p>
								</div>
							</div>
							<div className="row justify-content-between mt-5">
								<div className="col">
									<p>${addon.price}</p>
								</div>
								<div className="col">
									<button
										className="btn btn-primary"
										onClick={() =>
											actions.addToCart(
												addon.name,
												addon.description,
												addon.price
											)
										}>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Addons.propTypes = {
	match: PropTypes.object
};
