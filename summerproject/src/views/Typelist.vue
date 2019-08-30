<template>
    <div>
        <div class="typelist-container">
            <div class="typelist-container-menu">       
                <h1 class="typelist-title-name">{{typelistName+"题型"}}</h1>
                <button type="button" class="open-nav" id="open-nav" v-on:click="showMenu"></button>
                <div class="search-menu" :class="showleftmenu?'closed':''">
                        <form class="typelist-input">
                                <input type="text"  id="typelist-search" placeholder="Search" v-model="searchValue">
                                <div class="search-input-icon">
                                    <el-button icon="el-icon-search" circle v-on:click="typelistSearch"></el-button>
                                </div>
                            </form>
                                <nav class="typelist-list">
                                     <ul>
                                        <li v-for="item in typelisttitle" :class="item.isShow?'on':''" v-on:click="showContent(item.id)">
                                            {{item.title}}
                                        </li>         
                                     </ul>
                                </nav>
                </div>
            </div>
            <div class="typelist-content">
                    <div class="typelist-content-update">
                        <router-link :to="{path:'/upload',query:{name:typelisttitleid}}">
                                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        </router-link>
                            <el-button type="danger" icon="el-icon-delete" circle v-on:click="typelistDelete"></el-button>
                            
                    </div>
                <p>
                    <!-- {{typelistContent}} -->
                    <p v-html="typelistContent"></p>
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
                typelistName:"",
                typelisttitleid:"",
                resettypelisttutle:[],
                searchValue:"",
                showleftmenu:true
            }
        },
        methods:{
            showContent:function(id){
                this.showleftmenu=!this.showleftmenu;
                this.typelisttitle.forEach(element=>{
                    if(element.id==id){
                        element.isShow=true;
                    }else{
                        element.isShow=false;
                    }
                })
                axios.get("/api/QuestionBanks/"+id).then((response)=>{
                  this.typelistContent=response.data.response.content.replace(/\n/g,'<br>')
                  this.typelisttitleid=response.data.response.id;
                })
                .catch((error)=>{
                    console.log(error)
                })
            },
            typelistDelete:function(){
                axios.delete('api/QuestionBanks/'+this.typelisttitleid).then((response)=>{
                    this.$message({
                                message: '删除成功',
                                type: 'success'
                                });
                                history.go(0);
                    
                })
                .catch((error)=>{
                    this.$message.error('网络加载失败');
                })

            },
            typelistSearch:function(){
                if(this.searchValue!=""){
                    var alltypelisttitle=[];
                    this.typelisttitle.forEach(element => {
                       if(element.title.indexOf(this.searchValue)>=0){
                           alltypelisttitle.push(element)
                       }
                       
                    }); 
                    this.typelisttitle=alltypelisttitle;
                }else{
                       this.typelisttitle=this.resettypelisttutle
                }

                
                this.typelisttitle.forEach(element=>{
                    if(element.id==this.typelisttitleid){
                        element.isShow=true;
                    }else{
                        element.isShow=false;
                    }
                })

            },
            showMenu:function(){
                this.showleftmenu=!this.showleftmenu;
            }
        },
        mounted:function(){
                var id=this.$route.query.name
                this.typelistName=id;
                axios.get("/api/QuestionBanks/TitlesByTypeName?typeName="+id).then((response)=>{
                    this.typelisttitle=response.data.response
                    this.resettypelisttutle=this.typelisttitle
                    this.showContent(this.typelisttitle[0].id);
                    console.log(response)
                })
                .catch((error=>{
                    console.log(error)
                }))
            }
    }
</script>