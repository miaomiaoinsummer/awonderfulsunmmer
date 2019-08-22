<template>
    <div>
        <div class="container">
            <carousel></carousel>
        </div>
        <div class="typelist-container">
            <div class="typelist-list">
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>          
                </ul>
            </div>
            <div class="typelist-content">
                <p>
                        Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源
                </p>
            </div>
        </div> 
        <div class="typelist-clear"></div>   
    </div>
</template>

<script>
    import carousel from '@/components/Carousel.vue'
    import '@/assets/css/home.css'
    import '@/assets/css/typelist.css'
    export default{
        name:'typelist',
        components:{carousel}
    }
</script>