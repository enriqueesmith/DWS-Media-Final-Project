import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class ThankYou extends React.Component {
	render() {
		return (
			<div>
				<div className="row pt-5 mt-5">
					<div className="thankYou col-6">
						<div className="check-mark">
							<i className="fas fa-check-square" />
						</div>
						<h1>You Are All Set!</h1>
						<p className="text-muted">
							Your copy has been added to our queue and will be
							posted to your website next Friday.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
