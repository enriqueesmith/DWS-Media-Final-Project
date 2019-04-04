import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/addons.css";

function AddOnsCard(props) {
	return (
		<div className="card">
			<Link
				to={"/addOnsDetails/" + (props.camel + 1)}
				style={{ cursor: "pointer" }}>
				<img
					className="card-img-top"
					src="https://via.placeholder.com/291x150/"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.description}
						{props.price}
					</p>
				</div>
			</Link>
			<div className="card-footer">
				<div className="plusSign float-right">
					<Context.Consumer>
						{({ actions }) => {
							return (
								<button
									type="button"
									className="btn btn-light"
									onClick={() =>
										actions.addToCart(
											props.name,
											props.description,
											props.price
										)
									}>
									Add to Cart{" "}
									<i className="fas fa-plus-circle" />
								</button>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
}

export default AddOnsCard;

AddOnsCard.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	camel: PropTypes.number
};
