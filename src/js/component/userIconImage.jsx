import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { Context } from "../store/appContext.jsx";

export class UserIconImage extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.user.first_name) {
						return (
							<Link className="nav-link pr-0" to="/profile">
								<i className="fas fa-user-circle" />
							</Link>
						);
					} else {
						return (
							<Link className="nav-link pr-0" to="/login">
								<div>Login</div>
							</Link>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}
