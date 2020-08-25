<template>
    <div class="my-form-group">
        <label for="">Password</label>
        <input type="password" class="my-form-control">
    </div>
</template>

<script>
export default {
    name:'FormGroup'
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
</style>