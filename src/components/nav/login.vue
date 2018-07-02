<template>
    <div class="loginContainer">
        <span class="back" @click="back">&lt;</span>
        <h3>登录页面</h3>
        <a class="signup" href="https://www.vue-js.com/signup">注册</a>
        <input class="text" type="text" placeholder="请输入accessToken" v-model="accessToken">
        <input class="button" type="button" value="登录" @click="login">
        <p id="get" @click="show"><i class="glyphicon glyphicon-question-sign"></i>如何获取ACCESSTOKEN</p>
        <p id="show" @click="show">登录vue.js中文社区，在设置页面可以看到自己的accessToken</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'',
            accessToken:'',
            loginname:'',
            avatar_url:'',
            id:'',
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        show(){
            if(show.style.display == "none") {
                show.style.display = "block"
            }else{
                show.style.display = "none"
            }
        },
        login(){
            
            this.$http.post('https://www.vue-js.com/api/v1/accesstoken',{accesstoken: this.accessToken},{emulateJSON: true}).then(function(res){
                if(res.body.success){
                    alert('登录成功')
                    console.log(res.body)
                    localStorage.setItem('accesstoken', this.accessToken)
                    localStorage.setItem('user_id', res.data.id)
                    localStorage.setItem('loginname', res.data.loginname)
                    this.$router.push({ path: '/home' })
                }else{
                    alert('ACCESSTOKEN错误')
                }
                    
            }.bind(this))
        },
        
    },
    mounted(){
        if(localStorage.getItem("accesstoken")!=null){
            this.$router.push({ path: '/home' })
        }
    }
}
</script>
<style scoped>
    h3 {
        position: absolute;
        top:0;
        left: 38%;
        color: #fff;
        z-index: 9999;
    }

    .back {
        position: fixed;
        top: 3%;
        left: 2%;
        font-size: 20px;
        color: #fff;
        z-index: 9999;
    }

    .signup {
        position: fixed;
        top: 4%;
        right: 5%;
        color: #ff5252;
        font-size: 16px;
        z-index: 9999;
    }

    .text {
        position: absolute;
        top: 35%;
        left: 30%;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
    }

    .button {
        width: 88px;
        height: 36px;
        display: block;
        background-color:rgba(0, 0, 0, 0.4);
        color: #fff;
        border: none;
        outline: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        margin: auto;
    }

    #get {
        width: 222px;
        height: 36px;
        text-align: center;
        box-shadow: 3px 3px 5px #888888;
        line-height: 36px;
        color: #474a4f;
        position: absolute;
        left: 0;
        right: 0;
        top: 65%;
        margin: auto;
        
    }
    #show {
        width: 100%;
        height: 80px;
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        position: absolute;
        bottom: 45px;
        text-align: center;
        display: none;
    }

    #get i {
        color: #474a4f;
    }
</style>
