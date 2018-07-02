<template>
    <div class="publishContainer">
        <h3>发布帖子</h3>
        <span class="back" @click="back">&lt;</span>
        <div v-if="id == null" class="tologin" @click="tologin">请先登录</div>
        <div v-else style="margin-top:80px;">
            <input class="publishTitle" type="text" placeholder="请填写标题" v-model="mytitle">
            <p style="font-size: 2rem;margin-left:5px;margin-top:30px;">请选择板块:</p>
            <label @click="get" id="ask">回答</label>
            <label @click="get" id="share">分享</label>
            <label @click="get" id="job">招聘</label>
            <p style="font-size:2rem;margin:20px 0 0 5px;">正文</p>
            <textarea class="mytexts" name="" rows="" cols="" v-model="mytext"></textarea>
            <span class="pushto" @click="fabu">发布</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'',
            id:'',
            mytitle:'',
            mytext:'',
            bankuai:''
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        tologin(){
            this.$router.push({path:'/login'})
        },
        get(){
            this.bankuai = event.target.id;
            var choose = document.getElementsByTagName('label');
            for(var i = 0; i < choose.length; i++) {
                choose[i].style.color = 'black'
            }
            event.target.style.color = 'red'
        },
        fabu(){
            if(this.mytitle.length < 10) {
                alert('话题标题字数不能小于10个')
            }else if(this.mytext == '') {
                alert('文章内容不能为空')
            }else if(this.bankuai == '') {
                alert('请选择板块')
            }else {
                this.$http.post('https://www.vue-js.com/api/v1/topics',{accesstoken: this.id,title:this.mytitle,tab:this.bankuai,content:this.mytext},{emulateJSON: true}).then((res) => {
                    alert('发布成功')
                })
            }
        }
    },
    mounted(){
        this.id = localStorage.getItem("accesstoken")
	},
}
</script>
<style scoped>
    .publishContainer {
        margin-top: 60px;
        background: #fff;
    }
    h3 {
        position: absolute;
        top: 0;
        left: 40vw;
        font-size: 2rem;
        color: #fff;
        z-index: 9999;
    }
    .back {
        position: absolute;
        top: 15px;
        left: 10px;
        font-size: 2rem;
        color: #fff;
        z-index: 9999;
    }
    .tologin {
        width: 30vw;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        margin-top: 80px;
        margin-left:35vw;
    }
    .publishTitle {
        width: 80vw;
        height: 30px;
        border: none;
        border-bottom: 1px solid #ccc;
        margin-left: 10px;
        outline: none;
    }
    label {
        border: 1px solid #ccc;
        margin: 5px 0 0 10px;
        padding: 5px;
    }
    .mytexts {
        width: 100vw;
        height: 200px;
    }
    .pushto {
        margin: 20px 0 0 30vw;
        border-radius: 5px;
        display: block;
        width: 30vw;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
    }
</style>
