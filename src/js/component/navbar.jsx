import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { LocalFirstName } from "./localStorage_first_name.jsx";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbarCustom navbar-dark bg-primary">
				<a className="navbar-brand">
					<Link to="/" className="navbar-brand">
						<i className="fas fa-book-open mr-2" />
						DWS Media
					</Link>
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
								onClick={this.toggleOpen}
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Packages and Add-Ons
							</a>
							<div
								className={menuClass}
								aria-labelledby="navbarDropdownMenuLink">
								<Link
									smooth
									className="dropdown-item"
									href=""
									to="/#PackagesBreak">
									Packages
								</Link>
								<Link
									smooth
									className="dropdown-item"
									href=""
									to="/#AddOnsBreak">
									Individual Add-Ons
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
								<LocalFirstName />
							</Link>
						</li>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<li className="nav-item rightHeader">
										<Link
											className="nav-link"
											to="/shopping_cart">
											{store.cart.length}
											<i className="fas fa-shopping-cart" />
										</Link>
									</li>
								);
							}}
						</Context.Consumer>
					</ul>
				</div>
			</nav>
		);
	}
}
