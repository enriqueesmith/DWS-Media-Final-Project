import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../store/appContext.jsx";

var testimonials = [
	{
		src: "http://source.unsplash.com/FMiczIq8orU/1550x650",
		altText: "Slide 1",
		caption: "Worth every penny. My company's sales increased 200%",
		content: "Tom Jefferson"
	},
	{
		src: "http://source.unsplash.com/heEPoapeiVk/1550x650",
		altText: "Slide 2",
		caption: "My company's sales increased 180%. Worth every penny.",
		content: "Stacy Johnson"
	},
	{
		src: "http://source.unsplash.com/i0LcODk-V1Q/1550x650",
		altText: "Slide 3",
		caption: "Worth every penny. My company's sales increased 133%",
		content: "Ben Franklin"
	}
];

class CarouselHome extends Component {
	render() {
		const carouselItems = testimonials.map(tes => (
			<div key={tes.src}>
				<img src={tes.src} alt={tes.altText} />
				<p id="legend" className="legend">
					{tes.caption}
					<br />
					<a className="CarouselContent">{tes.content}</a>
				</p>
			</div>
		));
		return <Carousel>{carouselItems}</Carousel>;
	}
}

export default CarouselHome;
