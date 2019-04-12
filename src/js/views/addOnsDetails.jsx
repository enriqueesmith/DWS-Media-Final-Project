import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { HashLink as Link } from "react-router-hash-link";
{
	/*
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	RedditShareButton,
	EmailShareButton
} from "react-share";
*/
}

export class Addons extends React.Component {
	render(props) {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var addon = store.products.find(item => {
						return (
							item.id == parseInt(this.props.match.params.theid)
						);
					});
					return (
						<div className="container-fluid text-center mt-5">
							<div className="row justify-content">
								<div className="col-lg-6 col-sm-12">
									<img src={addon.image} />
								</div>
								<div className="col-lg-1 col-sm-12" />
								<div className="detailsBody col-lg-4 col-sm-12">
									<h3>{addon.name}</h3>
									<p className="detailsDescription">
										{addon.description}
									</p>
									<p className="details-price">
										$ {addon.price}
									</p>

									{/*
									<p className="shareButtons">
										<FacebookShareButton />
										<LinkedinShareButton />
										<TwitterShareButton />
										<WhatsappShareButton />
										<PinterestShareButton />
										<RedditShareButton />
										<EmailShareButton />
									</p>
									*/}
								</div>
							</div>
							<div className="row mt-5">
								<div className="col-lg-6 col-sm-12">
									<Link smooth href="" to="/#AddOnsBreak">
										<button
											type="button"
											className="btn btn-secondary btn-block">
											Return to Shopping
										</button>
									</Link>
								</div>
								<div className="col-lg-6 col-sm-12">
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
