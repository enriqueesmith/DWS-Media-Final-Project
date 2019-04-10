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
				<div className="text-center text-white mb-5">
					<div className="aboutUsImage">
						<img src="https://source.unsplash.com/EG49vTtKdvI/800x400" />
					</div>
					<h1 className="centeredTitleAboutUs">DWS Media</h1>
					<p className="tagLineTextAboutUs">
						DWS Media is a leading content marketing
						<br />
						service for your company growth
					</p>
				</div>
				<div className="row">
					<div className="col-12" align="center">
						<div className="col-10">
							<p>
								DWS Media is the best content marketing company
								in South Florida. We create engaging blog posts,
								press releases and email blasts for our clients.
								<br />
								<br />
								The internet is cluttered with content, and
								it&apos;s easy to get lost in the noise. Our
								laser-focused content marketing strategies reach
								out to your target audience and reel them in.
								<br />
								<br />
								Don&apos;t take our word for it. Check out the
								content we&apos;ve created for current and
								previous clients, and read our testimonials.
								<br />
								<br />
								Then, contact us to get started today!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
