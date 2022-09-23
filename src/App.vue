<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal  theme="sale" @close="toggleModal">
        <p> Welcome to vue js</p>
      <template v-slot:links>
          <a href="#">sign In</a>
          <a href="#">sign up</a>
        </template>
    </Modal>
  </div>  

   <div v-if="showModalTwo">
    <Modal  theme="sale" @close="toggleModalTwo">
      <p> Welcome to vue js</p>
      <template v-slot:link>
        <h1>hello World</h1>
          <a href="#">LogIn</a>
          <a href="#">LogOut</a>
          
        </template>
    </Modal>
  </div>  
   <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal Two</button>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      name:'VueJs',
      projectName:'Workflows Ignatius',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>