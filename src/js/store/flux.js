const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swapi: {
				"message": "ok",
				"total_records": 82,
				"total_pages": 9,
				"previous": null,
				"next": "https://www.swapi.tech/api/people?page=2&limit=10",
				"results": [
					{
						"uid": "1",
						"name": "Luke Skywalker",
						"url": "https://www.swapi.tech/api/people/1"
					},
					{
						"uid": "2",
						"name": "C-3PO",
						"url": "https://www.swapi.tech/api/people/2"
					},
					{
						"uid": "3",
						"name": "R2-D2",
						"url": "https://www.swapi.tech/api/people/3"
					},
					{
						"uid": "4",
						"name": "Darth Vader",
						"url": "https://www.swapi.tech/api/people/4"
					},
					{
						"uid": "5",
						"name": "Leia Organa",
						"url": "https://www.swapi.tech/api/people/5"
					},
					{
						"uid": "6",
						"name": "Owen Lars",
						"url": "https://www.swapi.tech/api/people/6"
					},
					{
						"uid": "7",
						"name": "Beru Whitesun lars",
						"url": "https://www.swapi.tech/api/people/7"
					},
					{
						"uid": "8",
						"name": "R5-D4",
						"url": "https://www.swapi.tech/api/people/8"
					},
					{
						"uid": "9",
						"name": "Biggs Darklighter",
						"url": "https://www.swapi.tech/api/people/9"
					},
					{
						"uid": "10",
						"name": "Obi-Wan Kenobi",
						"url": "https://www.swapi.tech/api/people/10"
					}
				]
			},

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
