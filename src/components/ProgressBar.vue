<template>
    <div class="progress-wrapper">
        <ul class="progressbar">
            <li class="active">1<span>Общая информация</span></li>
            <li>2<span>Адрес</span></li>
            <li>3<span>Тип документа</span></li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'ProgressBar'
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
    
}
</style>