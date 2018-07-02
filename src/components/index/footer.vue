<template>
    <div class="footerContainer">
        
        <router-link to="/home"><i class="glyphicon glyphicon-home"></i><br>首页</router-link>
        <router-link to="/message"><i class="glyphicon glyphicon-envelope"></i><br>信息</router-link>
        <router-link to="/my"><i class="glyphicon glyphicon-user"></i><br>我的</router-link>
        <router-link to="/more"><i class="glyphicon glyphicon-th-list"></i><br>留言</router-link>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .footerContainer {
        width: 100%;
        height: 55px;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid #DCDAD6;
        box-sizing: border-box;
        background-color: #fff;
    }

    .footerContainer a {
        width: 25%;
        height: 100%;
        text-decoration: none;
        float: left;
        text-align: center;
        color: #474A4F;
    }
    
    .footerContainer i {
        font-size: 16px;
        margin-top: 10px;
    }
</style>
