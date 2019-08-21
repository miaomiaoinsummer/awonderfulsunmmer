
<template>
    <div>
        
        <div class="container">
            <carsousel></carsousel>
        </div>
        <div class="social">
                <div class="social-container">
                    <ul class="social-buttom">
                        <li class="social-forum">
                            <a href="http://wenda.bootcss.com" title="问答社区" target="_blank">问答社区</a>
                        </li>
                        <li class="social-weibo">
                            <a href="https://weibo.com/bootcss" title="@sunmmerlearning">sunmmerlearning</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="carousel-container project">
                <div class="project-header">
                    <h2>Summer Learning相关优质题目推荐</h2>
                    <p>这些是有关前端开发知识题库，或者是基于vue，react开发的</p>
                </div>
            </div>
            <div class="carousel-container type-container">
                <type></type>
            </div>
    </div>
</template>
<script>

import carsousel from '@/components/Carousel.vue'
import type from '@/components/Type.vue'
import '@/assets/css/home.css'
    export default{
        name:'Home',
        components:{carsousel,type},
        data(){
            typelist:[]

        }
    }
</script>