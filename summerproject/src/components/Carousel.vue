<template>
    <div class="carousel-container individual">
        <h1>Summer Learning</h1>
        <h2>简洁、直观、丰富的前端开发题库，让前端知识更系统。</h2>
        <p class="carousel-content">
            <router-link class="btn btn-shadow" target="_blank" :to="{path:'/upload'}">
                    前端开发题库文档上传
            </router-link>
        </p>
    </div>
</template>

<script>
    export default{
        name:'carousel',
    }
</script>
<style>
    .individual{
        color: #fff;
        text-align: center;
        max-width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        padding: 90px 0 110px;
    }
    h1{
        margin-top: 0px;
    }
    .btn{
        cursor: pointer;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        font-weight: 400;
        padding: 13px 35px 17px;
        background-color: #337ab7;
        text-decoration: none;
        transition: all .2s ease-in-out;
        

    }
    .btn-shadow{
        box-shadow: inset 0 -4px 0 #23527c;
        border: 0;
        color: #fff;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
    }
    a:hover{
        background-color: #286090;
    }

</style>