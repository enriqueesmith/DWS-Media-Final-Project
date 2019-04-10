import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";

export class ProfileInformation extends React.Component {
	render() {
		if (localStorage.first_name) {
			return (
				<div>
					<h8>{localStorage.business_name}</h8>
					<br />
					<h8>{localStorage.email}</h8>
					<br />
					<h8>{localStorage.website_url}</h8>
					<br />
					<h8>{localStorage.phone}</h8>
				</div>
			);
		} else {
			return <div>We are waiting...</div>;
		}
	}
}
