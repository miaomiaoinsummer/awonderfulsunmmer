<template>
    <div>
        <div class="typelist-container">
            <div class="typelist-container-menu">       
                <h1 class="typelist-title-name">{{typelistName+"题型"}}</h1>
                <form class="typelist-input">
                    <input type="text"  id="typelist-search" placeholder="Search">
                    <div class="search-input-icon">
                        <el-button icon="el-icon-search" circle></el-button>
                    </div>
                </form>
                    <nav class="typelist-list">
                         <ul>
                            <li v-for="item in typelisttitle" v-on:click="showContent(item.id)">
                                {{item.title}}
                            </li>         
                         </ul>
                    </nav>
            </div>
            <div class="typelist-content">
                    <div class="typelist-content-update">
                            <el-button type="primary" icon="el-icon-edit" circle></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            
                    </div>
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
                typelistContent:"",
                typelistName:""
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
                this.typelistName=id;
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