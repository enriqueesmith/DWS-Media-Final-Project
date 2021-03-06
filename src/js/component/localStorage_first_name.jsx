import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { Context } from "../store/appContext.jsx";

export class LocalFirstName extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.user.first_name) {
						return (
							<Link className="nav-link mr-1" to="/profile">
								<div>{store.user.first_name}</div>
							</Link>
						);
					} else {
						return (
							<Link className="nav-link mr-1" to="/signup">
								<div>Sign Up Now</div>
							</Link>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}
