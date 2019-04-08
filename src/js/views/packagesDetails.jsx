import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { HashLink as Link } from "react-router-hash-link";

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

	render(props) {
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
								<div className="col-6 ">
									<img src={packs.image} />
								</div>
								<div className="col-1" />
								<div className="detailsBody col-4">
									<h3>{packs.name}</h3>
									<p className="detailsDescription">
										{packs.description}
									</p>
									<p className="details-price">
										$ {packs.price}
									</p>
								</div>
								<div className="col-1" />
							</div>
							<div className="row mt-5">
								<div className="col-6">
									<Link smooth href="" to="/#PackagesBreak">
										<button
											type="button"
											className="btn btn-secondary btn-block">
											Return to Shopping
										</button>
									</Link>
								</div>
								<div className="col-6">
									<button
										className="btn btn-primary btn-block"
										onClick={() =>
											actions.addToCart(packs)
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
	match: PropTypes.object,
	elem: PropTypes.object
};
