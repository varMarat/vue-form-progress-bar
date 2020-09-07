<template>
    <div class="my-form-group">
        <label for="">{{item.label}}</label> 
        <span v-show="errors[index].activated">
            <i class="fas fa-exclamation-circle" v-if="errors[index].error"></i>
            <i class="fas fa-check-circle" v-else></i>
        </span>
        <input 
            :type="item.type"
            :name="item.name"
            class="my-form-control"
            :class="{'bor': !errors[index]}"
            @input="onInput($event, index)"
        >
    </div>
</template>

<script>
export default {
    name:'FormGroup',
    props:{
        item:{
            type: Object
        },
        errors: Array,
        index: Number
    },
    methods:{
        onInput(e, id){
            this.$emit('input-child', {
                value: e.target.value,
                name: e.target.name,
                id: id
            })
        }
    }
}
</script>

<style lang="scss">
.my-form-control{
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 6px;
    box-sizing: border-box;
    transition: 0.3s;
    &:focus{
        border-color: rgb(30, 144, 255);
        box-shadow: 0 0 8px 0 rgb(30, 144, 255);
    }
}
span{
    margin-left: 5px;
}
</style>