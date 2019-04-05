import React from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import AddOnsCard from "../component/addOnsCard.jsx";
import PackagesCard from "../component/packagesCard.jsx";
import CarouselHome from "../component/carousel.jsx";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {}; // Create a ref object
	}

	/*

	componentDidMount = () => {
		fetch(
			"http://dws-media-final-project-enriqueesmith.c9users.io:8080/addons/"
		)
			.then(res => res.json())
			.then(addons => this.setState({ addons: addons.results }));
		fetch(
			"http://dws-media-final-project-enriqueesmith.c9users.io:8080/packages/"
		)
			.then(res => res.json())
			.then(packages => this.setState({ packages: packages.results }));
	};
	
	*/

	render() {
		return (
			<div className="container-fluid">
				<div className="hugeTitle text-center">
					<img src="https://source.unsplash.com/ytNFYf4d_30/1523x740" />
					<h1 className="centeredTitle">
						The Top Digital Marketing Team in Miami
					</h1>
					<p className="tagLineText">
						Leading Content Marketing Services
						<br /> for your Company&apos;s Growth
					</p>
				</div>
				<div id="PackagesBreak">
					<br />
				</div>
				<div>
					<br />
				</div>
				<hr className="lineBreaks" />
				<div>
					<h1 className="text-center mt-4">Packages</h1>
				</div>
				<div className="card-deck packagesCards mt-4">
					<Context.Consumer>
						{({ store }) => {
							return store.packages.map((elem, index) => {
								return (
									<PackagesCard
										name={elem.name}
										description={elem.description}
										price={elem.price}
										image={elem.image}
										key={index}
										camel={index}
										elem={elem}
									/>
								);
							});
						}}
					</Context.Consumer>
				</div>
				<div id="AddOnsBreak">
					<br />
				</div>
				<div>
					<br />
				</div>
				<hr className="lineBreaks" />
				<div>
					<h1 className="text-center mt-4">Add - Ons</h1>
				</div>
				<div className="addOnsCards">
					<div className="card-deck mt-4">
						<Context.Consumer>
							{({ store }) => {
								return store.addons.map((elem, index) => {
									return (
										<AddOnsCard
											name={elem.name}
											description={elem.description}
											price={elem.price}
											image={elem.image}
											key={index}
											camel={index}
											elem={elem}
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<hr className="lineBreaks" />
				<div className="Testimonials" />
				<CarouselHome />
			</div>
		);
	}
}

/*
						{this.state.packages.map((elem, index) => {
							return (
								<PackagesCard
									name={elem.name}
									description={elem.description}
									price={elem.price}
									key={index}
									camel={index}
								/>
							);
						})}
					*/
