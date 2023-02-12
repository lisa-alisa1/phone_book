<template>
    <div class="contacts"> 
        <div class="item"  v-for="(contact, index) in allContacts" :key="index">
            <div>
                <div>  {{ contact.username }} </div> 
                 <div> {{ contact.phone }} </div> 
            </div>
            <div class="icons-block">
                <div>{{ $moment(contact.date).format('MM-DD HH:mm') }}</div>
                <img class="icons" src="../assets/img/edit.svg" style="margin-left: 10%; margin-right: 10%;" @click="isShowModal = true">
                <img class="icons"  src="../assets/img/trash.svg" alt="" @click="deleteContact(contact.id)">
            </div>
        </div> 
        <div v-if="isShowModal">
            <EditContactModal @close-modal="isShowModal = false"  />
        </div>
    </div>
   
</template>

<script>
import EditContactModal from '../components/EditContactModal.vue'

export default {
    components: { EditContactModal },
    data() {
        return {
            isShowModal: false,
        }
    },
    mounted() {
        return this.$store.dispatch('fetchContacts')
    },
    computed: {
   
        allContacts() {
            return this.$store.getters['allContacts']
        },
    },

    methods: {
        deleteContact(id) {
            return this.$store.dispatch('deleteContact', id)
        },

        

    }
}
</script>

<style>
.contacts {
    margin-top: 2%;
    border-radius: 10px;
    border: 1px solid #545353;
    padding: 2%;
}

.item {
    padding: 1%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.item:hover {
    background-color: #9f9e9e;
    border-radius: 5px;
}

.icons {
    height: 1.3rem;
}

.icons-block {
    width: 31%;
    display: flex;
    justify-content: flex-end;
}

</style>