import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";

const items = [
	{
		src: "http://source.unsplash.com/FMiczIq8orU/1550x650",
		altText: "Slide 1",
		caption: "Worth every penny. My company's sales increased 200%",
		content: "Tom Jefferson"
	},
	{
		src: "http://source.unsplash.com/heEPoapeiVk/1550x650",
		altText: "Slide 2",
		caption: "Worth every penny. My company's sales increased 200%",
		content: "Stacy Johnson"
	},
	{
		src: "http://source.unsplash.com/i0LcODk-V1Q/1550x650",
		altText: "Slide 3",
		caption: "Worth every penny. My company's sales increased 200%",
		content: "Ben Franklin"
	}
];

class CarouselHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	displayButton(index) {
		if (this.state.activeIndex === 0) {
			return "d-none";
		} else {
			return "buttonSlide";
		}
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}>
					<img src={item.src} alt={item.altText} />
					<div className="carousel-caption mb-5 custom-caption">
						<CarouselCaption
							captionText={item.caption}
							captionHeader={item.content}
						/>
					</div>
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={this.goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={this.previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={this.next}
				/>
			</Carousel>
		);
	}
}

export default CarouselHome;
