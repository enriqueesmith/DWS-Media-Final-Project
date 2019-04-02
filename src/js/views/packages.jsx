import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Packages extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="packageImage" />

				<div className="packageDescription" />
			</div>
		);
	}
}

Packages.propTypes = {};
