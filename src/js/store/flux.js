const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			modal: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			modalToggle: () => {
				setStore({ modal: !getStore().modal })
			},
			selectedContact: (id) => {
				setStore({ selected: id })
			},
			getDetails: async (uid, type) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching people error')
					console.log(data)
					setStore({ details: data.result })
				} catch (error) {
					console.log('error: ----> ', error)
				}
			},
			getPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching people error')
					console.log(data)
					setStore({ people: data.results })
				} catch (error) {
					console.log('error: ----> ', error)
				}
			},
			getData: async () => {
				try {
					const endpoints = ['/people', '/planets', '/vehicles', '/starships']
					const resp = endpoints.map((el, i) => fetch(getStore().url + el).then(res => {
						if (!res.ok) throw new Error('fetching error at ' + endpoints[i])
						return res.json()
					}))
					const data = await Promise.all(resp).then(data => data)
					data.map((el, i) => {
						setStore({ [endpoints[i].replace('/', '')]: el })
					})
				} catch (error) {
					console.log('error: ----> ', error)
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
