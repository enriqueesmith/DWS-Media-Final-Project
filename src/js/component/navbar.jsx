import React from "react";
import PropTypes from "prop-types";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { LocalFirstName } from "./localStorage_first_name.jsx";
import { UserIconImage } from "./userIconImage.jsx";
import { Context } from "../store/appContext.jsx";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

export class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar className="navbar fixed-top navbar-expand-lg navbarCustom navbar-dark bg-primary">
					<NavbarBrand href="/">
						<Link to="/" className="navbar-brand">
							<i className="fas fa-book-open mr-2" />
							DWS Media
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem className="centerHeader">
								<Link className="nav-link active" to="/">
									Home{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</NavItem>
							<NavItem className="centerHeader">
								<Link className="nav-link" to="/about-us">
									About Us
								</Link>
							</NavItem>
							<NavItem className="centerHeader">
								<Link className="nav-link" to="/portfolio">
									Portfolio
								</Link>
							</NavItem>
							<UncontrolledDropdown
								nav
								inNavbar
								className="centerHeader">
								<DropdownToggle nav caret>
									Packages and Add-Ons
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<Link
											smooth
											className="dropdown-item"
											href=""
											to="/#PackagesBreak">
											Packages
										</Link>
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										<Link
											smooth
											className="dropdown-item"
											href=""
											to="/#AddOnsBreak">
											Individual Add-Ons
										</Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem className="rightHeader">
								<UserIconImage />
							</NavItem>
							<NavItem className="rightHeader">
								<LocalFirstName />
							</NavItem>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<NavItem className="rightHeader">
											<Link
												className="nav-link"
												to="/shopping_cart">
												{store.cart.length}
												<i className="fas fa-shopping-cart" />
											</Link>
										</NavItem>
									);
								}}
							</Context.Consumer>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

Navbar.propTypes = {
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

NavbarBrand.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};
