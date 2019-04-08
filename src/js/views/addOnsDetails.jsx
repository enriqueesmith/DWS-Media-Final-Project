import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { HashLink as Link } from "react-router-hash-link";

export class Addons extends React.Component {
	render(props) {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var addon = store.addons.find(item => {
						return (
							item.id == parseInt(this.props.match.params.theid)
						);
					});
					return (
						<div className="container-fluid text-center mt-5">
							<div className="row justify-content">
								<div className="col-6">
									<img src={addon.image} />
								</div>
								<div className="col-1" />
								<div className="detailsBody col-4">
									<h3>{addon.name}</h3>
									<p className="detailsDescription">
										{addon.description}
									</p>
									<p className="details-price">
										$ {addon.price}
									</p>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col">
									<Link smooth href="" to="/#AddOnsBreak">
										<button
											type="button"
											className="btn btn-secondary btn-block">
											Return to Shopping
										</button>
									</Link>
								</div>
								<div className="col">
									<button
										className="btn btn-primary btn-block"
										onClick={() =>
											actions.addToCart(addon)
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
	match: PropTypes.object,
	elem: PropTypes.object
};
