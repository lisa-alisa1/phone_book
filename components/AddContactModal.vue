<template>
    <div class="showModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div>
                        <p>Add new contact: </p>
                    </div>
                    <div class="flex">
                         <div class="input-block">
                            <input v-model="username"  type="text" placeholder="Enter name"> 
                            <input  v-model="phone" type="text" placeholder="Enter phone">
                        </div>
                        <img src="../assets/img/user.svg" alt="">
                    </div>
                   
                    <div class="button-block">
                        <button id="add" @click="addContact()"> ADD </button>
                        <button id="close" @click="closeModal()"> CLOSE </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            username: '',
            phone: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },
        addContact() {
            if (this.username !== '' && this.phone !== '') {
                this.$store.dispatch('addContact', {
                    username: this.username,
                    phone: this.phone,
                    date: new Date()
                })
                this.closeModal()
            }
        } 
    }
}
</script>


<style scoped>
div p {
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    margin: 0;
}
.modal-mask {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .2s ease;
}

.modal-wrapper {
display: table-cell;
vertical-align: middle;
}

.modal-container {
    width: 21%;
    margin: 0px auto;
    height: 14rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    transition: all .2s ease;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    padding: 1%;
}

.input-block {
    display: flex;
    flex-direction: column;
}
.input-block input {
    width: 100%;
    height: 2rem;
    margin-top: 4%;
    font-size: 15px;
    padding-left: 2%;
    border: 1px solid #9f9e9e;
}

.button-block {
    margin-top: 14%;
    display: flex;
    justify-content: space-between;
}

.button-block button {
    height: 1.5rem;
    width: 18%;
    font-family: Helvetica, Arial, sans-serif;
    background-color: white;
}
#add {
    border: rgba(6, 118, 6, 0.651) solid 1px;
    color: rgba(6, 118, 6, 0.651);
}
#close {
    border: rgba(172, 30, 30, 0.792) solid 1px;
    color: rgba(172, 30, 30, 0.792);
}
.flex {
    display: flex;
    align-items: center;
    margin-top: 2%;
}
.flex img {
    height: 6rem;
    margin-left: 31%;
}
</style>