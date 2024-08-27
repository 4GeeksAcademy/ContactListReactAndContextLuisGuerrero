const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
			],
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

			loadContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis",{
					method: "GET"
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
			},

			createContact: async (newContact) => {
				console.log(newContact)
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis/contacts",{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					})
					if(!response.ok){
						throw new Error("There has been an error creating this contact, please check again") 
					}
					getActions().loadContacts();
				}
				catch(error){
					console.error("There has been an error creating this contact",error)
				}
			},


			deleteContact: async (id) => {
				try {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis/contacts/" + id,{
					method: "DELETE",
				})
				if(!response.ok){
					throw new Error("There has been an error creating this contact, please check again") 
				}
				getActions().loadContacts();
				}
				catch (error){
					console.error("There has been an error deleting this contact",error)
				}
			},

			updateContact: async (contact) => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaLuis/contacts/" + contact.id,{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					})
					if (!response.ok){
						throw new Error("There has been an error updating this contact, please check again")
					}
					getActions().loadContacts();
				}
				catch (error) {
					console.log("There has been an error updating this contact",error)
				}
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
