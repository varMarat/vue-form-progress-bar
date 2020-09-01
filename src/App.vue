<template>
  <div id="app">
    <div class="app-wrapper">
      <ProgressBar/>

      <form action="">
        <FieldForm :formData="formData"/>
        <FieldForm :formData="formData2"/>
        <FieldForm :formData="formData3"/>
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
    FieldForm, ProgressBar
  },
  data(){
    return{
      formData: data.generalInformation,
      formData2: data.address,
      formData3: data.documentType
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
