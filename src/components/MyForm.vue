<template>
  <div class="wrapper">
    <form action="">
        <FormGroup/>
        <FormGroup/>
        <FormGroup/>
    </form>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue'

export default {
  name: 'myForm',
  components:{
      FormGroup
  }
}
</script>

<style lang="scss">
  .wrapper{
    width: 50%;
    margin: 0 auto;
    border: 2px solid rgb(121, 55, 207);
    border-radius: 10px;
    padding: 20px;
  }
</style>