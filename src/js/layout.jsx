import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Packages } from "./views/packages.jsx";
import { Addons } from "./views/addons.jsx";
import { Login } from "./views/login_page.jsx";
import { SignUp } from "./views/sign_up.jsx";
import { ThankYou } from "./views/thank_you.jsx";
import { ShoppingCart } from "./views/shopping_cart.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
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
							<Route exact path="/signup" component={SignUp} />
							<Route
								path="/packages/:theid"
								component={Packages}
							/>
							<Route path="/addons/:theid" component={Addons} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
