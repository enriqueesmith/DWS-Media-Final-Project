import React from "react";
import "../../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ls from "local-storage";
import { PaymentHistoryCard } from "./paymentHistory.jsx";

export class PaidHistoryFunction extends React.Component {
	getPaidCart = e => {
		let x = JSON.parse(localStorage.getItem("payment_history"));
		//console.log(x);
		return x;
	};

	render() {
		if (this.getPaidCart()) {
			return this.getPaidCart().map((elem, index) => {
				return (
					<PaymentHistoryCard
						name={elem.name}
						price={elem.price}
						description={elem.description}
						elem={elem}
						key={index}
					/>
				);
			});
		} else {
			return <div>You have not bought anything yet!</div>;
		}
	}
}
