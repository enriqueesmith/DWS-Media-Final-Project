const getState = ({ getStore, setStore }) => {
	return {
		store: {
			packages: [
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				}
			],

			addons: [
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				},
				{
					name: "String",
					description: "String",
					price: "String"
				}
			],

			cart: [{}]
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
