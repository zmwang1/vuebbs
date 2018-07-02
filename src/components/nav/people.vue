<template>
    <div class="peopleContainer">
        <p class="back" @click="back()">&lt;</p>
        <h3>用户信息</h3>
        <div class="user">
            <img :src="list.avatar_url" :onerror="logo" alt="">
            <div class="user_r">
                <p>{{list.loginname}}</p>
                <p>积分:{{list.score}}</p>
                <p>注册时间:{{list.create_at | formatDate}}</p>
            </div>
            
        </div>
        <div>
            <ul>
                <li>
                    <i class="glyphicon glyphicon-comment"></i>
                    <span class="message">最近的话题:</span>
                    <span>{{list.recent_topics.length}}</span>
                    <span class="glyphicon glyphicon-chevron-down icon"></span>
                </li>
                <li>
                    <i class="glyphicon glyphicon-globe"></i>
                    <span class="message">最近的回复:</span>
                    <span>{{list.recent_replies.length}}</span>
                    <span class="glyphicon glyphicon-chevron-down icon"></span>
                </li>
                <li>
                    <i class="glyphicon glyphicon-star"></i>
                    <span class="message">收藏的话题:</span>
                    <span>{{list.collect_topics.length}}</span>
                    <span class="glyphicon glyphicon-chevron-down icon"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:'',
            logo:'this.src="' + require('../../images/user.jpg') + '"'
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
    created(){
        this.$http.get('https://www.vue-js.com/api/v1/user/'+this.$route.params.id).then((res) => {
            
            this.list = res.body.data;
            console.log(this.list)
           
        })
    }
}
</script>
<style scoped>
    .peopleContainer {
        margin-top: 60px;
    }
    h3 {
        color: #fff;
        z-index: 9999;
        position: fixed;
        top: 1%;
        left: 35%;
    }
    .back {
        position: fixed;
        top: 3%;
        left: 2%;
        color: #fff;
        z-index: 9999;
        font-size: 20px;
    }
 
    .user img {
        width: 70px;
        height: 70px;
        margin: 10px 10px;
    }
    .user_r {
        position: absolute;
        top: 12%;
        left: 32%;
    }
    .user_r p {
        font-size: 12px;
        margin: 0;
    }
    ul {
        width: 100%;
    }
    ul > li {
        height: 48px;
        width: 100vw;
        line-height: 48px;
        margin-top: 10px;
        color: #474a4f;
        font-size: 16px;
    }
    ul>li>i {
        margin-left: 10px;
    }
    .message {
        margin-left: 30px;
    }
    .icon {
        float: right;
        margin: 10px 10px 0 0;
    }
</style>
