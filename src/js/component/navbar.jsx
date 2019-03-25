import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<div className="leftHeader">
					<a className="navbar-brand" href="#">
						<i className="fas fa-book-open mr-2" />
						DWS Media
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<div className="centerHeader">
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Portfolio
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Packages and Add-Ons
								</a>
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="#">
										Packages
									</Link>
									<div className="dropdown-divider" />
									<Link className="dropdown-item" to="#">
										Invidual Add-Ons
									</Link>
								</div>
							</li>
						</div>
						<div className="rightHeader">
							<li className="nav-item">
								<Link className="nav-link" to="#">
									<i className="fas fa-user-circle mr-3!" />{" "}
									Login or Sign Up
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									<i className="fas fa-shopping-cart" />
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		);
	}
}
