import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { Context } from "../store/appContext.jsx";

export class ProfileInformation extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.user.first_name) {
						return (
							<div>
								<h8>{store.user.business_name}</h8>
								<br />
								<h8>{store.user.email}</h8>
								<br />
								<h8>{store.user.website_url}</h8>
								<br />
								<h8>{store.user.phone}</h8>
							</div>
						);
					} else {
						return <div>We are waiting...</div>;
					}
				}}
			</Context.Consumer>
		);
	}
}
