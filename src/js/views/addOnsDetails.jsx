import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Addons extends React.Component {
	constructor() {
		super();
		this.state = {
			addOnList: []
		};
	}

	componentDidMount = () => {
		fetch(
			"http://dws-media-final-project-enriqueesmith.c9users.io:8080/addons/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(horse => {
				this.setState({ addOnList: horse });
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
						<h3>{this.state.addOnList.name}</h3>
						<p>{this.state.addOnList.description}</p>
					</div>
				</div>
				<div className="row justify-content-between mt-5">
					<div className="col">
						<p>{this.state.addOnList.price}</p>
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

Addons.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
