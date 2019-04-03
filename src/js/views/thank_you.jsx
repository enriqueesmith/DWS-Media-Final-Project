import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class ThankYou extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [
				{
					date: ""
				}
			]
			// initialize your state
		};
	}

	getDatePlusWeek() {
		var d = new Date();
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		let x = d.getDay() + 7;
		return months[d.getMonth()] + " " + x;
	}

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
							Your copy has been added to our queue and your first
							blog will be posted to your website{" "}
							{this.getDatePlusWeek()}.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
