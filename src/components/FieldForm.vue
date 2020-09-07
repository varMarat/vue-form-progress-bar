<template>
  <div class="form-wrapper">
    <div>
        <form-group 
          v-for="(item, index) in formData" :key="index"
          :index="+index"
          :item="item"
          :errors="errors"
          @input-child="onInput"
          />
        <button class="btn" @click="onClick($event)">{{nameBtn}}</button>
    </div>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue'
import {required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'FieldForm',
  components:{
      'form-group': FormGroup
  },
  props:{
    formData: Array,
    nameBtn: String
  },
  beforeMount(){
    this.formData.forEach((item, index)=>{
      this.$set(this.errors, index, {
         error: true,
         activated: false,
      })
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
        required,
        minLength: minLength(6)
      },
      password:{
        required,
        minLength: minLength(8)
      }
    }
  },
  data(){
    return{
      fieldsVal:{},
      errors:[], 
    }
  },
  methods:{
    onInput(data){
      if(this.fieldsVal[data.name] != undefined){
        this.fieldsVal[data.name] = data.value
        this.$v.fieldsVal[data.name].$touch()
        this.errors[data.id].error = this.$v.fieldsVal[data.name].$error
        this.errors[data.id].activated = true
      }else{
        this.errors[data.id].error = false
        this.errors[data.id].activated = true
      }  
    },
    onClick(e){
      this.$emit('next', e)
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
</style>