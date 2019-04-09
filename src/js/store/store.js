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
					description:
						"With our one-month blog post package, you receive a 500-word, search-engine-optimized blog post for your website every Friday for four weeks. You can specify the content if you wish, or if you prefer, we will scan your current website and evaluate industry trends to produce timely and engaging content.",
					price: 1200.0,
					image: "http://source.unsplash.com/wgivdx9dBdQ/640x480"
				},
				{
					id: 2,
					name: "3 - Month",
					description:
						"The same exciting, eyeball-grabbing content as our one-month package, but you receive three full months of 500-word, search-engine-optimized blogs delivered every Friday, and at a lower per-blog price. Your website will always be fresh and up to date with informative and engaging content, and search engines will reward you for it.",
					price: 3300.0,
					image: "http://source.unsplash.com/uQvUByH89MA/640x480"
				},
				{
					id: 3,
					name: "6 - Month",
					description:
						"Want the most eye-popping, engaging content at the lowest price? You are the perfect candidate for our six-month package. Every Friday you will receive a 500-word, search-engine-optimized blog post, ensuring your website never gets stale and your visitors have a reason to keep coming back.",
					price: 6000.0,
					image: "http://source.unsplash.com/wkO0q0UTqc8/640x480"
				}
			],

			addons: [
				{
					id: 5,
					name: "1 - Blog Post",
					description:
						"Dip your toes into our content marketing service and order a superb article. Make a splash with your visitors showcasing your premium new copy.",
					price: 300.0,
					image: "http://source.unsplash.com/OqtafYT5kTw/640x480"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description:
						"Blast your message to the masses! Great for new product launches, new services, or just new, well, news!",
					price: 300.0,
					image: "http://source.unsplash.com/4V1dC_eoCwg/640x480"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description:
						"Keep in touch with your audience and offer new promotions to VIP’s or spark a conversation. Our Eblasts are sure to drive traffic, revenue, and increase client retention.",
					price: 300.0,
					image: "http://source.unsplash.com/zOWvIwYGHG8/640x480"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description:
						"Quit shouting into the void and post a targeted message guaranteed to captivate your audience. Increase likes, followers, and brand recognition.",
					price: 300.0,
					image: "http://source.unsplash.com/6F0mLsrv134/640x480"
				},
				{
					id: 9,
					name: "1 - Newspaper/Magazine Article",
					description:
						"Attract a certain kind of audience with a printed format article that is sure to spark interest and enthusiasm around your products and/or services.",
					price: 300.0,
					image: "http://source.unsplash.com/wajusTqz_FI/640x480"
				},
				{
					id: 10,
					name: "1 - Direct Mailer",
					description:
						"Mailing potential and current customers is a great way to make sure you are using all avenues to reach your market and a proven way to increase sales.",
					price: 300.0,
					image: "http://source.unsplash.com/uGcDWKN91Fs/640x480"
				},
				{
					id: 11,
					name: "1 - Online Ad Content",
					description:
						"We'll create the perfect online advertising content for your company that is sure to drive traffic from those specific consumers you want to target.",
					price: 300.0,
					image: "http://source.unsplash.com/EpJOBZNzrVo/640x480"
				},
				{
					id: 12,
					name: "1 - Company Tagline",
					description:
						"Let our experts create the perfect tagline for your company that tells the world what you do in one short captivating sentence.",
					price: 300.0,
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
