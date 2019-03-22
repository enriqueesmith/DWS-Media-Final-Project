import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="hugeTitle text-center">
					<img src="https://source.unsplash.com/ytNFYf4d_30/1550x740" />
					<h1 className="centeredTitle">
						The Top Digital Marketing Team in Miami
					</h1>
					<p className="tagLineText">
						Leading Content Marketing Services
						<br /> for your Company&apos;s Growth
					</p>
				</div>
				<div className="packagesCards" />
				<h1 className="text-center mt-4">Packages</h1>
				<div className="card-deck mt-4">
					<div className="card">
						<img
							className="card-img-top"
							src="https://via.placeholder.com/291x150/"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="https://via.placeholder.com/291x150/"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="https://via.placeholder.com/291x150/"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="https://via.placeholder.com/291x150/"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</div>
					</div>
				</div>
				<div className="addOnsCards" />
				<div className="Testimonials" />
			</div>
		);
	}
}
