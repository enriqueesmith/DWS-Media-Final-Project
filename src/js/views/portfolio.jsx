import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Portfolio extends React.Component {
	render() {
		var styles = {
			padding: "3%"
		};
		var rowStyles = {
			paddingTop: "1%"
		};
		return (
			<div
				className="container-fluid text-center bg-white"
				style={styles}>
				<h2>Our Portfolio</h2>
				<h4>Check out some of our recent work!</h4>
				<div className="row text-center" style={rowStyles}>
					<div className="col-sm-4">
						<div className="thumbnail">
							<img
								src="http://source.unsplash.com/OqtafYT5kTw/300x300"
								alt="Blog Post"
							/>
							<p>
								<strong>Blog Posts</strong>
							</p>
							<p>Engaging and informative blog posts.</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="thumbnail">
							<img
								src="http://source.unsplash.com/4V1dC_eoCwg/300x300"
								alt="Press Release"
							/>
							<p>
								<strong>Press Releases</strong>
							</p>
							<p>
								Announce your latest business move with our
								hard-hitting press releases!
							</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="thumbnail">
							<img
								src="http://source.unsplash.com/zOWvIwYGHG8/300x300"
								alt="eBlasts"
							/>
							<p>
								<strong>Email Blasts</strong>
							</p>
							<p>
								Reach your target market with our email blasts.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
