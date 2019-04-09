import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

function PackagesCard(props) {
	return (
		<div className="card">
			<Link
				to={"/packagesDetails/" + props.elem.id}
				style={{ cursor: "pointer" }}>
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
			</Link>
			<div className="card-body text-center">
				<Link
					to={"/packagesDetails/" + props.elem.id}
					style={{ cursor: "pointer" }}>
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
					<hr />
					<p className="card-price">$ {props.price}</p>
				</Link>
			</div>
			<div className="card-footer">
				<div className="plusSign float-right">
					<Context.Consumer>
						{({ store, actions }) => {
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

export default PackagesCard;

PackagesCard.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	image: PropTypes.string,
	camel: PropTypes.number,
	elem: PropTypes.object
};
