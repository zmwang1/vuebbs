<template>
    <div class="myContainer">
        <div class="top">
            <h3>个人中心</h3>
            <router-link class="glyphicon glyphicon-envelope" to="/message"></router-link>
        </div>
        <div v-if="this.msg != null">
            <div class="user">
                <img :src="list.avatar_url" :onerror="logo" alt="">
                <div class="user_r">
                    <p>{{list.loginname}}</p>
                    <p>积分:{{list.score}}</p>
                    <p>注册时间:{{list.create_at | formatDate}}</p>
                </div>
                
            </div>
            <div class="content">
                <ul>
                    <li>
                        <i class="glyphicon glyphicon-comment"></i>
                        <span class="message">最近的话题:</span>
                        <span>{{list.recent_topics.length}}</span>
                        <span class="glyphicon glyphicon-chevron-down icon" @click="showtopics"></span>
                    </li>
                    <div v-if="topics" v-for="v in list.recent_topics" :key="v.last_reply_at" style="padding-left:20px;margin:10px 0;">
                        <router-link :to="{path:'/contents/' + v.id,params:{content:v.id}}" style="color:#000;"><span>{{v.title}}</span><span style="float:right;padding-right:20px;">{{v.last_reply_at | formatDate}}</span></router-link>
                    </div>
                    <li>
                        <i class="glyphicon glyphicon-globe"></i>
                        <span class="message">最近的回复:</span>
                        <span>{{list.recent_replies.length}}</span>
                        <span class="glyphicon glyphicon-chevron-down icon" @click="showreplies"></span>
                    </li>
                    <div v-if="replies" v-for="v in list.recent_replies" :key="v.last_reply_at" style="padding-left:20px;margin:10px 0;">
                        <router-link :to="{path:'/contents/' + v.id,params:{content:v.id}}" style="color:#000;"><span>{{v.title}}</span><span style="float:right;padding-right:20px;">{{v.last_reply_at | formatDate}}</span></router-link>
                    </div>
                    <li>
                        <i class="glyphicon glyphicon-star"></i>
                        <span class="message">收藏的话题:</span>
                        <span>{{list.collect_topics.length}}</span>
                        <span class="glyphicon glyphicon-chevron-down icon" @click="showcollect"></span>
                    </li>
                    <div v-if="collect" v-for="v in list.collect_topics" :key="v.last_reply_at" style="padding-left:20px;margin:10px 0;">
                        <router-link :to="{path:'/contents/' + v.id,params:{content:v.id}}" style="color:#000;"><span>{{v.title}}</span><span style="float:right;padding-right:20px;">{{v.last_reply_at | formatDate}}</span></router-link>
                    </div>
                </ul>
                <a @click="logout" class="logout">退出登录</a>
            </div>
        </div>
        <div v-else class="nologin" style="margin-top: 45vh;">
            <router-link to="/">请先登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'',
            list:'',
            topics:false,
            replies:false,
            collect:false,
            logo:'this.src="' + require('../../images/user.jpg') + '"'
        }
    },
    created(){
        this.msg = localStorage.getItem("loginname")
        this.$http.get('https://www.vue-js.com/api/v1/user/' + this.msg).then((res) => {
            this.list = res.body.data;
            console.log(this.list)
        })
    },
    methods:{
        showtopics(){
            this.topics = !this.topics
        },
        showreplies(){
            this.replies = !this.replies
        },
        showcollect(){
            this.collect = !this.collect
        },
        logout(){
            localStorage.removeItem('accesstoken');
            localStorage.removeItem('user_id');
            localStorage.removeItem('loginname');
            this.$router.push({path:'/'});
        }
    }
}
</script>
<style scoped>
    .myContainer {
        margin-top: 60px;
    }
    h3 {
        position: fixed;
        top: 1%;
        left: 35%;
        color: #fff;
        z-index: 9999;
    }
    .top>a {
        position: fixed;
        z-index: 9999;
        top: 4%;
        left: 88%;
        font-size: 18px;
        color: #fff;
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
    .logout,.nologin>a {
        display: block;
		color: #fff;
		background: rgba(0,0,0,0.4);
		box-sizing: border-box;
		position: absolute;
		height: 36px;
		width: 112px;
		text-align: center;
		line-height: 36px;
		font-size: 2rem;
		left: 35vw;
		margin-top: 20px;
    }
</style>
