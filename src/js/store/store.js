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
					description: "Copyright Pro Package",
					price: 99.0
				}
			]
		},
		actions: {
			addToCart: koala => {
				var tempStore = getStore();
				var newCart = {
					name: koala
				};
				tempStore.cart.push(newCart);
				setStore({ tempStore });
			}
		}
	};
};

export default getState;
