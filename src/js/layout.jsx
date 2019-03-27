import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import { Login } from "./views/login_page.jsx";
import { SignUp } from "./views/sign_up.jsx";
import { ThankYou } from "./views/thank_you.jsx";
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
							<Route exact path="/signup" component={SignUp} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/about-us" component={AboutUs} />
							<Route path="/profile" component={Profile} />
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
