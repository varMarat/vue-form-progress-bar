<template>
    <div class="progress-wrapper">
        <ul class="progressbar">
            <li
                v-for="(item, index) in titles" :key="index"
                :class="{'active':index+1==step}"
            >
            {{index+1}}
            <span>{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'ProgressBar',
    props:{
        step: Number
    },
    data(){
        return{
            titles:[
                'Общая информация',
                'Адрес',
                'Тип документа'
            ]
        }
    }
}
</script>

<style lang="scss">
.progress-wrapper{
    margin-bottom: 40px;
}
.progressbar{
    display: flex;
    justify-content: space-around;
    li{
        background: #fff;
        border-radius: 5px;
        list-style-type: none;
        padding: 5px 0;
        width: 8%;
        text-align: center;
        position: relative;
        &:after{
            position: absolute;
            content: '';
            background: #fff;
            width: 160%;
            height: 2px;
            top: 50%;
            left: 100%;
        }
         &:before{
            position: absolute;
            content: '';
            background: #fff;
            width: 160%;
            height: 2px;
            top: 50%;
            right: 100%;
        }
        &:last-child:after{
            width: 0;
            height: 0;
        }
        &:first-child:before{
            width: 0;
            height: 0;
        }
        span{
            position: absolute;
            color: #fff;
            font-size: .7em;
            top: 110%;
            left: -50%;
            right: -50%;
        }
    }
    .active{
            background-color: #27AE60;
    }
    
}
</style>