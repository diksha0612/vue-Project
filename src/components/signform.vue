<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="handleSubmit">
<label>Email:</label>
<input type="email" v-model = "email" required/>

<label>Password:</label>
<input type="password" v-model="password" required/>

<label>Role:</label>
<select v-model="role">
  <option value="developer">Web Developer</option>
  <option value="designer">Web Designer</option>
</select>

<div class = "terms">
    <input type="checkbox" v-model="terms"/>
     <label>Accept terms and conditions</label>
</div>

<label>Skills:</label>
<input type="text" v-model="tempskill" @keyup.alt="addskills" />
<div v-for="skill in skills" :key="skill" class="pill">
 <span @click ="deleteskill(skill)">{{skill}}</span>
</div>

<div class="submit">
  <button>Submit</button>
</div>

  </form>
</template>

<script>
export default {
    data() {
         return {
          email:'',
          password:'',
          role:'',
          tempskill:'',
          skills:[],
          terms:''


      
         }
    },

    methods : {
      addskills(e){
        if(e.key == ',' && this.tempskill){
          
      if(!this.skills.includes(this.tempskill)){
          this.skills.push(this.tempskill)
      }
      this.tempskill = ''
        }
    },
     deleteskill(skill){
        this.skills = this.skills.filter((item) => {
          return skill != item
        })
      },
      handleSubmit(){
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.tempskill)
        console.log('terms accepted: ', this.terms)
      }
      }

     
    }

  

</script>

<style>
 form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    /* float :left */
  }
  label {
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background : black;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color:white;
    cursor: pointer;
  }

   button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>