import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Packages } from "./views/packagesDetails.jsx";
import { Addons } from "./views/addOnsDetails.jsx";
import { Login } from "./views/login_page.jsx";
import { SignUp } from "./views/sign_up.jsx";
import { ThankYou } from "./views/thank_you.jsx";
import { ShoppingCart } from "./views/shopping_cart.jsx";
import { Checkout } from "./views/checkout.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

import { Portfolio } from "./views/portfolio.jsx";
import { AboutUs } from "./views/about-us.jsx";
import { Profile } from "./views/profile.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="d-flex flex-column">
					<BrowserRouter>
						<ScrollToTop>
							<Navbar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route
									exact
									path="/thank_you"
									component={ThankYou}
								/>
								<Route exact path="/login" component={Login} />
								<Route
									exact
									path="/shopping_cart"
									component={ShoppingCart}
								/>
								<Route
									exact
									path="/checkout"
									component={Checkout}
								/>
								<Route
									exact
									path="/signup"
									component={SignUp}
								/>
								<Route
									path="/packagesDetails/:theid"
									component={Packages}
								/>
								<Route
									path="/addOnsDetails/:theid"
									component={Addons}
								/>
								<Route
									path="/portfolio"
									component={Portfolio}
								/>
								<Route path="/about-us" component={AboutUs} />
								<Route path="/profile" component={Profile} />
								<Route
									render={() => (
										<h1 className="mt-5">Not found!</h1>
									)}
								/>
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default Store(Layout);
