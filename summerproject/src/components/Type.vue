<template>
    <div class="type-components-container">  
        <div class="type-components">
            <router-link :to="{path:'/typelist'}" :title="typeitem.name" target="_blank">
                <img class="lazy" :src="typeitem.logo" :alt="typeitem.name">
            </router-link>
            <div class="components-content">
                <h3>
                    <router-link :to="{path:'/typelist'}" :title="typeitem.name" target="_blank">
                        {{typeitem.name}}
                        <br>
                        <small>{{typeitem.label}}</small>
                    </router-link>
                </h3>
                <p>{{typeitem.instructions}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'type',
        props:["typeitem"],
    }
</script>
<style>
    .type-components-container{
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .type-components{
        height: 336px;
        display: block;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        max-width: 310px;
        margin-bottom: 30px;
        border-radius: 0;
        padding: 4px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        transition: border .2s ease-in-out;
    }
    .lazy{
        max-width: 100%;
        height: auto;
        margin-right: auto;
        margin-left: auto;
        display: block;
        vertical-align: middle;
    }
    .components-content{
        height: 200px;
        overflow-y: hidden;
        color: #555;
        padding: 9px;
    }
    .components-content a{
        color: #337ab7;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;

    }
    .components-content h3{
        margin: 0;
    }
    .components-content h3 small{
        font-size: 65%;
        font-weight: 400;
        line-height: 1;
        color: #777;
    }
    .components-content p{
        margin: 0 0 10px;
        font-size: 14px;
    }
</style>