<template>
    <div>
        <!-- <div class="container">
            <carousel></carousel>
        </div> -->
        <div class="typelist-container">
            <div class="typelist-list">
                <ul>
                    <li v-for="item in typelisttitle" v-on:click="showContent(item.id)">
                        {{item.title}}
                    </li>         
                </ul>
            </div>
            <div class="typelist-content">
                <p>
                    {{typelistContent}}
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
    import axios from 'axios'
    export default{
        name:'typelist',
        components:{carousel},
        data:function(){
            return{
                typelisttitle:[],
                typelistContent:""
            }
        },
        methods:{
            showContent:function(id){
                axios.get("/api/QuestionBanks/"+id).then((response)=>{
                  this.typelistContent=response.data.response.content
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
        mounted:function(){
                var id=this.$route.query.name
                axios.get("/api/QuestionBanks/TitlesByTypeName?typeName="+id).then((response)=>{
                    this.typelisttitle=response.data.response
                    this.showContent(this.typelisttitle[0].id);
                    console.log(response)
                })
                .catch((error=>{
                    console.log(error)
                }))
            }
    }
</script>