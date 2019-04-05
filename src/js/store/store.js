const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {},

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
					description:
						"Dip your toes into our content marketing service and order a superb article. Make a splash with your visitors showcasing your premium new copy.",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description:
						"Blast your message to the masses! Great for new product launches, new services, or just new, well, news! Order today.",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description:
						"Keep in touch with your audience and offer new promotions to VIP’s or spark a conversation. Our Eblasts are sure to drive traffic, revenue, and increase client retention",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description:
						"Quit shouting into the void and post a targeted message guaranteed to captivate your audience. Increase likes, followers, and brand recognition",
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
			},
			addUser: e => {
				let newUser = getStore();
				newUser.user = e;
				console.log(newUser.user);
				setStore({ newUser });
				//	let firstName = e.target.firstName.value;
				//	let lastName = e.target.lastName.value;
				//	let email = e.target.emailSignUp.value;
				//	let password = e.target.passwordSignUp.value;
				//	let businessName = e.target.businessName.value;
				//	let businessURL = e.target.businessURL.value;
				//	let businessURLUsername = e.target.businessURLUsername.value;
				//	let businessURLPassword = e.target.businessURLPassword.value;
				//	let phone = e.target.phoneSignUp.value;
				//
				//				let tempObject = {
				//					first_name: firstName,
				//					last_name: lastName,
				//					email: email,
				//					password: password,
				//					business_name: businessName,
				//					business_username: businessURLUsername,
				//					business_password: businessURLPassword,
				//					website_url: businessURL,
				//					phone: phone,
				//					payment_id: true
				//				};
			}
		}
	};
};
export default getState;
