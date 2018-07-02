<template>
    <div class="contentsContainer">
        <p class="back" @click="back">&lt;</p>
        <span>{{msg.title}}</span>
        <div class="content">
            <span v-if="msg.top" class="top">置顶</span>
			<span v-else-if="msg.tab=='share'" class="other">分享</span>
			<span v-else-if="msg.tab=='job'" class="other">招聘</span>
			<span v-else-if="msg.tab=='week'" class="other">week</span>
			<span v-else-if="msg.tab=='good'" class="other">精华</span>
			<span v-else class="other">问答</span>
            <span class="title">{{msg.title}}</span>
        </div>
        <div class="author">
            <img :src="msg.author.avatar_url" :onerror="logo" alt="">
            &nbsp;&nbsp;&nbsp;&nbsp;<span>作者:{{msg.author.loginname}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span>发表时间:{{msg.create_at| formatDate}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="margin-left:50px;margin-top:-80px;">最后回复时间:{{msg.last_reply_at| formatDate}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span>浏览量:{{msg.visit_count}}</span>
        </div>
        <div class="collect" v-if="id != null" @click="collect"><i style="color:#fff;" class="glyphicon glyphicon-heart-empty"></i> 收藏本帖</div>
        <div v-html="msg.content" class="text"></div>

        <b v-if="msg.replies.length != 0" class="comment-area">评论区</b>
        <div v-for="(v,i) in msg.replies" :key="v.create_at">
            <div style="margin-top:15px">
                <router-link :to="{path:'/people/' + v.author.loginname,params:{id:v.author.loginname}}"><img style="height:30px;width:30px;margin-top: -5px;" :src="v.author.avatar_url" :onerror="logo" alt=""></router-link>
                <span style="margin-left:10px;">{{v.author.loginname}}</span><span>{{i + 1}}楼--</span><span>{{v.create_at | formatDate}}</span>
            </div>
            <p style="margin-top:5px;padding-left:10px" v-html="v.content"></p>
            <br>
        </div>
        <div v-if="id==null" @click="tologin" class="tologin">请先登录</div>
        <div v-else>
            <b style="font-size:2rem;">评论</b>
            <textarea v-model="mytext" name="" rows="" cols="" style="width:90vw;height:200px;margin-top:20px;"></textarea>
            <span class="mycontent" @click="chat">评论</span>
        </div>
    </div>
</template>
<script>
export default {
   data(){
       return{
           msg:'',
           id:'',
           mytext:'',
           logo:'this.src="' + require('../../images/user.jpg') + '"'
       }
   },
   methods:{
       back(){
           this.$router.go(-1)
       },
       collect(){
           this.$http.post('https://www.vue-js.com/api/v1/topic/collect',{accesstoken: this.id,topic_id:this.$route.params.id}).then((res) => {
               alert('收藏成功')
           })
       },
       tologin(){
           this.$router.push({path:'/login'})
       },
       chat(){
           this.$http.post('https://www.vue-js.com/api/v1/topic/' + this.$route.params.id + '/replies',{accesstoken:this.id,content:this.mytext}).then((res) => {
               alert('评论成功')
               location.reload()
           })
       }
   },
    mounted(){
        this.msg = this.$route.params.id;
        console.log(this.msg)
        this.id = localStorage.getItem("accesstoken")
        console.log(this.id)
        this.$http.get('https://www.vue-js.com/api/v1/topic/' + this.$route.params.id).then((res) => {
            this.msg = res.body.data;
            console.log(this.msg.replies)
        })
    }
}
</script>
<style>
    .contentsContainer>span {
        position: fixed;
        top: 4%;
        left: 22%;
        color: #fff;
        z-index: 9999;
        font-size: 16px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .back {
        position: fixed;
        top: 3%;
        left: 2%;
        color: #fff;
        z-index: 9999;
        font-size: 20px;
    }
    .contentsContainer {
        margin-top: 60px;
    }
    .top {
        background-color: #09912C;
        color: #fff;
        border-radius: 1px;
        font-size: 16px;
    }
    .content {
        padding-top: 25px;
        margin-left: 10px;
    }
    .other {
        background-color: #c5c5c7;
        color: #fff;
        border-radius: 1px;
        font-size: 16px;
    }
    .title {
        font-size: 18px;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 20px 0 0 10px;
    }
    .author {
        margin-top: 20px;
        padding-bottom: 10px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .collect {
        width: 30vw;
        height: 30px;
        margin-top: 5px;
        border-radius: 5px;
        margin-left: 35vw;
        display: block;
        text-align: center;
        line-height: 30px;
        color: #fff;
        background: rgba(255,0,0,0.6);
    }
    .text {
        margin-top: 20px;
        padding: 0 10px 100px 10px;
    }
    .text img {
        width: 100px;
        height: 100px;
    }
    .comment-area {
        width: 100%;
        height: 40px;
        font-size: 2rem;
        border-bottom: 1px solid #ccc;
        display: block;
        line-height: 40px;
    }
    .tologin {
        margin-left: 25vw;
        margin-bottom: 70px;
        border-radius: 5px;
        height: 50px;
        width: 50vw;
        display: block;
        background-color: rgba(0,0,0,0.8);
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
    .mycontent {
        border-radius: 5px;
        margin-left: 30vw;
        margin-bottom: 70px;
        display: block;
        width: 30vw;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
    }
</style>
