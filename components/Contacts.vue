<template>
    <div class="contacts"> 
        <div class="item"  v-for="(contact, index) in tasksOnPage" :key="index"> 
            <div>
                <div>  {{ contact.username }} </div> 
                <div> {{ contact.phone }} </div> 
            </div>
            <div class="icons-block">
                <div class="date"> {{ $moment(contact.date).format('MM-DD HH:mm') }} </div>
                <img 
                    class="icons" 
                    src="../assets/img/edit.svg" 
                    style="margin-left: 10%; 
                    margin-right: 10%;" 
                    @click="showModal(contact)"
                >
                <img 
                    class="icons"  
                    src="../assets/img/trash.svg"  
                    @click="deleteContact(contact.id)"
                >
            </div>
        </div> 
        
        <div v-if="isShowModal"> 
            <EditContactModal @close-modal="isShowModal = false" :selectedContact="selectedContact" />
        </div>

        <vs-pagination 
            v-model="currentPage" 
            :total-pages="totalPages" 
            @change="changePage"
        />
    </div>
</template>

<script>
import EditContactModal from '../components/EditContactModal.vue'

export default {
    props: ['searchPhone'],
    components: { EditContactModal },
    data() {
        return {
            isShowModal: false,
            currentPage: 1,
            perPage: 8,
            selectedContact: ''
        }
    },
    mounted() {
        return this.$store.dispatch('fetchContacts')
    },

    computed: {
        allContacts() {
            return this.$store.getters['allContacts']
        },
        filteredPhones() {
            return this.allContacts.filter(contact => contact.phone.includes(this.searchPhone))
        },
        totalPages() {
            return Math.ceil(this.allContacts.length / this.perPage)
        },
        tasksOnPage() {
            const startIndex = this.perPage * (this.currentPage - 1)
            const endIndex = startIndex + this.perPage

            if (this.searchPhone) {
                return this.filteredPhones.slice(startIndex, endIndex)
            } else {
                return this.allContacts.slice(startIndex, endIndex)
            }
        },
    },

    methods: {
        deleteContact(id) {
            return this.$store.dispatch('deleteContact', id)
        },
        changePage(page) {
            this.currentPage = page;
        },
        showModal(contact) {
            this.isShowModal = true 
            this.selectedContact = contact
        }
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
    width: 28%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.date {
    font-size: 18px;
}
</style>