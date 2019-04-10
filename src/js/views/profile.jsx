import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ls from "local-storage";
import { PaidHistoryFunction } from "../component/paidHistoryFunction.jsx";
import { ProfileInformation } from "../component/profileInformation.jsx";
import { LocalFirstName } from "../component/localStorage_first_name.jsx";

export class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedOne: "one"
		};
	}
	getPaidCart = e => {
		let x = JSON.parse(localStorage.getItem("payment_history"));
		console.log(x);
		return x;
	};

	render() {
		var pageViewProfile = "";
		var pageViewHistory = "";
		var showProfile = "";
		var showHistory = "";

		if (this.state.clickedOne === "one") {
			pageViewProfile = "active";
			showProfile = "show";
		} else if (this.state.clickedOne === "two") {
			pageViewHistory = "active";
			showHistory = "show";
		}

		var styles = {
			padding: "5%"
		};
		var imgStyles = {
			textAlign: "center"
		};
		var detailsStyles = {
			borderLeft: "3px solid #ded4da"
		};
		var pDetailsStyles = {
			fontSize: "15px",
			fontWeight: "bold"
		};
		var cardStyles = {
			width: "18rem"
		};
		return (
			<div className="container mt-3" style={styles}>
				<div className="row pt-2" id="grid-bar">
					<div className="col-12">
						<ul
							className="nav nav-pills mb-2 justify-content-center"
							id="pills-tab"
							role="tablist">
							<li className="nav-item">
								<a
									className={"nav-link " + pageViewProfile}
									id="pills-home-tab"
									data-toggle="pill"
									href="#profile-view"
									role="tab"
									aria-controls="profile-view"
									aria-selected="true"
									onClick={() =>
										this.setState({ clickedOne: "one" })
									}>
									<span>Profile</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className={"nav-link " + pageViewHistory}
									id="pills-profile-tab"
									data-toggle="pill"
									href="#history-view"
									role="tab"
									aria-controls="history-view"
									aria-selected="false"
									onClick={() =>
										this.setState({ clickedOne: "two" })
									}>
									<span>History</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="tab-content" id="pills-tabContent">
					<div
						className={
							"tab-pane fade " +
							showProfile +
							" " +
							pageViewProfile
						}
						id="profile-view"
						role="tabpanel"
						aria-labelledby="profile-view">
						<div className="row">
							<div className="col-md-6 img">
								<img
									src="https://via.placeholder.com/300"
									alt=""
									className="img-rounded"
									style={imgStyles}
								/>
							</div>
							<div
								className="col-md-6 details"
								style={detailsStyles}>
								<blockquote>
									<h5>
										<LocalFirstName />
									</h5>
									<small>
										<cite title="Source Title">
											Miami, Florida{" "}
											<i className="icon-map-marker" />
										</cite>
									</small>
								</blockquote>
								<p style={pDetailsStyles}>
									<ProfileInformation />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className={
						"tab-pane fade " + showHistory + " " + pageViewHistory
					}
					id="history-view"
					role="tabpanel"
					aria-labelledby="history-view-tab">
					<div className="container">
						<div className="row justify-content-center mt-3">
							<div className="col-sm-9 text-center">
								<h2>Payment History</h2>
							</div>
						</div>
						<div className="row text-center mt-3" />
						<div>
							<PaidHistoryFunction />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
