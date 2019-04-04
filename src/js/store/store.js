const getState = ({ getStore, setStore }) => {
	return {
		store: {
			packages: [
				{
					id: 1,
					name: "1 - Month",
					description: "One Blog per Week",
					//<br></br>One Press Release per Week<br></br>One eBlast per Week<br></br>One Social Media Post per Week<br></br>One Newspaper Article every two weeks",
					price: 2500.0
				},
				{
					id: 2,
					name: "3 - Month",
					description: "One Blog per Week",
					price: 7000.0
				},
				{
					id: 3,
					name: "6 - Month",
					description: "One Blog per Week",
					price: 13000.0
				},
				{
					id: 4,
					name: "1 - Year",
					description: "One Blog per Week",
					price: 25000.0
				}
			],

			addons: [
				{
					id: 1,
					name: "1 - Blog",
					description: "Blog",
					price: 250.0
				},
				{
					id: 2,
					name: "1 - Press Release",
					description: "Press Release",
					price: 250.0
				},
				{
					id: 3,
					name: "1 - eBlast",
					description: "eBlast",
					price: 250.0
				},
				{
					id: 4,
					name: "1 - Social Media Post",
					description: "Social Media Post",
					price: 250.0
				},
				{
					id: 5,
					name: "1 - Newspaper Article",
					description: "Newspaper Article",
					price: 250.0
				},
				{
					id: 6,
					name: "1 - Direct Mailer",
					description: "Direct Mailer",
					price: 250.0
				},
				{
					id: 7,
					name: "1 - Online Ad Content",
					description: "Online Ad Content",
					price: 250.0
				},
				{
					id: 8,
					name: "1 - Company Tagline",
					description: "Company Tagline",
					price: 250.0
				}
			],

			cart: [
				{
					image: "http://via.placeholder.com/200x200",
					name: "6 - Month",
					description: "One Blog Per Week",
					price: 13000.0
				}
			]
		},
		actions: {
			addToCart: (koala, elephant, tiger) => {
				var tempStore = getStore();
				var newCart = {
					image: "http://via.placeholder.com/200x200",
					name: koala,
					description: elephant,
					price: tiger
				};
				tempStore.cart.push(newCart);
				setStore({ tempStore });
			}
			//	removeFromCart: e => {
			//	let deleteArrayValue = getStore();
			//let other = deleteArrayValue.cart.filter(shower => {
			//	return shower.id !== e;
			//	});
			//	setStore({ cart: other });
			//}
		}
	};
};
export default getState;
