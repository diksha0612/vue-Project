<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="block" v-if="showblock" @click="stopTimer">
    click me
</div>
</template>

<script>
export default {
 props:['delay'],

 data(){
    return {
        showblock:false,
        timer:null,
        reactionTime:0,
    }
 },
 mounted(){
    setTimeout(() =>{
        this.showblock = true;
        this.startTimer();
        console.log("this.delay" , this.delay)
    },this.delay)
 },

 methods : {
    startTimer(){
        this.timer = setInterval(()=> {
            this.reactionTime = this.reactionTime + 10;
            
        },10)
        
    }, 
    stopTimer(){
        clearInterval(this.timer)
        this.$emit('end' , this.reactionTime)
        console.log("reaction time",this.reactionTime);
    }
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