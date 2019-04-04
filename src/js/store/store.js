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
					name: "4-Week Package",
					price: 99.0,
					description: "One Blog Per Week"
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
