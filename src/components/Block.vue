<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="block" v-if="showblock">
    click me
</div>
</template>

<script>
export default {
 props:['delay'],

 data(){
    return {
        showblock:false
    }
 },
 mounted(){
    setTimeout(() =>{
        this.showblock = true;
        console.log("this.delay" , this.delay)
    },this.delay)
 }
}
</script>

<style>
    .block {
    width: 400px;
    border-radius: 20px;
    background:  #0faf87;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    }
</style>