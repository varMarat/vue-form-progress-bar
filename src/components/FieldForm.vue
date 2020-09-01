<template>
  <div class="form-wrapper">
    <div>
        <FormGroup 
          v-for="(item, index) in formData" :key="index"
          :index="+index"
          :item="item"
          :errors="errors"
          @input-child="onInput"
        />
        <button class="btn" >next</button>
    </div>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue'
import {required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'FieldForm',
  components:{
      FormGroup
  },
  props:{
    formData:{
      type: Array
    }
  },
  beforeMount(){
    this.formData.forEach((item)=>{
      this.errors.push(true)
      if(item.required===true){
         this.$set(this.fieldsVal, item.name, '')
      }
    })
  },
  validations:{
    fieldsVal:{
      name:{
        required,
        minLength: minLength(4)
      },
      email:{
        minLength: minLength(6)
      },
      password:{
        minLength: minLength(8)
      }
    }
  },
  data(){
    return{
      fieldsVal:{},
      errors:[]
    }
  },
  methods:{
    onInput(data){
      if(this.fieldsVal[data.name] != undefined){
        this.fieldsVal[data.name] = data.value
        this.$v.fieldsVal[data.name].$touch()
        this.$set(this.errors, data.id, this.$v.fieldsVal[data.name].$error)
      }else{
        this.$set(this.errors, data.id, false)
      }  
    },
    onClick(){
      console.log('btn')
    }
  }
}
</script>

<style lang="scss">
  .form-wrapper{
    border-radius: 10px;
    padding: 20px;
    background: #fff;
  }
  .btn{
    display: block;
    margin: 0 auto;
    height: 30px;
    width: 20%;
    border: none;
    background: #27AE60;
    color: #fff;
  }
  .bor{
    border: 1px solid red;
  }
</style>