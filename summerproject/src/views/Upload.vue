<template>
    <div class="upload-container">
        <h2>上传题目</h2>
        <div class="upload-type">
            <p>题目种类</p>
            <el-select placeholder="请选择" v-model="type">
                <el-option v-for="item in uploadType" :value="item.id" :label="item.name"></el-option>
            </el-select>
        </div>
        <div class="upload-title">
            <p>题目标题</p>
            <el-input v-model="title" placeholder="请输入内容"></el-input>
        </div>
        <div class="upload-content">
            <p>题目内容</p>
            <el-input type="textarea" placeholder="请输入内容" v-model="content" :rows="15"></el-input>
        </div>
        <div class="upload-button">
                <el-button type="primary" round v-on:click="uploadAll">开始上传</el-button>
        </div>
    </div>
</template>
<style>
    .upload-button{
        float: right;
        margin-top: 34px;
    }
</style>
<script>
    import axios from 'axios'
    import '@/assets/css/home.css'

    export default{
        name:'upload',
        data:function(){
            return{
              uploadType:[],
              title:"",
              content:"",
              type:"",
              isUpdate:""
            }
        },
        methods:{
            getUploadType:function(){
                axios.get('api/QuestionTypes/TypeTree').then((response)=>{
                    this.uploadType=response.data.response;
                })
                .catch((error)=>{
                    console.log(error)
                })
            },
            uploadAll:function(){
                var uploadModel={
                        "title": this.title,
                        "content": this.content,
                        "traffic": 0,
                        "sort": 0,
                        "typeId":parseInt(this.type),
                        "id":this.isUpdate
                         }
                         if( uploadModel.title==""||uploadModel.type==""||uploadModel.content==""){
                            this.$message({
                            message: '提交不能为空哦',
                            type: 'warning'
                            });

                         }else if(this.isUpdate){
                            axios.put('api/QuestionBanks/',uploadModel).then((response)=>{
                                this.$message({
                                message: '编辑成功',
                                type: 'success'
                                });
                                this.title="";
                                this.content="";
                                this.type="" ;
                               
                })
                .catch((error)=>{
                    this.$message.error('网络加载失败');
                })

                         }else{
                            axios.post('api/QuestionBanks',uploadModel).then((response)=>{
                                this.$message({
                                message: '添加成功',
                                type: 'success'
                                });
                                this.title="";
                                this.content="";
                                this.type=""  
                })
                .catch((error)=>{
                    this.$message.error('网络加载失败');
                })

                         }
                
            }
        },
        mounted:function(){
            this.getUploadType()
            this.isUpdate=this.$route.query.name;
            axios.get('api/QuestionBanks/'+this.isUpdate).then((response)=>{
                this.title=response.data.response.title;
                this.content=response.data.response.content;
                this.type=response.data.response.typeId;
            })

        }
    }
</script>