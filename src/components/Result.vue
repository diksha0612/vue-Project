<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
 <p> Reaction Time : {{rank}}</p>
</template>

<script>
export default {

props : ['scores'],

data(){
  return {
    rank : null,
  }

},
mounted(){

  if(this.scores < 250){
    this.rank = "first Rank"
  }
  else if(this.scores > 250 && this.scores < 600){
    this.rank = "Second Rank"
  }
  else {
    this.rank = "fail"
  }
  
}
}
</script>

<style>

</style>