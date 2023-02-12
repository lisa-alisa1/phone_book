<template>
    <div class="container">
      <div class="logo">
        <h3> Phone Book </h3>  
      </div>

      <div class="main-block">
        <div class="search">
          <div>
            <input type="text" placeholder="Enter">
            <img class="search-img" src="../assets/img/search.svg" >
          </div>
          <div>
            <img class="add-user-img" src="../assets/img/add-user.svg" @click="isShowModal = true">
          </div>
        </div>
        <Contacts />
        <div v-if="isShowModal" >
          <AddContactModal @close-modal="isShowModal = false" />
        </div>
        
      </div>
    </div>
</template>

<script>
import Contacts from '../components/Contacts.vue';
import AddContactModal from '../components/AddContactModal.vue'

export default {
  name: 'IndexPage',
  components: {
    Contacts,
    AddContactModal
  },
  data() {
    return {
      isShowModal: false
    }
  }
}
</script>


<style >
.container {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
}

.logo {
  margin-bottom: 2%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
}
.main-block {
  height: 70%;
  width: 31%;
  background-color: rgba(137, 116, 90, 0.414);
  border-radius: 10px;
  padding: 1%;
}

.search {
  position: relative;
  display: flex;
  justify-content: space-between;
  
}

.search input {
  border: none;
  height: 2rem;
  width: 125%;
  border-radius: 5px;
  padding-left: 7px;
  position: relative;

}

 .search-img {
    width: 3%;
    position: absolute;
    top: 22%;
    right: 57%;
}

.add-user-img {
  height: 2rem;
}
</style>