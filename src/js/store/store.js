const getState = ({ getStore, setStore }) => {
	return {
		store: {
			packages: [
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				}
			],

			addons: [
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				},
				{
					name: "String",
					description: "String",
					price: 99.0
				}
			],

			cart: [
				{
					image: "http://via.placeholder.com/200x200",
					name: "Copyright Pro Package",
					description: "Copyright Pro Package",
					price: 99.0
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
		}
	};
};

export default getState;
