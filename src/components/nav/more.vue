<template>
    <div class="moreContainer">
        <h3>给管理员留言</h3>
        <p style="text-align:center;margin-top:100px;">在线留言</p>
        <div class="text">
            <form action="" enctype="multipart/form-data" method="post">
                <span>您的称呼:</span><input v-model="name" name="name" id="name" required="required" type="text" placeholder="您的称呼">
                <div style="margin:30px 0;">
                    <span >您的手机:</span><input @blur="checkphone" v-model="mobile"  type="number" name="mobile" id="mobile" required="required" placeholder="您的手机号">
                </div>
                <textarea style="height:35vh;width:80vw;" name="content" id="content" placeholder="留言区" rows="" cols="" ></textarea><br>
                <input type="submit" class="tijiao" value="提交">
            </form> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            mobile:''
        }
    },
    methods:{
        checkphone(){
            var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            if(!phoneReg.test(this.mobile)) {
                alert('手机号码未填或填写有误');
                this.mobile = '';
            }
        }
    }
}
</script>
<style scoped>
    .moreContainer {
        margin-top: 60px;
    }
    h3 {
        position: absolute;
        top: 0;
        left: 30%;
        color: #fff;
        z-index: 9999;
    }
    .text {
        margin-left: 10vw;
        margin-top: 20px;
    }
    .tijiao {
        height: 30px;
        width: 100px;
        margin-left: 25vw;
        border: none;
        color: #fff;
        display: block;
        background: rgba(0,0,0,0.7);
    }
</style>
