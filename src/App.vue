<template>
<h1>SignUp Form:</h1>
<Signform />
</template>


<script>
import Signform from './components/signform'

export default {
  name: 'App',
  components: { Signform },
  data() {
    return {
     
     
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
  font-family:cursive;
  font-weight: bold;
}
body {
  background-color:darkcyan
}
</style>