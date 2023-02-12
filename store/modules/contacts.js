export default {
    state: {
        contacts: []
    },
    getters: {
        allContacts: state => state.contacts
    }, 
    mutations: {
        set_contacts(state, contacts) {
            state.contacts.push(contacts)
        }

    },
    actions: {
        async fetchContacts({commit}) {
           let contacts = await this.$axios.$get('https://63e3f8edc919fe386c132823.mockapi.io/user')
           commit('set_contacts', contacts)
           console.log(contacts);
        }
    }
}