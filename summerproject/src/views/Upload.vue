<template>
    <div class="upload-container">
        <div class="upload-type">
            <p>题目种类</p>
            <select v-model="type" >
                <option v-for="item in uploadType" :value="item.id">{{item.name}}</option>
            </select>
        </div>
        <div class="upload-title">
            <p>题目标题</p>
            <input v-model="title">
        </div>
        <div class="upload-content">
            <p>题目内容</p>
            <textarea v-model="content"></textarea>
        </div>
        <button v-on:click="uploadAll">开始上传</button>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:'upload',
        data:function(){
            return{
              uploadType:[],
              title:"",
              content:"",
              type:""
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
                         }
                axios.post('api/QuestionBanks',uploadModel).then((response)=>{
                    alert(response.data.msg)
                })
            }
        },
        mounted:function(){
            this.getUploadType()
        }
    }
</script>