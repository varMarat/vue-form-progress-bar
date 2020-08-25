<template>
  <div class="form-wrapper">
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
  name: 'MyForm',
  components:{
      FormGroup
  }
}
</script>

<style lang="scss">
  .form-wrapper{
    border-radius: 10px;
    padding: 20px;
    background: #fff;
  }
</style>