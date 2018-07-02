<template>
    <div class="messageContainer">
        <h3>我的信息</h3>
        <router-link v-if="msg == ''" class="tologin" to="/login">请先登录</router-link>
        <div v-else>
            <ul>
                <li>
                    <i class="glyphicon glyphicon-eye-close"></i>
                    <span class="message">未读消息</span>
                    <span>{{list.hasnot_read_messages.length}}</span>
                    <span class="glyphicon glyphicon-chevron-down icon" @click="showhasnot"></span>
                </li>
                <div v-if="showhasnotm" v-for="v in list.hasnot_read_messages" :key="v.reply.create_at" style="padding-left:20px;margin:10px 0;">
                    <router-link :to="{path:'/contents/' + v.id,params:{content:v.id}}" style="color:#000;">
                        <span>来自{{v.author.loginname}}</span>
                        <span style="float:right;padding-right:20px;">{{v.reply.create_at | formatData}}</span>
                        <br><p>{{v.reply.content}}</p>
                        <span>帖子: 《{{v.topic.title}}》</span>
                        <span>获{{v.reply.ups.length}}个赞</span>
                    </router-link>
                </div>
                <li>
                    <i class="glyphicon glyphicon-eye-open"></i>
                    <span class="message">已读消息</span>
                    <span>{{list.has_read_messages.length}}</span>
                    <span class="glyphicon glyphicon-chevron-down icon" @click="showhas"></span>
                </li>
                <div v-if="showhasm" v-for="v in list.has_read_messages" :key="v.reply.create_at" style="padding-left: 20px;margin: 10px 0;">
                    <router-link :to="{path:'/contents/'+v.id,params:{content:v.id}}" style="color: #000;">
                        <span>来自{{v.author.loginname}}</span><span style="float:right ;padding-right: 20px;">{{v.reply.create_at | formatDate}}</span>
                        <br /><p>{{v.reply.content}}</p>
                        <span>帖子：《{{v.topic.title}}》</span>
                        <span>获{{v.reply.ups.length}}个赞</span>
                    </router-link>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'',
            list:'',
            showhasnotm: false,
            showhasm: false
        }
    },
    methods:{
        showhasnot(){
            this.showhasnotm = !this.showhasnotm
        },
        showhas(){
            this.showhasm = !this.showhasm
        }
    },
    created(){
        this.msg = localStorage.getItem("accesstoken");
        console.log(this.msg);
        if(this.msg != null) {
            this.$http.get('https://www.vue-js.com/api/v1/messages?',{params:{accesstoken:this.msg}}).then((res) => {
                this.list = res.body.data;
                console.log(this.list)
            })
        }
    }
}
</script>
<style scoped>
    .messageContainer {
        margin-top: 60px;
    }
    h3 {
        position: absolute;
        top: 0;
        left: 38%;
        color: #fff;
        z-index: 9999;
    }
    .tologin {
        width: 112px;
        height: 36px;
        color: #ccc;
        background: rgba(0, 0, 0, 0.4);
        display: block;
        box-sizing: border-box;
        position: absolute;
        text-align: center;
        line-height: 36px;
        font-size: 2rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    ul {
        width: 100%;
    }
    ul li {
        height: 48px;
        width: 100vw;
        line-height: 48px;
        color: #474a4f;
        font-size: 18px;
        margin-top: 10px;
    }
    ul>li>i {
        margin-left: 10px;
    }
    .message {
        margin-left: 30px;
    }
    .icon {
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }
</style>
