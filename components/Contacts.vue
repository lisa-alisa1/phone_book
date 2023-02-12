<template>
    <div class="contacts">
        <ul v-for="(contact, index) in contacts" :key="index">
            <li > {{ contact }}</li>
        </ul>
        
        
    </div>
</template>

<script>

export default {
    computed: {
        contacts() {
            
        }
    },
    methods: {
        fetchContacts() {
            return this.$store.dispatch('fetchContacts')
        }
        
    }
}
</script>