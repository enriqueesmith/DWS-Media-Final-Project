const getState = ({ getStore, setStore }) => {
	return {
		store: {
			packages: [
				{
					id: 1,
					name: "1 - Month",
					description: "String",
					price: 2500.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 2,
					name: "3 - Month",
					description: "String",
					price: 7000.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 3,
					name: "6 - Month",
					description: "String",
					price: 13000.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 4,
					name: "1 - Year",
					description: "String",
					price: 25000.0,
					image: "http://via.placeholder.com/200x200"
				}
			],

			addons: [
				{
					id: 5,
					name: "1 - Blog",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 9,
					name: "1 - Newspaper Article",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 10,
					name: "1 - Direct Mailer",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 11,
					name: "1 - Online Ad Content",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 12,
					name: "1 - Company Tagline",
					description: "String",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
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
			}
		}
	};
};
export default getState;
