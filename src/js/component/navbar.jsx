import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand">
					<Link to="/">
						<i className="fas fa-book-open mr-2" />
					</Link>
					<Link to="/">DWS Media</Link>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active centerHeader">
							<Link className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item centerHeader">
							<Link className="nav-link" to="/about-us">
								About Us
							</Link>
						</li>
						<li className="nav-item centerHeader">
							<Link className="nav-link" to="/portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item dropdown centerHeader">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Packages and Add-Ons
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<Link className="dropdown-item" to="#">
									Packages
								</Link>
								<Link className="dropdown-item" to="#">
									Invidual Add-Ons
								</Link>
							</div>
						</li>
						<li className="nav-item rightHeader">
							<Link className="nav-link pr-0" to="/profile">
								<i className="fas fa-user-circle" />
							</Link>
						</li>
						<li className="nav-item rightHeader">
							<Link className="nav-link mr-1" to="/signup">
								Login or Sign Up
							</Link>
						</li>
						<li className="nav-item rightHeader">
							<Link className="nav-link" to="/shopping_cart">
								<i className="fas fa-shopping-cart" />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
