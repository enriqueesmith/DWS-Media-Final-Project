import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Packages extends React.Component {
	/*
	constructor() {
		super();
		this.state = {
			packagesList: []
		};
	}

	componentDidMount = () => {
		fetch(
			"http://dws-media-final-project-enriqueesmith.c9users.io:8080/packagesDetails/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(horse => {
				this.setState({ packagesList: horse });
			});
	};
	*/

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var packs = store.packages.find(item => {
						return (
							item.id == parseInt(this.props.match.params.theid)
						);
					});
					return (
						<div className="container-fluid text-center mt-5">
							<div className="row justify-content">
								<div className="col-6">
									<img src={packs.image} />
								</div>
								<div className="col-6">
									<h3>{packs.name}</h3>
									<p>
										{packs.description} $ {packs.price}
									</p>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col">
									<button
										className="btn btn-primary"
										onClick={() =>
											actions.addToCart(
												packs.name,
												packs.description,
												packs.price,
												packs.image
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

Packages.propTypes = {
	match: PropTypes.object
};
