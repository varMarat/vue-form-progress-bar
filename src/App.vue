<template>
  <div id="app">
    <div class="app-wrapper">
      <ProgressBar/>
      <MyForm/>
    </div>
  </div>
</template>

<script>
import MyForm from './components/MyForm'
import ProgressBar from './components/ProgressBar'
export default {
  name: 'App',
  components: {
    MyForm, ProgressBar
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
