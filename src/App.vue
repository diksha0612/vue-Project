<!-- eslint-disable vue/no-unused-components -->
<template>
<h1>Reaction Timer</h1>  
<button @click="startTimer" :disabled = "isPlaying">Play</button>
<block v-if="isPlaying" :delay="delay" />       
         
</template>         
       

<script>
import Block from './components/Block';
import Result from './components/Result'


export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { Block, Result },
  data() {
    return {
      delay:null,
      isPlaying:false,
      
    }
  },
  methods: {
   startTimer(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
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
    color: #444;
    margin-top: 60px;
  }
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>