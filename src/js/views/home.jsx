import React from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import AddOnsCard from "../component/addOnsCard.jsx";
import PackagesCard from "../component/packagesCard.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
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
				<hr className="lineBreaks" />
				<div id="packagesHeader">
					<h1 className="text-center mt-4">Packages</h1>
				</div>
				<div>
					<div className="card-deck packagesCards mt-4">
						<Context.Consumer>
							{({ store }) => {
								return store.packages.map((elem, index) => {
									return (
										<PackagesCard
											name={elem.name}
											description={elem.description}
											price={elem.price}
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
				<div id="AddOnsHeader">
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
											key={index}
											camel={index}
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<hr className="lineBreaks" />
				<div className="Testimonials" />
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel">
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"
						/>
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="1"
						/>
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="2"
						/>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/1550x650"
								alt="First slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Different Name</h5>
								<p>
									Worth every penny. My company&apos;s sales
									increased 200%
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/1550x650"
								alt="Second slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Another name</h5>
								<p>
									Worth every penny. My company&apos;s sales
									increased 200%
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/1550x650"
								alt="Third slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Full Name</h5>
								<p>
									Worth every penny. My company&apos;s sales
									increased 200%
								</p>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="sr-only">Next</span>
					</a>
				</div>
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
