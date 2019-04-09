const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				email: "",
				password: ""
			},

			packages: [
				{
					id: 1,
					name: "1 - Month",
					description: "One Blog per Week",
					//<br></br>One Press Release per Week<br></br>One eBlast per Week<br></br>One Social Media Post per Week<br></br>One Newspaper Article every two weeks",
					price: 2500.0,
					image: "http://source.unsplash.com/wgivdx9dBdQ/640x480"
				},
				{
					id: 2,
					name: "3 - Month",
					description: "One Blog per Week",
					price: 7000.0,
					image: "http://source.unsplash.com/uQvUByH89MA/640x480"
				},
				{
					id: 3,
					name: "6 - Month",
					description: "One Blog per Week",
					price: 13000.0,
					image: "http://source.unsplash.com/wkO0q0UTqc8/640x480"
				},
				{
					id: 4,
					name: "1 - Year",
					description: "One Blog per Week",
					price: 25000.0,
					image: "http://source.unsplash.com/y83Je1OC6Wc/640x480"
				}
			],

			addons: [
				{
					id: 5,
					name: "1 - Blog Post",
					description: "Blog Post",
					price: 250.0,
					image: "http://source.unsplash.com/OqtafYT5kTw/640x480"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description: "Press Release",
					price: 250.0,
					image: "http://source.unsplash.com/4V1dC_eoCwg/640x480"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description: "eBlast",
					price: 250.0,
					image: "http://source.unsplash.com/zOWvIwYGHG8/640x480"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description: "Social Media Post",
					price: 250.0,
					image: "http://source.unsplash.com/6F0mLsrv134/640x480"
				},
				{
					id: 9,
					name: "1 - Newspaper Article",
					description: "Newspaper Article",
					price: 250.0,
					image: "http://source.unsplash.com/wajusTqz_FI/640x480"
				},
				{
					id: 10,
					name: "1 - Direct Mailer",
					description: "Direct Mailer",
					price: 250.0,
					image: "http://source.unsplash.com/uGcDWKN91Fs/640x480"
				},
				{
					id: 11,
					name: "1 - Online Ad Content",
					description: "Online Ad Content",
					price: 250.0,
					image: "http://source.unsplash.com/EpJOBZNzrVo/640x480"
				},
				{
					id: 12,
					name: "1 - Company Tagline",
					description: "Company Tagline",
					price: 250.0,
					image: "http://source.unsplash.com/Bnk2Aep_li4/640x480"
				}
			],

			cart: []
		},
		actions: {
			addToCart: koala => {
				var tempStore = getStore();

				tempStore.cart.push(koala);
				setStore({ tempStore });
			},
			removeFromCart: e => {
				let deleteArrayValue = getStore();
				let other = deleteArrayValue.cart.filter(shower => {
					return shower.id !== e;
				});
				setStore({ cart: other });
			},
			addUser: e => {
				let newUser = getStore();
				newUser.user = e;
				console.log(newUser.user);
				setStore({ newUser });
			},
			logIn: e => {
				let loggedInUser = getStore();
				console.log(loggedInUser.user);
				if (
					loggedInUser.user.email === e.email &&
					loggedInUser.user.password === e.password
				) {
					return true;
				}
			},
			//this clears the cart on payment so the cart is empty after purchasing products.
			clearCartOnPayment: e => {
				let currentCart = getStore();
				localStorage.setItem(
					"payment_history",
					JSON.stringify(currentCart.cart)
				);
				console.log(localStorage.payment_history);
				currentCart.cart.splice(0, currentCart.cart.length);
				setStore({ currentCart });
			}
			//this comes before clearing the cart so that payment history can be updated.
			// populatePaymentHistory: e => {
			// 	var i;
			// 	let paymentHistoryArray = [];
			// 	for (i = 0; i <= localStorage.payment_history; i++) {
			// 		paymentHistoryArray.push[i];
			// 	}
			// 	console.log(paymentHistoryArray);
			// 	localStorage.setItem("payment_history", paymentHistoryArray);
			// 	return paymentHistoryArray;
			// }
		}
	};
};

export default getState;
