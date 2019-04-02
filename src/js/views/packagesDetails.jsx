import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Packages extends React.Component {
	constructor() {
		super();
		this.state = {
			packagesList: []
		};
	}

	componentDidMount = () => {
		fetch(
			"http://dws-media-final-project-enriqueesmith.c9users.io:8080/packages/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(horse => {
				this.setState({ packagesList: horse });
			});
	};

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row justify-content">
					<div className="col-6">
						<img src="https:///via.placeholder.com/640x480" />
					</div>
					<div className="col-6">
						<h3>{this.state.packagesList.name}</h3>
						<p>{this.state.packagesList.description}</p>
					</div>
				</div>
				<div className="row justify-content-between mt-5">
					<div className="col">
						<p>{this.state.packagesList.price}</p>
					</div>
					<div className="col">
						<Context.Consumer>
							{({ actions }) => {
								return (
									<button
										className="btn btn-primary"
										onClick={() =>
											actions.addToCart(this.props.name)
										}>
										Add to Cart
									</button>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

Packages.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
