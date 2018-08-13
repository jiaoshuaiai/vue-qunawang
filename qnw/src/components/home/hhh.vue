<template>
    <div>
        <!--<header class="vux-1px" >-->
        <header>
            <p class="header-left">返回</p>
            <p class="header-input" >
                <input type="text" placeholder="输入城市/景点/游玩主题">
                内容
            </p>
            <p class="header-select">
                城市
            </p>
        </header>
    </div>
</template>
<script>
    export default {
        name:'HomeHeader'
    }
</script>

<style scoped>
    /*.header{*/
    /*width: 760px;*/
    /*line-height: 86px;*/
    /*}*/
    header{
        width: 100%;
        background-color: #18BFDA;
        line-height: 40px;
        margin-top: -3px;
    }
    input,select{
        border: 0;
    }
    p{
        display: inline-block;
    }
    .header-left{
        width: 10%;
        color: white;


    }
    .header-input{
        width: 77%;
    }
    input{
        width: 100%;
        padding: 7px 0;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        color:   #DAE2EA;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:   #DAE2EA;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:   #DAE2EA;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:   #DAE2EA;
    }
    .header-select{
        width: 10%;
    }
    select{
        background-color: #18BFDA;
        color: white;
    }
</style>