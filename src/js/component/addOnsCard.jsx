import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/addons.css";

function AddOnsCard(props) {
	return (
		<div className="card">
			<Link
				to={"/addOnsDetails/" + props.elem.id}
				style={{ cursor: "pointer" }}>
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
			</Link>
			<div className="card-body">
				<Link
					to={"/addOnsDetails/" + props.elem.id}
					style={{ cursor: "pointer" }}>
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.description} $ {props.price}
					</p>
				</Link>
			</div>
			<div className="card-footer">
				<div className="plusSign float-right">
					<Context.Consumer>
						{({ actions }) => {
							return (
								<button
									type="button"
									className="btn btn-light"
									onClick={() =>
										actions.addToCart(props.elem)
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
	image: PropTypes.string,
	camel: PropTypes.number,
	elem: PropTypes.object
};
