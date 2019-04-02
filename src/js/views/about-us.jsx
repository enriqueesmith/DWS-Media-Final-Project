import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class AboutUs extends React.Component {
	render() {
		var styles = {
			marginTop: "3%"
		};
		return (
			<div className="container" style={styles}>
				<div className="jumbotron">
					<div className="text-white text-center bg-gray my-5">
						<h1 className="display-4">DWS Media</h1>
						<p>
							DWS Media is a leading content marketing service for
							your company growth
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<p>
							DWS Media is the best content marketing company in
							South Florida. We create engaging blog posts, press
							releases and email blasts for our clients.
							<br />
							<br />
							The internet is cluttered with content, and
							it&apos;s easy to get lost in the noise. Our
							laser-focused content marketing strategies reach out
							to your target audience and reel them in.
							<br />
							<br />
							Don&apos;t take our word for it. Check out the
							content we&apos;ve created for current and previous
							clients, and read our testimonials.
							<br />
							<br />
							Then, contact us to get started today!
						</p>
					</div>
				</div>
			</div>
		);
	}
}
