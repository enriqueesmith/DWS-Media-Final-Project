import React, { Component } from "react";
import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-5 text-center">
				<p>
					Copyright <i className="far fa-copyright" /> 2019 DWS Media,
					LLC. All rights reserved.
				</p>
			</footer>
		);
	}
}
