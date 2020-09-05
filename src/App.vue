<template>
  <div id="app">
    <div class="app-wrapper">
      <progress-bar/>

      <form action="">
        <field-form v-for="(item, index) in keys" :key="index"
          :formData='formData[item]'
          :nameBtn="nameBtn"
          v-show="step===index+1"
          @next="nextClick"
        />
      </form>

    </div>
  </div>
</template>

<script>
import FieldForm from './components/FieldForm'
import ProgressBar from './components/ProgressBar'
import data from './data'

export default {
  name: 'App',
  components: {
    'field-form': FieldForm,
    'progress-bar': ProgressBar
  },
  data(){
    return{
      formData: data,
      keys: Object.keys(data),
      step: 1,
      nameBtn:'next'
    }
  },
  methods:{
    nextClick(e){
      if(this.step < this.keys.length){
         e.preventDefault()
         this.step++
      }
      if(this.step===this.keys.length){
        this.nameBtn='submit'
      }
    }
  }
}
</script>

<style lang="scss">
.app-wrapper{
  width: 50%;
  margin: 50px auto;
  border: 3px solid rgb(224, 43, 43);
  padding: 10px;
  border-radius: 10px;
}
</style>