import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";

export class LocalFirstName extends React.Component {
	render() {
		if (localStorage.first_name) {
			return <div>{localStorage.first_name}</div>;
		} else {
			return <div>Sign Up Now</div>;
		}
	}
}
