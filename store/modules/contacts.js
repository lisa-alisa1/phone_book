export default {
    state: {
        contacts: [],
    },

    getters: {
        allContacts: state => state.contacts
    }, 

    mutations: {
        set_contacts(state, contacts) {
            state.contacts = contacts
        }
    },

    actions: {
        async fetchContacts({commit}) {
           let contacts = await this.$axios.$get('https://63e3f8edc919fe386c132823.mockapi.io/user')
           commit('set_contacts', contacts)
        },

        addContact({state, commit}, newContact) {
            if (state.contacts && state.contacts.length) {
                 let lastContact = state.contacts[state.contacts.length - 1]
                 newContact.id = lastContact.id + 1
            } else {
                state.contacts = []
                newContact.id = 1
            }

            let contacts = state.contacts
            contacts.push(newContact)
            commit('set_contacts', contacts)
           
        },

        deleteContact({state, commit}, id) {
            let contacts = state.contacts
            let index  = contacts.findIndex(contact => contact.id === id)

            if (contacts && index || index === 0 ) {
                contacts.splice(index, 1)
            }
            commit('set_contacts', contacts)

        }
        
    }
}