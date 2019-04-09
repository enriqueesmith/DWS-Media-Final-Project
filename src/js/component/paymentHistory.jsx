import React from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import ls from "local-storage";

export class PaymentHistoryCard extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		var cardStyles = {
			width: "18rem"
		};

		return (
			<div className="col-sm-4">
				<div className="card" style={cardStyles}>
					<div className="card-body">
						<h5 className="card-title">{this.props.name}</h5>
						<p className="card-text">{this.props.description}</p>
						<p className="card-text-muted">${this.props.price}</p>
					</div>
				</div>
			</div>
		);
	}
}
PaymentHistoryCard.propTypes = {
	price: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string
};
